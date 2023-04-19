$(document).ready(function () {
  var clientid;
  var isIOS = ((/iphone|ipad/gi).test(navigator.appVersion));
  var inputDown = isIOS ? "touchstart" : "touchstart mousedown";
  var inputUp = isIOS ? "touchend" : "touchend mouseup";
  var w_width = $(window).width();
  var w_height = $(window).height();
  const assetPath = '/wf_party_archives/static/root/img/';
  var charLoaded = false;
  var equipLoaded = false;
  var waitingForUrl = false;
  var blank_elem = $('<li class="unit"><img src="' + assetPath + 'chars/blank/square_0.png"></li>');
  if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    $("body").addClass("darktheme");
  }

  function clearUI() {

  }

  function resizeCheck() {
    w_width = $(window).width();
    w_height = $(window).height();
  }

  $(window).resize(function () {
    resizeCheck();
  });

  resizeCheck();

  //キャラボタンにリスナー等追加
  $('#chars .char').each(function () {
    $(this).data("DevNicknames", $(this).attr('id').replace('char-', ''));
    var skillWait;
    if($(this).find('.SkillWait span').text()){
      skillWait = parseInt($(this).find('.SkillWait span').text())
    }else{
      skillWait = 0;
    }
    $(this).data("SkillWait", skillWait);
    $(this).on("click", function () {
      if ($("#info").is(".charinfo")) {
        $('.selected').removeClass('selected');
        $(this).addClass('selected');
      } else if ($("#info").is(".planner")) {
        if ($(".planner .char.selected").length > 0) {
          setCharSlot($(".planner .char.selected"), $(this).data('DevNicknames'));
        } else {
          $(".selected").not(this).removeClass("selected");
          $(this).toggleClass("selected");
        }
      } else {
        $(this).toggleClass("checked");
        unitChanged();
      }

      var info = $(this).find('.charInfoBlock').clone();
      info.find('.Art').html('<img src="' + assetPath + 'chars/' + $(this).data('DevNicknames') + '/square_0.png" class="mainArt"><img src="' + assetPath + 'chars/' + $(this).data('DevNicknames') + '/square_1.png" class="altArt">')
      $("#info .infoWrapper").html("").append(info);
    })

    $(this).on("mouseover", function (e) {
      $("#charNamePlate").show();
      $("#charNamePlate").find('.JPName').html($(this).find('.JPName span').text());
      $("#charNamePlate").find('.Obtain').html('').addClass('hidden');
      $("#charNamePlate").css({
        "left": $(this).offset().left + $(this).outerWidth() / 2,
        "top": $(this).offset().top + $(this).height()
      });
    });

    $(this).on("mouseleave", function (e) {
      $("#charNamePlate").hide();
    });
  })

  if (str_chars) {
    var unitList = str_chars;
  } else if (localStorage.getItem("charList")) {
    var unitList = localStorage.getItem("charList");
  } else {
    var unitList = '';
  }
  setUnitList(unitList, 'char');

  //装備ボタンにリスナー等追加
  $('#equips .equip').each(function () {
    $(this).data("DevNicknames", $(this).attr('id').replace('equip-', ''));
    $(this).on("click", function () {
      if ($("#info").is(".charinfo")) {
        $('.selected').removeClass('selected');
        $(this).addClass('selected');
      } else if ($("#info").is(".planner")) {
        if ($(".planner .equip.selected").length > 0) {
          setEquipSlot($(".planner .equip.selected"), $(this).data('DevNicknames'));
        } else {
          $(".selected").not(this).removeClass("selected");
          $(this).toggleClass("selected");
        }
      } else {
        $(this).toggleClass("checked");
        unitChanged();
      }

      var info = $(this).find('.equipInfoBlock').clone();
      info.find('.Art').html('<img src="' + assetPath + 'item/equips/' + $(this).data('DevNicknames') + '.png"><img src="' + assetPath + 'item/equips/' + $(this).data('DevNicknames') + '_soul.png" class="soulArt">')
      $("#info .infoWrapper").html("").append(info);
    })

    $(this).on("mouseover", function (e) {
      $("#charNamePlate").show();
      $("#charNamePlate").find('.JPName').html($(this).find('.JPName span').text());
      $("#charNamePlate").find('.Obtain').html($(this).find('.Obtain span').text()).removeClass('hidden');
      $("#charNamePlate").css({
        "left": $(this).offset().left + $(this).outerWidth() / 2,
        "top": $(this).offset().top + $(this).height()
      });
    });

    $(this).on("mouseleave", function (e) {
      $("#charNamePlate").hide();
    });
  })

  if (str_equips) {
    unitList = str_equips;
  } else if (localStorage.getItem("equipList")) {
    var unitList = localStorage.getItem("equipList");
  } else {
    var unitList = '';
  }
  setUnitList(unitList, 'equip');
  unitChanged();

  // パーティ作成画面のレイアウトを生成
  for (i = 1; i < 4; i++) {
    const skillwait = '<div class="SkillWait">0</div>';
    $('#unison' + i).append(blank_elem.clone().append(skillwait).addClass('char main'))
      .append(blank_elem.clone().addClass('equip weapon'))
      .append(blank_elem.clone().append(skillwait).addClass('char sub'))
      .append(blank_elem.clone().addClass('equip soul'))
      .append($('<li class="totalSkillWait">'+'ウェイト'+': <span>0</span></li>'));
  }

  $(".btnSwitchUnit").on("click", function () {
    $(".btnSwitchUnit").removeClass('on');
    $(this).addClass('on');
    $('body').removeClass('viewchar viewequip');
    var target = $(this).data('type');
    $('body').addClass('view' + target);
    $('#' + target + 's').addClass('flash');
    setTimeout(function () {
      $("article").removeClass('flash');
    }, 100);
    updateEquipScore();
  });

  $("#errMsg").on("click", function () {
    $(this).addClass('hidden');
  });

  $("#btnShowRole").on("click", function () {
    $(this).toggleClass('on');
    $('body').toggleClass('showRole');
  });

  $("#chars .btnFilter").on("click", function () {
    $(this).toggleClass('on');
    updateCharFilter();
  });

  $("#equips .btnFilter").on("click", function () {
    $(this).toggleClass('on');
    if ($(this).is(".on")){
      if ($(this).is(".btnShowGacha")){
        $(".btnNoGacha").removeClass("on");
      }else if ($(this).is(".btnNoGacha")){
        $(".btnShowGacha").removeClass("on");
      }
    }
    updateEquipFilter();
  });

  $("#planner .char").on("click", function () {
    if (!$("#btnShowChar").is('.on')) {
      $("#btnShowChar").trigger("click");
    }
    if ($("#chars .char.selected").length > 0) {
      setCharSlot($(this), $("#chars .char.selected").data("DevNicknames"));
    } else if ($(this).is('.selected')) {
      $(this).removeClass("selected");
    } else if ($("#planner .char.selected").length > 0) {
      var source = $("#planner .char.selected");
      var target = $(this);
      var sourceDevNicknames = getDevNicknames(source);
      var targetDevNicknames = getDevNicknames(target);
      if (sourceDevNicknames == "blank") {
        $(".selected").removeClass("selected");
        $(this).toggleClass("selected");
      } else {
        setCharSlot(target, sourceDevNicknames);
        setCharSlot(source, targetDevNicknames);
      }
    } else {
      $(".selected").not(this).removeClass("selected");
      $(this).toggleClass("selected");
      if ($(this).is(".selected") && $(this).data("DevNicknames") != 'blank') {
        $("#btnUnset").appendTo($(this));
      }
    }
  });

  $("#planner .equip").on("click", function () {
    if (!$("#btnShowEquip").is('.on')) {
      $("#btnShowEquip").trigger("click");
    }
    if ($("#equips .equip.selected").length > 0) {
      setEquipSlot($(this), $("#equips .equip.selected").data("DevNicknames"));
    } else if ($(this).is('.selected')) {
      $(this).removeClass("selected");
    } else if ($("#planner .equip.selected").length > 0) {
      var source = $("#planner .equip.selected");
      var target = $(this);
      var sourceDevNicknames = getDevNicknames(source);
      var targetDevNicknames = getDevNicknames(target);
      if (sourceDevNicknames == "blank") {
        $(".selected").removeClass("selected");
        $(this).toggleClass("selected");
      } else {
        setEquipSlot(target, sourceDevNicknames);
        setEquipSlot(source, targetDevNicknames);
      }
    } else {
      $(".selected").not(this).removeClass("selected");
      $(this).toggleClass("selected");
      if ($(this).is(".selected") && $(this).data("DevNicknames") != 'blank') {
        $("#btnUnset").appendTo($(this));
      }
    }
  });

  $("#btnUnset").on("click", function (e) {
    e.stopPropagation();
    $("#btnUnset").appendTo($("#planner"));
    var target = $('.selected');
    if (target.is('.main')||target.is('.sub')) {
      setCharSlot(target, "blank");
    }
    if (target.is('.weapon')||target.is('.soul')) {
      setEquipSlot(target, "blank");
    }
    $(".selected").removeClass("selected");
  });

  $("#btnCharInfo").on("click", function () {
    $("#btnCharInfo").toggleClass("on");
    $("#btnPlanner").removeClass("on");
    $("#info").removeClass("planner");
    if ($("#btnCharInfo").is(".on")) {
      $("#info").addClass("charinfo");
      $("body").addClass("expanded");
    }
    checkInfoPanel();
  });

  $("#btnPlanner").on("click", function () {
    $("#btnPlanner").toggleClass("on");
    $("#btnCharInfo").removeClass("on");
    $("#info").removeClass("charinfo");
    if ($("#btnPlanner").is(".on")) {
      $("#info").addClass("planner");
      $("body").addClass("expanded");
    }
    checkInfoPanel();
  });

  function checkInfoPanel() {
    if ($("#infoButtons .on").length <= 0) {
      $("#info").removeClass("charinfo");
      $("#info").removeClass("planner");
      $('.selected').removeClass('selected');
      $("body").removeClass("expanded");
    }
  }

  $("#btnListView").on("click", function () {
    $(this).toggleClass('on');
    $('body').toggleClass('listView');
  });

  $("#btnSave").on("click", function () {
    $(this).removeClass("on");
    localStorage.setItem("charList", getUnitList('char'));
    localStorage.setItem("equipList", getUnitList('equip'));
    $.ajax({
      url: '/unit_control/save_units',
      type: 'POST',
      headers: {
        'X-CSRFToken': Cookies.get('csrftoken'),
        'Content-Type': 'application/json'
      },
      dataType: 'json',
      data: JSON.stringify({
        "str_chars": getUnitList('char'),
        "str_equips": getUnitList('equip'),
      })
    }).done(function(data) {
      $("#btnSave").addClass("on")
    });
  });

  $(".btnSelectAll").on("click", function () {
    if (!$(this).is('.on')) {
      $(this).siblings('.unitList').find('.unit').not('.spookyStuff').not('.filtered').addClass('checked');
    } else {
      $(this).siblings('.unitList').find('.unit').not('.spookyStuff').not('.filtered').removeClass('checked');
    }
    unitChanged();
  });


  $("#btnGetShareURL").on("click", function () {
    $(this).removeClass("on");
    $.ajax({
      url: '/unit_control/save_units',
      type: 'POST',
      headers: {
        'X-CSRFToken': Cookies.get('csrftoken'),
        'Content-Type': 'application/json'
      },
      dataType: 'json',
      data: JSON.stringify({
        "str_chars": getUnitList('char'),
        "str_equips": getUnitList('equip'),
      })
    }).done(function(data) {
      const shareUrl = "https://ecrire-bot.herokuapp.com/unit_control/" + data['user_units_id'] + '/'
      $("#txtShareURL").val(shareUrl);
        console.log(shareUrl);
        if (!copyToClipboard(shareUrl)){
        $('.body').addClass("showShareURL");
      }else{
        $("#btnGetShareURL").text(tls.ShareURLCopied).addClass("on");
      }
    });
  });

  $("#btnGetCompURL").on("click", function () {
    $(this).removeClass("on");
    var units = [];
    $(".planner .char").each(function () {
      var DevNicknames = $(this).data("DevNicknames");
      if (!DevNicknames) DevNicknames = "blank";
      units.push(DevNicknames);
    })
    $(".planner .equip").each(function () {
      var DevNicknames = $(this).data("DevNicknames");
      if (!DevNicknames) DevNicknames = "blank";
      units.push(DevNicknames);
    })
    var lngcode = '';
    if (lang!="en") lngcode+='.'+lang;
    if ($("body").is(".viewAlt")) lngcode+='.awaken'
    const imageUrl = "https://ecrire-bot.herokuapp.com/unit_control/comp/" + units.join('-') + lngcode + ".jpg";
    $("#txtCompURL").val(imageUrl);
    if (!copyToClipboard(imageUrl)){
      $('.body').addClass("showCompURL");
    }else{
      setTimeout(function () {
        $("#btnGetCompURL").text(tls.ImageURLCopied).addClass("on");
      }, 100);
    }
  });

  $("#btnRegisterParty").on("click", function () {
    $(this).removeClass("on");
    var units = [];
    $(".planner .char").each(function () {
      var DevNicknames = $(this).data("DevNicknames");
      if (!DevNicknames) DevNicknames = "blank";
      units.push(DevNicknames);
    })
    $(".planner .equip").each(function () {
      var DevNicknames = $(this).data("DevNicknames");
      if (!DevNicknames) DevNicknames = "blank";
      units.push(DevNicknames);
    })
    window.open("/register/" + units.join('-'));
  });

  $("#btnShowSkillWait").on("click", function () {
    $(this).toggleClass('on');
    $('#info').toggleClass('showSkillWait');
  });

  $("#btnAltArt").on("click", function () {
    $("body").toggleClass("viewAlt");
    $(this).toggleClass("on");
  });

  $("#btnViewSoul").on("click", function () {
    $("body").toggleClass("viewSoul");
    $(this).toggleClass("on");
  });

  $(".btnShowOwned").on("click", function () {
    var type = $(this).data("type");
    $("#" + type + "s").toggleClass("viewOwned");
    $(this).toggleClass("on");
    $("." + type + "List").addClass('flash');
    setTimeout(function () {
      $("." + type + "List").removeClass('flash');
    }, 100);
    if ($(this).is(".on")){
      $(".btnShowNotOwned").removeClass("on");
      $("#" + type + "s").removeClass("viewNotOwned");
    }
  });

  $(".btnShowNotOwned").on("click", function () {
    var type = $(this).data("type");
    $("#" + type + "s").toggleClass("viewNotOwned");
    $(this).toggleClass("on");
    $("." + type + "List").addClass('flash');
    setTimeout(function () {
      $("." + type + "List").removeClass('flash');
    }, 100);
    if ($(this).is(".on")){
      $(".btnShowOwned").removeClass("on");
      $("#" + type + "s").removeClass("viewOwned");
    }
  });

  $("#listLang").on("click",function(){
    $(this).toggleClass("on");
    $(this).find('.active').prependTo($(this));
  });

  function getSkillWait(DevNickname) {
    if (DevNickname == "blank") {
      return 0;
    } else {
      return $("#char-" + DevNickname).data("SkillWait");
    }
  }

  function getDevNicknames(unit) {
    if ($(unit).data("DevNicknames")) {
      return $(unit).data("DevNicknames");
    } else {
      return "blank";
    }
  }

  function setCharSlot(slot, DevNickname) {
    $("#btnUnset").appendTo($("#planner"));
    var unit;
    if (DevNickname == "blank") {
      unit = blank_elem.clone();
      slot.data("DevNicknames", "blank");
    } else {
      unit = $("#char-" + DevNickname);
      slot.data("DevNicknames", DevNickname);
    }
    slot.html(unit.html());
    slot.find('.charInfoBlock').remove();
    slot.find('.skillWait').remove();
    var ismain = true;
    if (slot.is('.sub')) {
      ismain = false;
    }
    slot.removeClass().addClass(unit.attr("class"));
    if (ismain) {
      slot.addClass('unit main char');
      slot.removeClass('sub filtered')
    } else {
      slot.addClass('unit sub char');
      slot.removeClass('main filtered');
    }
    slot.append($('<div class="SkillWait">' + getSkillWait(DevNickname) + '</div>'));
    $(".selected").removeClass("selected");
    setSkillWait();
    $("#btnGetCompURL").text(tls.GenerateImageURL).removeClass("on");
    $('body').removeClass("showCompURL");
  }

  function setEquipSlot(slot, DevNickname) {
    $("#btnUnset").appendTo($("#planner"));
    if (DevNickname == "blank") {
      unit = blank_elem.clone();
      slot.data("DevNicknames", "blank");
    } else {
      unit = $("#equip-" + DevNickname);
      slot.data("DevNicknames", DevNickname);
    }
    slot.html(unit.html());
    slot.find('.equipInfoBlock').remove();
    var isweapon = true;
    if (slot.is('.soul')) {
      isweapon = false;
    }
    slot.removeClass().addClass(unit.attr("class"));
    if (isweapon) {
      slot.addClass('unit weapon equip');
      slot.removeClass('soul filtered')
    } else {
      slot.addClass('unit soul equip');
      slot.removeClass('weapon filtered');
    }
    $(".selected").removeClass("selected");
    $("#btnGetCompURL").text(tls.GenerateImageURL).removeClass("on");
  $('body').removeClass("showCompURL");
  }

  // 所持状態が変更されたときに叩かれる
  // リンク生成ボタンの初期化、所持率の再計算
  function unitChanged(){
    $("#btnSave").removeClass("on");
    $("#btnGetShareURL").text(tls.GenerateShareURL).removeClass("on");
    $("#btnUrlCopy").removeClass("on");
    $('body').removeClass("showShareURL");
    updateCharScore();
    updateEquipScore();
  }

  // カンマ区切りのunit_idとunit_typeを引数に取る
  // checkedクラスを付与しupdateCharScoreを叩く
  function setUnitList(unitList, type) {
    var units = unitList.split(",")
    $(".checked").removeClass(".checked");
    units.forEach(function (unit) {
      $("#" + type + "-" + unit).addClass("checked");
    });
  }

  function getUnitList(type) {
    var units = [];
    $("#" + type + "s .checked").each(function () {
      var DevNicknames = $(this).data("DevNicknames");
      units.push(DevNicknames);
    });
    return units.join();
  }

  function updateCharScore() {
    var gTotal = 0;
    var gCount = 0;
    $('#chars .unitList').each(function () {
      const total = $(this).find(".char").not('.filtered').length;
      const count = $(this).find(".char.checked").not('.filtered').length;
      $(this).siblings('.score').text(count + '/' + total);
      gTotal += total;
      gCount += count;
      if (count == total) {
        $(this).siblings('.btnSelectAll').addClass('on').html(tls.DeselectAll);
      } else {
        $(this).siblings('.btnSelectAll').removeClass('on').html(tls.SelectAll);
      }
    });
    $("#charGrandTotal .score").text(gCount + '/' + gTotal);
    if (gTotal > 0) {
      $("#charGrandTotal .percentage").text((100 * gCount / gTotal).toFixed(0) + '%');
    } else {
      $("#charGrandTotal .percentage").text('');
    }
  }

  function updateEquipScore() {
    var gTotal = 0;
    var gCount = 0;
    $('#equips .unitList').each(function () {
      const total = $(this).find(".equip").not('.filtered').length;
      const count = $(this).find(".equip.checked").not('.filtered').length;
      $(this).siblings('.score').text(count + '/' + total);
      gTotal += total;
      gCount += count;
      if (count == total) {
        $(this).siblings('.btnSelectAll').addClass('on').html(tls.DeselectAll);
      } else {
        $(this).siblings('.btnSelectAll').removeClass('on').html(tls.SelectAll);
      }
    });
    $("#equipGrandTotal .score").text(gCount + '/' + gTotal);
    if (gTotal > 0) {
      $("#equipGrandTotal .percentage").text((100 * gCount / gTotal).toFixed(0) + '%');
    } else {
      $("#equipGrandTotal .percentage").text('');
    }
  }

  function updateCharFilter() {
    if ($('.btnFilter.on').length <= 0) {
      $("#chars .char").removeClass('filtered');
      $("#chars section").removeClass('hidden');
    } else {
      $("#chars .char").addClass('filtered');
      if ($('#filterCharAttribute .btnFilter.on').length > 0) {
        $('#filterCharAttribute .btnFilter.on').each(function () {
          var filter = $(this).data('filter');
          $("#chars ." + filter).removeClass('filtered');
        });
      } else {
        $("#chars .char").removeClass('filtered');
      }

      $("#chars .char").not('.filtered').addClass('tempFilter');

      filterUnit('CharRarity');
      filterUnit('CharRole');
      filterUnit('CharRace');
      filterUnit('AltArt');

      $('.tempFilter').removeClass('tempFilter');

      $(".charList").each(function () {
        if ($(this).find('.char').not('.filtered').length == 0) {
          $(this).parent().addClass('hidden')
        } else {
          $(this).parent().removeClass('hidden');
        }
      });
    }
    $(".charList").addClass('flash');
    setTimeout(function () {
      $(".charList").removeClass('flash');
    }, 100);
    updateCharScore();
  }

  function filterUnit(target) {
    if ($('#filter' + target + ' .btnFilter.on').length > 0) {
      $('.tempFilter').addClass('filtered');
      $('#filter' + target + ' .btnFilter.on').each(function () {
        var filter = $(this).data('filter');
        $('.tempFilter.' + filter).removeClass('filtered');
      });
      $('.tempFilter').removeClass('tempFilter');
      $("#chars .char").not('.filtered').addClass('tempFilter');
      $("#equips .equip").not('.filtered').addClass('tempFilter');
    }
  }

  function updateEquipFilter() {
    if ($('.btnFilter.on').length <= 0) {
      $("#equips .equip").removeClass('filtered');
      $("#equips section").removeClass('hidden');
    } else {
      $("#equips .equip").addClass('filtered');
      if ($('#filterEquipAttribute .btnFilter.on').length > 0) {
        $('#filterEquipAttribute .btnFilter.on').each(function () {
          var filter = $(this).data('filter');
          $("#equips ." + filter).removeClass('filtered');
        });
      } else {
        $("#equips .equip").removeClass('filtered');
      }
      $("#equips .equip").not('.filtered').addClass('tempFilter');

      if ($('#filterEquipRarity .btnFilter.on').length > 0) {
        $('.tempFilter').addClass('filtered');
        $('#filterEquipRarity .btnFilter.on').each(function () {
          var filter = $(this).data('filter');
          $('.tempFilter.' + filter).removeClass('filtered');
        });
      }
      $('.tempFilter').removeClass('tempFilter');

      if ($('#filterEquipObtain .btnFilter.on').length > 0) {
        if ($('.btnNoGacha').is('.on')){
          $("#equips .equip").not('.NoGacha').addClass('filtered');
        }
        if ($('.btnShowGacha').is('.on')){
          $("#equips .equip").not('.Gacha').addClass('filtered');
        }
      }

      $(".equipList").each(function () {
        if ($(this).find('.equip').not('.filtered').length == 0) {
          $(this).parent().addClass('hidden')
        } else {
          $(this).parent().removeClass('hidden');
        }
      });
    }
    $(".equipList").addClass('flash');
    setTimeout(function () {
      $(".equipList").removeClass('flash');
    }, 100);
    updateEquipScore();
  }

  function setSkillWait() {
    $(".unison").each(function () {
      var main = parseInt($(this).find('.main .SkillWait').text()) || 0;
      var sub = parseInt($(this).find('.sub .SkillWait').text()) || 0;
      var wait = 0;
      if (main == 0 || sub == 0) {
        wait = (main * 2 + sub * 2) / 2
      } else {
        wait = (main + sub) / 2
      }
      $(this).find(".totalSkillWait span").text(wait);
    });
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
});
