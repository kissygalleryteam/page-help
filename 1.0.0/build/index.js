/*
Thu Feb 05 2015 16:11:02 GMT+0800 (CST)
combined files by KMD:

index.js
*/

KISSY.add('kg/page-help/1.0.0/index',["node","base"],function(S ,require, exports, module) {
var $ = require('node').all;
var Base = require('base');

var PageHelp = Base.extend({
    initializer:function(){
        var self = this;
        var $target = self.get('$target');
    }
},{
    ATTRS:{
        $target:{
            value:'',
            getter:function(v){
                return $(v);
            }
        }
    }
});

module.exports = PageHelp;




});