function EnterUseUnit(tgt_ul, unit) {
  var l = $('<li></li>', {
    addClass: 'useUnitli'
  });
  l.data('unit_id', unit.unit_id)
  var d = $('<div></div>', {
    addClass: 'unitWrap'
  });
  var img = $('<img>', {
    src: unit.img_src,
    addClass: 'imgUnit'
  });
  var i = $('<div></div>', {
    addClass: 'icon--cross',
    on: {click: function(){$(this).parents('.useUnitli').remove();}}
  });
  d.append(img, i);
  l.append(d);
  $(tgt_ul).prepend(l);
}

function StartSearch(changeSort=false) {
  if (!!$('#id_form-0-enemy').val() && ! $('#id_form-0-difficulty').val()) {
    raiseErrMsg('クエストの難易度を選択してください。');
  } else {
    tgt_url = '?page=1';

    tmp = $('#useUnitList').children('.useUnitli');
    if (tmp.length > 0) {
      use_units = [];
      tmp.each(function () {
        use_units.push($(this).data('unit_id'));
      })
      tgt_url = tgt_url + '&use_unit_ids=' + use_units.join('-');
    }

    if (!!$('#id_form-0-enemy').val() && !!$('#id_form-0-difficulty').val()) {
      tgt_url = tgt_url + '&quest_ids=' + $('#id_form-0-difficulty').val();
    }

    tmp = $('.tagList').children('.Tagli.checked');
    if (tmp.length > 0) {
      tag_descs = [];
      tmp.each(function () {
        tag_descs.push($(this).data('tag_desc'));
      })
      tgt_url = tgt_url + '&tag_descs=' + tag_descs.join(' ');
    }

    tmp = $('#selectLeaderRole');
    if (!!tmp.val()) {
      tgt_url = tgt_url + '&leader_role_desc=' + tmp.val();
    }

    tmp = $('#considerChars');
    if (tmp.prop('checked')) {
      tgt_url = tgt_url + '&consider_chars=True';
    }

    tmp = $('#considerEquips');
    if (tmp.prop('checked')) {
      tgt_url = tgt_url + '&consider_equips=True';
    }

    if (changeSort) {
      tmp = $('#selectSort');
      if (!!tmp.val()) {
        tgt_url = tgt_url + '&order=' + tmp.val();
      }
    }
    tgt_url = tgt_url + '#searchResult';
    window.location.href = tgt_url;
  }
}

function AddUnitButtons() {
  var tgt_ul = $('ul.charList');
  var tmp_r = 0;
  exist_chars.forEach(u => {
    if (tmp_r != u.rarity) {
      tgt_ul.append('<li class="rarityli"><h4><img src="' + rarity_img_src[u.rarity - 1] + '" loading="lazy"></h4></li>');
      tmp_r = u.rarity;
    }
    tgt_ul.append('<li class="unitli ' + u.attribute_desc + '" data-unit_id="' + u.unit_id + '"><img src="' + u.img_src + '" loading="lazy" class="imgUnit"></li>');
  })
  var tgt_ul = $('ul.equipList');
  var tmp_r = 0;
  exist_equips.forEach(u => {
    if (tmp_r != u.rarity) {
      tgt_ul.append('<li class="rarityli"><h4><img src="' + rarity_img_src[u.rarity - 1] + '" loading="lazy"></h4></li>');
      tmp_r = u.rarity;
    }
    tgt_ul.append('<li class="unitli ' + u.attribute_desc + '" data-unit_id="' + u.unit_id + '"><img src="' + u.img_src + '" loading="lazy" class="imgUnit"></li>');
  })
}

let image2base64 = input_id => new Promise((resolve, reject) => {
  let fileinput = document.getElementById(input_id);
  if (fileinput == null)
      reject("cant find element");

  let fileData = file.files[0]
  if (fileData === undefined)
      reject("no file")

  if (!fileData.type.match('image.*'))
      reject("file type error");

  let reader = new FileReader();
  reader.onload = () => {
      resolve(reader.result)
  }
  reader.readAsDataURL(fileData);
})

$(document).ready(function () {
  //検索ボタンにリスナー追加
  $('#btnSearch').on("click", function () {
    if ($(this).hasClass('ready')) {
      $(this).toggleClass('ready');
      $.ajax({
        url: '/update_tags',
        type: 'POST',
        headers: {
          'X-CSRFToken': Cookies.get('csrftoken'),
          'Content-Type': 'application/json'
        },
        dataType: 'json',
        data: JSON.stringify({
          "p": p,
          "t": t,
        })
      }).done(function(data) {
        changeTagsView(data['tags']);
      });
      $(this).toggleClass('ready');
    }
  })
})