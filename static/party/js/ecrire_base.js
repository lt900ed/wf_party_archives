function raiseErrMsg(t) {
  $('#errMsg').text(t);
  $('#errMsg').removeClass('hidden');
  setTimeout(function(){$('#errMsg').addClass('hidden');}, Math.max(t.length * 120, 5000));
}

function raiseNormalMsg(t) {
  $('#normalMsg').text(t);
  $('#normalMsg').removeClass('hidden');
  setTimeout(function(){$('#normalMsg').addClass('hidden');}, Math.max(t.length * 120, 5000));
}

// strをクリップボードにコピー
function copyToClipboard(str) {
  const el = document.createElement('textarea');
  el.value = str;
  document.body.appendChild(el);
  el.select();
  var success = document.execCommand('copy');
  document.body.removeChild(el);
  return success;
}

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
        opt.val(d['quest_id']);
        opt.text(d['short_desc_jp']);
        difficulty_select.append(opt)
        if (opt.val() == preval) {
          difficulty_select.val(preval)
        }
    }
    if (difficulties.length == 1) {
      difficulty_select.val(difficulties[0]['quest_id'])
    } else {
      difficulty_div.removeClass("inactive");
    }
  }
}

function getURLParams(path) {
  if (!path) return false;

  var hash = location.hash;
  if (hash) {
    tmp_path = path.replace('hash', '');
  } else {
    tmp_path = path;
  }

  var param = tmp_path.match(/\?([^?]*)$/);

  if (!param || param[1] === '') return false;

  var tmpParams = param[1].split('&');
  var keyValue  = [];
  var params    = {};

  for (var i = 0, len = tmpParams.length; i < len; i++) {
      keyValue = tmpParams[i].split('=');
      params[keyValue[0]] = decodeURI(keyValue[1]);
  }

  return params;
};

function ajaxGet(url, func, prev_func) {
  var d = $.Deferred();
  // console.log(func);
  // console.log(prev_func);
  // console.log(!(typeof prev_func === "undefined"));
  if (!(typeof prev_func === "undefined")) {
    prev_func();
  }
  $.ajax({
    url: url,
    type: 'GET',
    headers: {
      'Content-Type': 'application/json'
    },
    dataType: 'json',
    data: JSON.stringify({})
  }).done(function(data) {
    func(data);
    // 通信が終了したら次へ
    d.resolve();
  });
  return d.promise();
}

$(document).ready(function () {
  var clientid;
  var isIOS = ((/iphone|ipad/gi).test(navigator.appVersion));
  var inputDown = isIOS ? "touchstart" : "touchstart mousedown";
  var inputUp = isIOS ? "touchend" : "touchend mouseup";
  var w_width = $(window).width();
  var w_height = $(window).height();
  const assetPath = '/static/root/img/';

  $('.popupUnshown').click(function (){
    if ($('#btnResistUU').hasClass('ready') && $('#btnResistP').hasClass('ready')) {
      return true;
    } else {
      return false;
    }
  })

  $('#btnResistUU').click(function () {
    if ($(this).hasClass('ready')) {
      $(this).toggleClass('ready');
      if (! $('#inputResistUU').val()) {
        raiseErrMsg('URLを入力してください');
        $(this).toggleClass('ready');
      } else {
        var val = $('#inputResistUU').val();
        $(this).text("取得中...")
        $.ajax({
          url: '/import_units',
          type: 'POST',
          headers: {
            'X-CSRFToken': Cookies.get('csrftoken'),
            'Content-Type': 'application/json'
          },
          dataType: 'json',
          data: JSON.stringify({
            "tgt_url": val
          })
        }).done(function(data) {
          $('#inputResistUU').val("")
          if (data['status'] == 'success') {
            raiseNormalMsg(data['message']);
          } else {
            raiseErrMsg(data['message']);
          }
          $('#btnResistUU').toggleClass('ready');
          $('#btnResistUU').text('取得開始');
          window.location.href = '#!';
        });
      }
    }
  })

  $('#btnResistP').click(function () {
    if ($(this).hasClass('ready')) {
      $(this).toggleClass('ready');
      if (! $('#inputResistP').val()) {
        raiseErrMsg('URLを入力してください');
        $(this).toggleClass('ready');
      } else {
        var val = $('#inputResistP').val();
        fname = val.match(/\/([\w\-_]+)[\.@][\w\.\-\!\,]+$/);
        if (fname == null) {
            raiseErrMsg('正しいURLを入力してください');
            $(this).toggleClass('ready');
        } else {
          window.open('/register/' + fname[1], '_blank');
          $(this).toggleClass('ready');
        }
      }
    }
  })
  if (msg) {
    raiseNormalMsg(msg)
  }
})
