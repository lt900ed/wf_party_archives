const members_query = [
  '#unison1 .char.main',
  '#unison1 .char.sub',
  '#unison2 .char.main',
  '#unison2 .char.sub',
  '#unison3 .char.main',
  '#unison3 .char.sub',
  '#unison1 .equip.weapon',
  '#unison1 .equip.soul',
  '#unison2 .equip.weapon',
  '#unison2 .equip.soul',
  '#unison3 .equip.weapon',
  '#unison3 .equip.soul',
]

function changeDifficulty(me) {
  var difficulty_div = me.closest(".questWrap").find(".difficulty");
  difficulty_div.addClass("inactive");
  var difficulty_select = difficulty_div.find("select.form-difficulty");
  var preval = difficulty_select.val()
  difficulty_select.children().remove()
  if (me.val()) {
    var difficulties = enemies[me.val()]['difficulties']
    var opt = $('<option>');
    opt.val("");
    opt.text("難易度を選択");
    difficulty_select.append(opt)
    for (var d of difficulties) {
        var opt = $('<option>');
        opt.val(d['pk']);
        opt.text(d['short_desc_jp']);
        difficulty_select.append(opt)
        if (opt.val() == preval) {
          difficulty_select.val(preval)
        }
    }
    if (difficulties.length == 1) {
      difficulty_select.val(difficulties[0]['pk'])
    } else {
      difficulty_div.removeClass("inactive");
    }
  }
}

