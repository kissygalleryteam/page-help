KISSY.add('kg/page-help/1.0.0/index',["node","base","event","dom","overlay"],function(S ,require, exports, module) {function e(e){this._init(S.merge(p,e))}var a=require("node").all,i=(require("base"),require("event")),l=require("dom"),o=require("overlay"),p={};S.augment(e,i.Target,{_init:function(e){var i=this;if(e.helpArr){var l='<div class="J_FavHelpClose fav-help-box fav-help-hidden"><div class="J_FH1 fav-help1"></div><div class="J_FH2 fav-help2"></div><div class="J_FH3 fav-help3"></div><div class="J_FH4 fav-help4"></div> <div class="fav-help-i1"></div><div class="fav-help-i2"></div><div class="fav-help-i3"></div><div class="fav-help-i4"></div> </div><div id="J_FavHelpTools" class="fav-help-tools fav-help-hidden">  <div class="fav-help-tools-center">      <div class="hd"><span class="tb-help-iconfont">&#xe600;</span>如何玩转本页面</div>      <span class="J_FavHelpClose close-btn">关闭</span>      <div class="bd">';S.each(e.helpArr,function(e,a){e.page&&e.page!=window.g_config.pageName||(l+=e.cb?'<div  data-spm-click="gostr=/tbscj;locaid=d5favhelp'+a+'" data-hook="'+e.hook+'" data-a="'+e.a+'" class="q" onclick="'+e.cb+'">'+e.q+"</div>":'<div  data-spm-click="gostr=/tbscj;locaid=d5favhelp'+a+'" data-hook="'+e.hook+'" data-a="'+e.a+'" class="q">'+e.q+"</div>")}),l+='</div></div></div><div class="J_FavHelpPop fav-help-pop"><div class="J_FavHelpPopHd"></div><div class="J_FavHelpPopBd"></div></div>',a("body").append(l),a("#J_FavHelpTools").height(a(".fav-help-tools-center").height()),i._bindEvent()}else a(".J_FavHelpBtn").addClass("fav-help-hidden")},_bindEvent:function(){var e=this;a(".J_FavHelpBtn").on("click",function(){a("body").css({height:l.viewportHeight(),overflow:"fav-help-hidden"}).animate({scrollTop:0},.1),a(".J_FH1").height("100%"),a(".fav-help-box").removeClass("fav-help-hidden"),a("#J_FavHelpTools").removeClass("fav-help-hidden"),a("#J_FavHelpTools").animate({height:a(".fav-help-tools-center").height()},.3)}),a(".J_FavHelpClose").on("click",function(){a(".fav-help-box").addClass("fav-help-hidden"),window.favHelpPopupTimer&&window.favHelpPopupTimer.cancel(),window.favHelpPopup&&window.favHelpPopup.hide(),a("#J_FavHelpTools").animate({height:0},.3,null,function(){a("#J_FavHelpTools").addClass("fav-help-hidden"),a("body").removeAttr("style")})}),a("#J_FavHelpTools").on("click",function(i){if(a(i.target).hasClass("q")){a(".q-sel").removeClass("q-sel"),a(i.target).addClass("q-sel");var o=a(i.target).attr("data-hook");if(o){window.favHelpPublicPopup&&window.favHelpPublicPopup.hide();var p=a(o);l.get(o)?(e._anim(p),e._showPop(l.get(o),a(i.target).attr("data-a"))):(a(".J_FH1").height("100%"),window.alert("出了点小状况，亲先试试别的吧~"))}else a(".J_FH1").height("100%")}})},_anim:function(e){var i=l.viewportWidth(),o=l.viewportHeight(),p=parseInt(e.css("padding-left").split("px")[0]),s=parseInt(e.css("padding-right").split("px")[0]),t=parseInt(e.css("padding-top").split("px")[0]),d=parseInt(e.css("padding-bottom").split("px")[0]);a(".J_FH1").animate({height:e.offset().top-5},.3),a(".J_FH2").animate({width:i-e.offset().left-(e.width()+p+s)-5},.3),a(".J_FH3").animate({height:o-e.offset().top-(e.height()+t+d)-5},.3),a(".J_FH4").animate({width:e.offset().left-5},.3)},_showPop:function(e,a){window.favHelpPopup&&window.favHelpPopup.hide(),"undefined"!=a&&(window.favHelpPopup||(window.favHelpPopup=new o({prefixCls:"favhelp-",zIndex:300020})),window.favHelpPopup.set("align",{node:e,points:["bc","tc"],offset:[0,20]}),window.favHelpPopup.set("content","<i></i>"+a),window.favHelpPopupTimer=S.later(function(){window.favHelpPopup.show()},300))}}),module.exports=e;});