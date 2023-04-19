function getSearchProperty() {
  let att = $("#selectAttribute").val()
  let tag = $("#selectTag").val()
  let start_dt = $("#inputStartDt").val()
  let end_dt = $("#inputEndDt").val()
  let unit_type = $("#selectUnitType").val()
  return 'unit_types=Char'
    + '&tag_search_mode=and'
    + '&start_dt=' + start_dt
    + '&end_dt=' + end_dt
    + '&tags=' + att + '-' + tag
    + '&unit_types=' + unit_type
}

function changeTagList(data) {
  let sel_tag = $('#selectTag');
  if (data.data) {
    let opt = $('<option>');
    opt.val("");
    opt.text("未指定");
    sel_tag.append(opt)
    for (let d of data.data) {
      let opt = $('<option>');
      opt.val(d.desc);
      opt.text(d.desc + '(' + d.p_cnt + ')');
      sel_tag.append(opt)
    }
    sel_tag.val('')
    updateGraphManage()
  }
}


function changeTagListManage() {
  let sel_tag = $('#selectTag');
  let params = '?tags=' + $('#selectAttribute').val()
    + '&start_dt=' + $('#inputStartDt').val()
    + '&end_dt=' + $('#inputEndDt').val()
  sel_tag.children().remove();
  ajaxGet('/netgraph/get_tags_filterby_tag' + params, changeTagList)
}

function updateGraph(data) {
  let container = document.getElementById('netGraph');
  let img_path_char = '/wf_party_archives/static/root/img/chars/'
  let img_path_equip = '/wf_party_archives/static/root/img/item/equips/'
  if (data.data && data.data.length > 0) {
    // create an array with nodes
    let l_nodes = []
    let tmp_img_path = ''
    data.data[0].unit_list.forEach(row => {
      if (row.unit__unit_type__desc == 'Char') {
        tmp_img_path = img_path_char + row.unit__unit_id + '/square_0.png'
      } else {
        tmp_img_path = img_path_equip + row.unit__unit_id + '.png'
      }
      l_nodes.push({
        id: row.unit__id,
        unit_id: row.unit__unit_id,
        unit_name: row.unit__sub_name_jp + ' ' + row.unit__name_jp,
        value: row.cnt,
        image: tmp_img_path,
        shape: 'image',
      })
    });
    let nodes = new vis.DataSet(l_nodes);

    // create an array with edges
    let l_edges = []
    data.data[0].combi_list.forEach(row => {
      l_edges.push({
        from: row.id1,
        to: row.id2,
        value: row.cnt ** 2
      })
    });
    let edges = new vis.DataSet(l_edges);

    // create a network
    let vis_data = {
      nodes: nodes,
      edges: edges,
    };
    let options = {
      nodes: {
        scaling: {
          customScalingFunction: function (min, max, total, value) {
            return value / total;
          },
          min: 2,
          max: 150,
        },
      },
      edges: {
        smooth: {
          type: 'continuous'
        }
      },
      layout: {
        improvedLayout: false
      },
    };
    let network = new vis.Network(container, vis_data, options);
    network.on('click', function(params) {
      if (params.nodes.length == 1) {
        let nodeId = params.nodes[0];
        let node = nodes.get(nodeId);
        window.open(
          '/?page=1&use_unit_ids=' + node.unit_id
            + '&tag_descs=' + $("#selectAttribute").val() + ' ' + $("#selectTag").val()
            + '#searchResult');
      }
    });
  } else {
    while(container.lastChild){
      container.removeChild(container.lastChild);
    }
    var p_msg = document.createElement('p');
    p_msg.textContent = '該当するキャラクターが存在しません';
    container.appendChild(p_msg);
  }
}

function updateGraphManage() {
  search_property = getSearchProperty()
  ajaxGet('/netgraph/cnt_per_combi?&' + search_property, updateGraph)
}

function getDateStr(dt) {
  let y = dt.getFullYear();
  let m = ('00' + (dt.getMonth()+1)).slice(-2);
  let d = ('00' + dt.getDate()).slice(-2);
  let result = y + '-' + m + '-' + d;
  return result;
}

function setTodayToEndDt() {
  let today = new Date()
  let nextday = new Date()
  nextday.setDate(nextday.getDate() + 1)
  $('#inputStartDt').prop('max', getDateStr(today))
  $('#inputEndDt').prop('max', getDateStr(nextday))
  $('#inputEndDt').val(getDateStr(nextday))
}

function normalizeDate(stable_dt) {
  let in_s_dt = new Date(Date.parse($('#inputStartDt').val()))
  let in_e_dt = new Date(Date.parse($('#inputEndDt').val()))
  if (in_s_dt >= in_e_dt) {
    if (stable_dt == 'start') {
      let tmp_dt = in_s_dt
      tmp_dt.setDate(tmp_dt.getDate() + 1)
      $('#inputEndDt').val(getDateStr(tmp_dt))
    } else {
      let tmp_dt = in_e_dt
      tmp_dt.setDate(tmp_dt.getDate() - 1)
      $('#inputStartDt').val(getDateStr(tmp_dt))
    }
  }
}

$(document).ready(function () {
  setTodayToEndDt()
  changeTagListManage()
  $('#selectAttribute').on('change', function () {
    changeTagListManage()
  })
  $('#selectTag').on('change', function () {
    updateGraphManage()
  })
  $('#inputStartDt').on('change', function () {
    normalizeDate('start')
    changeTagListManage()
  })
  $('#inputEndDt').on('change', function () {
    normalizeDate('end')
    changeTagListManage()
  })
  $('#selectUnitType').on('change', function () {
    changeTagListManage()
  })
})