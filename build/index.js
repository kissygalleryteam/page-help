/*
Thu Feb 05 2015 20:46:44 GMT+0800 (CST)
combined files by KMD:

index.js
*/

KISSY.add('kg/page-help/1.0.0/index',["node","base","event","dom","overlay"],function(S ,require, exports, module) {
var $ = require('node').all;
var Base = require('base');
var Event = require('event');
var D = require('dom');
var Overlay = require('overlay');
var baseConf = {};

function PageHelp(conf){
    this._init(S.merge(baseConf,conf));
}
S.augment(PageHelp, Event.Target, {

    _init: function(conf){

        var self = this;

        if(conf.helpArr){
            // 创建组件dom结构
            var str = '<div class="J_FavHelpClose fav-help-box fav-help-hidden"><div class="J_FH1 fav-help1"></div><div class="J_FH2 fav-help2"></div><div class="J_FH3 fav-help3"></div><div class="J_FH4 fav-help4"></div> <div class="fav-help-i1"></div><div class="fav-help-i2"></div><div class="fav-help-i3"></div><div class="fav-help-i4"></div> </div>'+
                      '<div id="J_FavHelpTools" class="fav-help-tools fav-help-hidden">'+
                      '  <div class="fav-help-tools-center">'+
                      '      <div class="hd"><span class="tb-help-iconfont">&#xe600;</span>如何玩转本页面</div>'+
                      '      <span class="J_FavHelpClose close-btn">关闭</span>'+
                      '      <div class="bd">';
            S.each(conf.helpArr, function(item, index){
                if(!item.page || item.page==window.g_config.pageName){
                    if(item.cb){
                        str += '<div  data-spm-click="gostr=/tbscj;locaid=d5favhelp'+index+'" data-hook="'+item.hook+'" data-a="'+item.a+'" class="q" onclick="'+item.cb+'">'+item.q+'</div>';
                    }else{
                        str += '<div  data-spm-click="gostr=/tbscj;locaid=d5favhelp'+index+'" data-hook="'+item.hook+'" data-a="'+item.a+'" class="q">'+item.q+'</div>';
                    }
                }
            });
            str += '</div></div></div><div class="J_FavHelpPop fav-help-pop"><div class="J_FavHelpPopHd"></div><div class="J_FavHelpPopBd"></div></div>';
            $('body').append(str);
            $('#J_FavHelpTools').height($('.fav-help-tools-center').height());
            self._bindEvent();
        }else{
            $('.J_FavHelpBtn').addClass('fav-help-hidden');
        }
    }, 


    _bindEvent: function(){

        var self = this;

        // 展开帮助层
        $('.J_FavHelpBtn').on('click', function(e){
            $('body')
            .css({
                'height': D.viewportHeight(),
                'overflow': 'fav-help-hidden'
            })
            .animate({'scrollTop': 0}, 0.1);
            $('.J_FH1').height('100%');
            $('.fav-help-box').removeClass('fav-help-hidden');
            $('#J_FavHelpTools').removeClass('fav-help-hidden');
            $('#J_FavHelpTools').animate({'height': $('.fav-help-tools-center').height()}, 0.3);
        });

        // 收起帮助层
        $('.J_FavHelpClose').on('click', function(e){
            $('.fav-help-box').addClass('fav-help-hidden');
            window.favHelpPopupTimer && window.favHelpPopupTimer.cancel();
            window.favHelpPopup && window.favHelpPopup.hide();
            $('#J_FavHelpTools').animate({'height': 0}, 0.3, null, function(e){
                $('#J_FavHelpTools').addClass('fav-help-hidden');
                $('body').removeAttr('style');
            });
        });

        // 查看帮助
        $('#J_FavHelpTools').on('click', function(e){
            if($(e.target).hasClass('q')){
                $('.q-sel').removeClass('q-sel');
                $(e.target).addClass('q-sel');

                // 置顶 (排除聚宝盆引导的场景)
                // S.later(function(e){
                //     if(!window.favHelpCornucopiaPopupRun){
                //         D.scrollTop(window, 0);
                //     }
                // }, 100);

                S.later(function(){
                    if(!window.favHelpFavPopupRun){
                        window.favHelpFavPopupRun = false;
                        window.yindaoPopup && window.yindaoPopup.hide();
                    }
                    if(!window.favHelpCornucopiaPopupRun){
                        window.favHelpCornucopiaPopupRun = false;
                        window.yindaoCornucopiaPopup && window.yindaoCornucopiaPopup.hide();
                    }
                },100);
                var hook = $(e.target).attr('data-hook');
                if(hook){
                    window.favHelpPublicPopup && window.favHelpPublicPopup.hide();
                    var $hook = $(hook);
                    if(D.get(hook)){
                        self._anim($hook);
                        self._showPop(D.get(hook), $(e.target).attr('data-a'));
                    }else{
                        $('.J_FH1').height('100%');
                        window.alert('出了点小状况，亲先试试别的吧~');
                    }
                }else{
                    $('.J_FH1').height('100%');
                }
            }
        });
    },
    _anim: function($hook){
        var vw = D.viewportWidth();
        var vh = D.viewportHeight();
        var pL = parseInt($hook.css('padding-left').split('px')[0]);
        var pR = parseInt($hook.css('padding-right').split('px')[0]);
        var pT = parseInt($hook.css('padding-top').split('px')[0]);
        var pB = parseInt($hook.css('padding-bottom').split('px')[0]);
        $('.J_FH1').animate({'height': $hook.offset().top-5}, 0.3);
        $('.J_FH2').animate({'width': vw-$hook.offset().left-($hook.width()+pL+pR)-5}, 0.3);
        $('.J_FH3').animate({'height': vh-$hook.offset().top-($hook.height()+pT+pB)-5}, 0.3);
        $('.J_FH4').animate({'width': $hook.offset().left-5}, 0.3);
    },
    _showPop: function(hook, str){
        window.favHelpPopup && window.favHelpPopup.hide();
        if(str != 'undefined'){
            if(!window.favHelpPopup){
                // 第一次点击创建overlay
                window.favHelpPopup = new Overlay({
                    prefixCls: 'favhelp-',
                    zIndex: 300020
                });
            }
            window.favHelpPopup.set('align', {
                node: hook,
                points: ['bc', 'tc'],
                offset: [0, 20]
            });
            window.favHelpPopup.set('content', '<i></i>'+str);
            window.favHelpPopupTimer = S.later(function(){
                window.favHelpPopup.show();
            },300);
        }
    }

});

module.exports = PageHelp;




});