$(document).ready(function () {
  var clientid;
  var isIOS = ((/iphone|ipad/gi).test(navigator.appVersion));
  var inputDown = isIOS ? "touchstart" : "touchstart mousedown";
  var inputUp = isIOS ? "touchend" : "touchend mouseup";
  var w_width = $(window).width();
  var w_height = $(window).height();
  const assetPath = '/static/root/img/';

  function clearUI() {

  }

  function changePollDetailFromDOM(me) {
    tgt_list = me.closest('.questWrap').attr('id').split('-')
    p = Number(tgt_list[1])
    q = Number(tgt_list[2])
    changePollDetail(p, q)
  }

  function changePollDetail(p, q) {
    console.log('start_send_poll')
    $.ajax({
      url: '/update_poll',
      type: 'POST',
      headers: {
        'X-CSRFToken': Cookies.get('csrftoken'),
        'Content-Type': 'application/json'
      },
      dataType: 'json',
      data: JSON.stringify({
        "p": p,
        "q": q,
      })
    }).done(function(data) {
      console.log(data);
      var tgt_root = $('#quest').find('ul')[0];
      $(tgt_root).children('li.questli').remove();
      data['polls'].reverse().forEach(q => {
        var l = $('<li></li>', {
          addClass: 'questli questBox'
        });
        var d = $('<div></div>', {
          id: 'poll-' + q['party'] + '-' + q['quest__pk'],
          addClass: 'questWrap'
        });
        var a = $('<a></a>', {
          href: '/?quest_ids=' + q['quest__pk'] + '#searchResult',
          text: q['quest__enemy__short_desc_jp'] + ' ' + q['quest__difficulty__short_desc_jp']
        });
        var i = $('<div></div>', {
          addClass: 'icon--useful',
          on: {
            click: function() {changePollDetailFromDOM($(this))}
          }
        });
        if (q['my_cnt']) {
          i.addClass('isUseful');
        };
        var c = $('<div></div>', {
          addClass: 'useful_cnt',
          text: 'x' + q['poll_cnt'],
          on: {
            click: function() {changePollDetailFromDOM($(this))}
          }
        });
        d.append(a, i, c);
        l.append(d)
        $(tgt_root).prepend(l);
      });
    });
  }

  function postTags(p, t) {
    console.log('start_get_tags')
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
  }

  function getTags(p) {
    console.log('start_get_tags')
    $.ajax({
      url: '/update_tags',
      type: 'GET',
      headers: {
        'X-CSRFToken': Cookies.get('csrftoken'),
        'Content-Type': 'application/json'
      },
      dataType: 'json',
      data: JSON.stringify({
        "p": p
      })
    }).done(function(data) {
      changeTagsView(data['tags']);
    });
  }

  function deleteTagView(me) {
    me.closest('.tagli').remove();
  }

  function addTagView(new_tags) {
    var tags = [];
    $(".tagli .tagwrap").each(function () {
      var t = $(this).children("a").text().substr(1);
      tags.push(t);
    })
    tags = tags.concat(new_tags);
    tags = Array.from(new Set(tags))
    changeTagsView(tags.reverse());
  }

  function changeTagsView(tags) {
    console.log(tags);
    var tgt_root = $('#tag').find('ul')[0];
    $(tgt_root).children('li.tagli').remove();
    tags.forEach(t => {
      var l = $('<li></li>', {
        addClass: 'tagli tagBox'
      });
      var d = $('<div></div>', {
        addClass: 'tagwrap'
      });
      var a = $('<a></a>', {
        href: '/?tag_descs=' + t + '#searchResult',
        text: '#' + t
      });
      var i = $('<div></div>', {
        addClass: 'icon--cross',
        on: {
          click: function() {deleteTagView($(this));}
        }
      });
      if (!$('.tagbtneditli').eq(0).hasClass('inactive')) {
        i.addClass('inactive');
      };
      d.append(a, i);
      l.append(d)
      $(tgt_root).prepend(l);
    });
    $('#input_tag').val("");
  }

  function toggleTagEditMode() {
    if ($('.tagbtneditli').eq(0).hasClass('inactive')) {
      $('.tagwrap div.icon--cross').addClass('inactive');
      $('#tagformli').addClass('inactive');
      $('.tagbtneditli').removeClass('inactive');
      $('.tagbtnsendli').addClass('inactive');
    } else {
      $('.tagwrap div.icon--cross').removeClass('inactive');
      $('#tagformli').removeClass('inactive');
      $('.tagbtneditli').addClass('inactive');
      $('.tagbtnsendli').removeClass('inactive');
    }
    $('#input_tag').val("");
  }

  function resizeCheck() {
    w_width = $(window).width();
    w_height = $(window).height();
  }

  $(window).resize(function () {
    resizeCheck();
  });

  resizeCheck();

  //いいねボタンにリスナー追加
  $('.icon--useful, .useful_cnt').each(function () {
    $(this).on("click", function () {
      changePollDetailFromDOM($(this))
    })
  })

  //プラスボタンにリスナー等追加
  $('#btn_quest_plus').each(function () {
    $(this).on("click", function () {
      $(this).closest('ul').children('li.selectli').removeClass('inactive');
      $(this).closest('li.plusli').addClass('inactive');
    })
  })

  //URLコピーボタンにリスナー等追加
  $('#btnCopyURL').on("click", function () {
    url = window.location.href
    if (window.location.hash) {
      url = url.replace(window.location.hash, '')
    }
    copyToClipboard(url);
    raiseNormalMsg('このページのURLをクリップボードにコピーしました。')
  })

  //画像URLコピーボタンにリスナー等追加
  $('#btnCopyIMG').on("click", function () {
    url = window.location.href
    if (window.location.hash) {
      url = url.replace(window.location.hash, '')
    }
    copyToClipboard(url + '.ja.jpg');
    raiseNormalMsg('パーティ画像のURLをクリップボードにコピーしました。')
  })

  //パーティコードコピーボタンがあればリスナー追加
	if($('#btnCopyPartyCode').length){
    $('#btnCopyPartyCode').on("click", function () {
      party_code = $('#tdPartyCode').text()
      copyToClipboard(party_code);
      raiseNormalMsg('パーティコードをクリップボードにコピーしました。')
    })
  }

  //敵リストにリスナー追加
  $('.form-enemy').each(function () {
    changeDifficulty($(this))
    $(this).on("change", function () {
      changeDifficulty($(this))
    })
  })

  //クエスト送信ボタンにリスナー追加
  $('#btn_quest_poll').click(function () {
    if ($(this).hasClass('ready')) {
      $(this).toggleClass('ready');
      var p = $('article').data('party');
      if (! $('#id_form-0-enemy').val()) {
        raiseErrMsg('敵を選択してください');
        $(this).toggleClass('ready');
      } else {
        if (! $('#id_form-0-difficulty').val()) {
          raiseErrMsg('難易度を選択してください');
          $(this).toggleClass('ready');
        } else {
          var q = $('#id_form-0-difficulty').val();
          if ($('#poll-' + p + '-' + q).length) {
            raiseErrMsg('そのクエストは既に存在しています');
            $(this).toggleClass('ready');
          } else {
            changePollDetail(p, q);
            $(this).closest('li.selectli').addClass('inactive');
            $(this).closest('ul').children('li.plusli').removeClass('inactive');
            $('#id_form-0-enemy').val("");
            $('#id_form-0-difficulty').val("");
            $(this).toggleClass('ready');
          }
        }
      }
    }
  })

  //タグ編集ボタンにリスナー追加
  $('#btn_tag_edit').click(function () {
    if ($(this).hasClass('ready')) {
      $(this).toggleClass('ready');
      toggleTagEditMode();
      $(this).toggleClass('ready');
    }
  })

  //タグ完了ボタンにリスナー追加
  $('#btn_tag_send').click(function () {
    if ($(this).hasClass('ready')) {
      $(this).toggleClass('ready');
      var p = $('article').data('party');
      var tags = [];
      $("div.tagwrap").each(function () {
        var t = $(this).children("a").text().substr(1);
        tags.push(t);
      })
      postTags(p, tags.join(' '));
      toggleTagEditMode();
      $(this).toggleClass('ready');
    }
  })

  //タグキャンセルボタンにリスナー追加
  $('#btn_tag_cancel').click(function () {
    if ($(this).hasClass('ready')) {
      $(this).toggleClass('ready');
      var p = $('article').data('party');
      getTags(p);
      toggleTagEditMode();
      $(this).toggleClass('ready');
    }
  })

  //タグ削除ボタンにリスナー追加
  $('.tagwrap div.icon--cross').click(function () {
    deleteTagView($(this));
  })

  //タグ追加ボタンにリスナー追加
  $('#btn_tag_preadd').click(function () {
    if ($(this).hasClass('ready')) {
      $(this).toggleClass('ready');
      new_tags = $('#input_tag').val().split(/[ 　\t]+/).filter(Boolean);
      if (new_tags.length == 0) {
        raiseErrMsg('有効なタグを入力してください');
        $(this).toggleClass('ready');
      } else {
        var tgt_root = $('#tag').find('ul')[0];
        if ($(tgt_root).children('li.tagli').length + new_tags.length > 20) {
            raiseErrMsg('タグは20個まで追加可能です。新規タグはスペース区切りでカウントされます。');
            $(this).toggleClass('ready');
        } else {
          too_longs = new_tags.filter(function (e) {return e.length > 30})
          if (too_longs.length > 0) {
            raiseErrMsg('長過ぎるタグが存在します。タグは30文字までです。');
            $(this).toggleClass('ready');
          } else {
            new_tags = new_tags.map(function (v) {
              return v.substr(0, 30);
            })
            addTagView(new_tags);
            $(this).toggleClass('ready');
          }
        }
      }
    }
  })

  //タグ入力フォームのエンターSubmit無効化
  $('#input_tag').keypress(function (e) {
    if (!e) var e = window.event;
    if (e.keyCode == 13)
        return false;
  });

  var ref_url = $('#url a').attr('href');
  if (ref_url) {
    var tgt_tweetid = ref_url.match(/(https|http):\/\/twitter.com\/\w+\/(status|statues)\/([0-9]+)/);
    if (tgt_tweetid != null) {
      var tweet_wrap = $('#tweetWrap')[0];
      twttr.widgets.createTweet (
        tgt_tweetid[3],
        tweet_wrap,
        {
          // cards: "hidden",
          // conversation: "none",
          // theme: "dark",
          // linkColor: "#D36015",
          width: 550,
          align: "center",
          lang: "ja",
          dnt: true,
        }
      );
    }
  }

  // メッセージが存在する場合表示
});