function changeIconVisibility(me) {
  if (me.children("li.selectli").not(".inactive").length > 1) {
    me.find(".icon--minus").closest("li").removeClass("inactive")
  } else {
    me.find(".icon--minus").closest("li").addClass("inactive")
  }
  if (me.children("li.selectli").length > me.children("li.selectli").not(".inactive").length) {
    me.find(".icon--plus").closest("li").removeClass("inactive")
  } else {
    me.find(".icon--plus").closest("li").addClass("inactive")
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

function ChangeMember(unit_id) {
  unit = [];
  if (unit_id != 'blank') {
    unit = exist_chars.filter( function( char ) {
      return char['unit_id'] == unit_id;
    })
    if (unit.length == 0) {
      unit = exist_equips.filter( function( equip ) {
        return equip['unit_id'] == unit_id;
      })
    }
  }
  if (unit.length == 0) {
    unit = [{
      'unit_id': 'blank',
      'attribute_desc': 'None',
      'img_src': '/static/root/img/chars/blank/square_0.png',
      'rarity': 0
    }];
  }
  tgt_li = $('.tgtUnit');
  tgt_li.data('unit_id', unit[0]['unit_id']);
  tgt_li.children('img').attr('src', unit[0]['img_src']);

  member_ids = [];
  members_query.forEach((m, i) => {
    if ($(m).data('unit_id')) {
      member_ids.push($(m).data('unit_id'));
    } else {
      member_ids.push('blank');
    }
    if (i < 6) {
      $('.colHeader').eq(i).children('img').attr('src', $(m).children('img').attr('src'));
    }
  })

  $('#id_party_text').val(member_ids.join('-'));
}

function AddAbiVal(me, val=-1) {
  tgt_div = me.children('div.abiVal');
  if (val == -1) {
    in_val = Number(tgt_div.attr('class').replace('abiVal v', ''));
    val = ((in_val + 1) % 7);
    console.log(in_val, val);
  }
  tgt_div.attr('class', 'abiVal v' + String(val));
}

function CheckAbiVal() {
  out = [];
  $('.colHeader').each(function () {
    abi4_val = Number($(this).nextAll('.colData.abi4').children('div.abiVal').attr('class').replace('abiVal v', ''));
    abi5_val = Number($(this).nextAll('.colData.abi5').children('div.abiVal').attr('class').replace('abiVal v', ''));
    abi6_val = Number($(this).nextAll('.colData.abi6').children('div.abiVal').attr('class').replace('abiVal v', ''));
    if ((abi5_val > 0 || abi6_val > 0) && abi4_val < 1) {
      AddAbiVal($(this).nextAll('.colData.abi4'), 1);
      abi4_val = 1;
    }
    if (abi6_val > 0 && abi5_val < 1) {
      AddAbiVal($(this).nextAll('.colData.abi5'), 1)
      abi5_val = 1;
    }
    out.push([abi4_val, abi5_val, abi6_val])
  })
  $('#id_ability_status').val(JSON.stringify(out));
}

function SetAbiVal() {
  if ($('#id_ability_status').val()) {
    input = JSON.parse($('#id_ability_status').val());
    if (input.length == 6) {
      input.forEach((abis, i) => {
        AddAbiVal($('.colHeader').eq(i).nextAll('.colData.abi4'), abis[0]);
        AddAbiVal($('.colHeader').eq(i).nextAll('.colData.abi5'), abis[1]);
        AddAbiVal($('.colHeader').eq(i).nextAll('.colData.abi6'), abis[2]);
      })
    }
  }
}

function UpdateMdPreview() {
  $.ajax({
    url: '/md2html',
    type: 'POST',
    headers: {
      'X-CSRFToken': Cookies.get('csrftoken'),
      'Content-Type': 'application/json'
    },
    dataType: 'json',
    data: JSON.stringify({
      "md": $('#id_text').val(),
    })
  }).done(function(data) {
    $('#memo_text').html(data['html']);
    $(function () {
      editormd.markdownToHTML("memo_text", {
          emoji           : true,
          taskList        : true,
          tex             : true,
          flowChart       : true,
          sequenceDiagram : true,
      });
    })
  });
}

$(document).ready(function () {
  if (window.location.hash == '#selectChar' || window.location.hash == '#selectEquip') {
    AddUnitButtons();
  }

  SetAbiVal();
  CheckAbiVal();

  //プラスボタンにリスナー等追加
  $('.icon--plus').each(function () {
    $(this).on("click", function () {
      var tgt = $(this).closest(".selectList").find(".selectli.inactive").eq(0);
      tgt.toggleClass("inactive");
      changeIconVisibility($(this).closest(".selectList"))
    })
  })

  //マイナスボタンにリスナー等追加
  $('.icon--minus').each(function () {
    $(this).on("click", function () {
      var tgt = $(this).closest(".selectList").find(".selectli").not(".inactive").last();
      tgt.toggleClass("inactive");
      tgt.find("select").val("");
      if (tgt.find("select.form-enemy").length) {
        changeDifficulty(tgt.find("select.form-enemy").eq(0))
      }
      changeIconVisibility($(this).closest(".selectList"))
    })
  })

  //敵リストのリスナー追加
  $('.form-enemy').each(function () {
    changeDifficulty($(this))
    $(this).on("change", function () {
      changeDifficulty($(this))
    })
  })

  //プラスマイナスボタン表示初期化
  $('.selectList').each(function () {
    changeIconVisibility($(this))
  })

  //タグリストにリスナー追加
  $('.Tagli').each(function () {
    $(this).on("click", function () {
      tgt_input = $('#id_tags');
      pre_val = tgt_input.val().replace(/[ 　\t]+/g, ' ').split(' ');
      if($(this).hasClass('checked')) {
        out_val = pre_val.filter(function (x, i, self) {return self.indexOf(x) === i && x;});
        index = out_val.indexOf($(this).data('tag_desc'));
        if (index >= 0) {
          out_val.splice(index, 1);
        }
        tgt_input.val(out_val.join(' '));
        $(this).toggleClass('checked');
      } else if (pre_val.length >= 20) {
        raiseErrMsg('タグは20個まで追加可能です');
      } else {
        pre_val.push($(this).data('tag_desc'));
        out_val = pre_val.filter(function (x, i, self) {return self.indexOf(x) === i && x;});
        tgt_input.val(out_val.join(' '));
        $(this).toggleClass('checked');
      }
    })
  })

  //タグフォームにリスナー追加
  $('#id_tags').change(function() {
    val = $(this).val().replace(/[ 　\t]+/g, ' ').split(' ')
    $('.Tagli.checked').each(function () {
      if (val.indexOf($(this).data('tag_desc')) == -1) {
        $(this).removeClass('checked');
      }
    })
    if (val.length > 20) {
      $(this).val(val.slice(0, 20).join(' '));
      raiseErrMsg('タグは20個まで追加可能です');
    }
  })

  //ユニットボタンにリスナー追加
  $('.unit').each(function () {
    $(this).on("click", function () {
      $('.tgtUnit').removeClass('tgtUnit');
      $(this).addClass('tgtUnit');
      if (! $('.unitli')[0]) {
        AddUnitButtons();
      }
      $('.popWrap h3').text($(this).data('party_role_desc_jp') + 'を選択')
      if ($(this).hasClass('char')) {
        window.location.href = '#selectChar';
      } else {
        window.location.href = '#selectEquip';
      }
    })
  })

  // ユニット選択ボタンにリスナー追加
  $('ul.charList, ul.equipList').on(
    'click',
    '.unitli',
    function() {
      tgt_unit_id = $(this).data('unit_id');
      ChangeMember(tgt_unit_id);
      window.location.href = '#!';
    }
  );

  //キャンセルボタンにリスナー追加
  $('.popFooterBtn').each(function () {
    $(this).on("click", function () {
      ChangeMember('blank');
      window.location.href = '#!';
    })
  })

  //マナボ2値セルにリスナー追加
  $('.colData').each(function () {
    $(this).on("click", function () {
      AddAbiVal($(this));
      CheckAbiVal();
    })
  })

  //マナボ2キャラセルにリスナー追加
  $('.colHeader').each(function () {
    $(this).on("click", function () {
      $(this).nextAll('.colData').each(function () {
        AddAbiVal($(this));
      })
      CheckAbiVal();
    })
  })

  //マナボ2ヘッダーセルにリスナー追加
  $('.rowHeader').each(function () {
    $(this).on("click", function () {
      tgt_abi = $(this).attr('class').replace('rowHeader abi', '');
      $('.colData.abi' + tgt_abi).each(function () {
        AddAbiVal($(this));
      })
      CheckAbiVal();
    })
  })

  //マナボ2左上セルにリスナー追加
  $('#abiValReset').on("click", function () {
    $('.colData').each(function () {
      AddAbiVal($(this), 0);
    })
    CheckAbiVal();
  })

  //メモプレビューボタンにリスナー追加
  $('#showPreviewText').on("click", function () {
    UpdateMdPreview();
    $('#form_text').toggleClass('hidden');
    $('#preview_text').toggleClass('hidden');
  })

  //メモプレビュー非表示ボタンにリスナー追加
  $('#hidePreviewText').on("click", function () {
    $('#form_text').toggleClass('hidden');
    $('#preview_text').toggleClass('hidden');
  })
});

