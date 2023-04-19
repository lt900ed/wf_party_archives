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
    tgt_ul.append('<li class="unitli ' + u.attribute_desc + '" data-unit_id="' + u.unit_id + '"><img src="' + u.img_src + '" loading="lazy" class="imgUnit" alt="' + u.name_jp + '"></li>');
  })
  var tgt_ul = $('ul.equipList');
  var tmp_r = 0;
  exist_equips.forEach(u => {
    if (tmp_r != u.rarity) {
      tgt_ul.append('<li class="rarityli"><h4><img src="' + rarity_img_src[u.rarity - 1] + '" loading="lazy"></h4></li>');
      tmp_r = u.rarity;
    }
    tgt_ul.append('<li class="unitli ' + u.attribute_desc + '" data-unit_id="' + u.unit_id + '"><img src="' + u.img_src + '" loading="lazy" class="imgUnit" alt="' + u.name_jp + '"></li>');
  })
}

$(document).ready(function () {
  query = getURLParams(window.location.search);
  if (query) {
    if ('use_unit_ids' in query) {
      use_unit_ids = query['use_unit_ids'].split('-')
      tgt_ul = $('#useUnitList');
      tgt_ul.children('li.useUnitli').remove();
      $.each(use_unit_ids.reverse(), function(i, val) {
        unit = exist_chars.filter( function( char ) {
          return char['unit_id'] == val;
        })
        if (unit.length == 0) {
          unit = exist_equips.filter( function( equip ) {
            return equip['unit_id'] == val;
          })
        }
        if (unit) {
          EnterUseUnit(tgt_ul, unit[0]);
        }
      })
    }

    if ('quest_ids' in query) {
      quest_id = query['quest_ids'].split('-')[0];
      enemies_loop:
      for (var e in enemies) {
        for (var d of enemies[e]['difficulties']) {
          if (d['quest_id'] == quest_id) {
            $('#id_form-0-enemy').val(e);
            changeDifficulty($('#id_form-0-enemy'));
            $('#id_form-0-difficulty').val(d['quest_id']);
            break enemies_loop;
          }
        }
      }
      $('#selectSort option[value="tgt_quest_good"]').removeClass('inactive');
      $('#selectSort option[value="tgt_quest_recent_good"]').removeClass('inactive');
    }

    if ('tag_descs' in query) {
      tag_descs = query['tag_descs'].split(' ');
      for (var t of tag_descs) {
        $('.tagList').children('.Tagli[data-tag_desc="' + t + '"]').addClass('checked');
      }
    }

    if ('leader_role_desc' in query) {
      leader_role_desc = query['leader_role_desc'];
      $('#selectLeaderRole').val(leader_role_desc);
    }

    if ('consider_chars' in query) {
      consider_chars = query['consider_chars'];
      if (consider_chars == 'True') {
        $('#considerChars').prop('checked', true);
      } else {
        $('#considerChars').prop('checked', false);
      }
    } else {
      $('#considerChars').prop('checked', false);
    }

    if ('consider_equips' in query) {
      consider_equips = query['consider_equips'];
      if (consider_equips == 'True') {
        $('#considerEquips').prop('checked', true);
      } else {
        $('#considerEquips').prop('checked', false);
      }
    } else {
      $('#considerEquips').prop('checked', false);
    }

    if ('order' in query) {
      order = query['order'];
      if(order in ['tgt_quest_good', 'tgt_quest_recent_good'] && !'quest_ids' in query) {
        $('#selectSort').val('recent_good');
      } else {
        $('#selectSort').val(order);
      }
    } else if ('quest_ids' in query) {
      $('#selectSort').val('tgt_quest_recent_good');
    }
  }

  if (window.location.hash == '#selectUnit') {
    AddUnitButtons();
  }

  $('ul.charList, ul.equipList').on(
    'click',
    '.unitli',
    function() {
      if (! $(this).hasClass('checked')) {
        if ($(this).parent().find('.checked').length >= 6) {
          if ($(this).parent().hasClass('charList')) {
            raiseErrMsg('キャラは6人以上選択できません。');
          } else {
            raiseErrMsg('装備は6個以上選択できません。');
          }
        } else {
          $(this).toggleClass('checked');
        }
      } else {
        $(this).toggleClass('checked');
      }
    }
  );

  $('#btnEnterUnit').on("click", function () {
    if ($(this).hasClass('ready')) {
      $(this).toggleClass('ready');
      tgt_ul = $('#useUnitList');
      tgt_ul.children('li.useUnitli').remove();
      $($('.unitli.checked').get().reverse()).each(function () {
        tgt_unit_id = $(this).data('unit_id');
        unit = exist_chars.filter( function( char ) {
          return char['unit_id'] == tgt_unit_id;
        })
        if (unit.length == 0) {
          unit = exist_equips.filter( function( equip ) {
            return equip['unit_id'] == tgt_unit_id;
          })
        }
        console.log(unit);
        EnterUseUnit(tgt_ul, unit[0]);
        $(this).toggleClass('checked');
      })
      window.location.href = '#!';
      $(this).toggleClass('ready');
    }
  })

  $('#btnCancelUnit').on("click", function () {
    if ($(this).hasClass('ready')) {
      $(this).toggleClass('ready');
      $('.unitli.checked').each(function () {
        $(this).toggleClass('checked');
      })
      window.location.href = '#!';
      $(this).toggleClass('ready');
    }
  })
  $('.icon--cross').on("click", function () {
    $(this).each(function () {
      $(this).parents('.useUnitli').remove();
    })
  })
  //敵リストにリスナー追加
  $('.form-enemy').each(function () {
    $(this).on("change", function () {
      changeDifficulty($(this));
    })
  })
  //タグリストにリスナー追加
  $('.Tagli').each(function () {
    $(this).on("click", function () {
      $(this).toggleClass('checked');
    })
  })
  //検索ボタンにリスナー追加
  $('#btnSearch').on("click", function () {
    if ($(this).hasClass('ready')) {
      $(this).toggleClass('ready');
      StartSearch(false);
      $(this).toggleClass('ready');
    }
  })
  //ソートリストにリスナー追加
  $('#selectSort').on("change", function () {
    if ($(this).val()) {
      StartSearch(true);
    }
  })
  //キャラ装備選択ボタンにリスナー追加
  $('#btnSelectUnit').on("click", function () {
    if (! $('.unitli')[0]) {
      AddUnitButtons();
    }
  })
  // メッセージが存在する場合表示
})