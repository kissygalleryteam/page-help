## 综述

PageHelp。

## 初始化组件

	window.helpArr=[
	    {
	        hook: '.p1',
	        q: '怎样定位到页面？'
	    },{
	        hook: '.p2',
	        q: '什么是功能提示说明？',
	        a: '这就是功能提示说明，看，直观吧～'
	    },{
	        hook: '.p4',
	        q: '移动选框的动画',
	        a: '动画会自动适应所选元素的宽高～'
	    },{
	        hook: '',
	        q: '我自定义的效果在哪？',
	        cb: 'window.favHelpCornucopiaShow()'
	    }
	];
		
    S.use('node,kg/page-help/1.0.1/index', function (S, Node, PageHelp) {

        var $=Node.all;

        window.favHelpCornucopiaShow = function(){
            $('.J_FH1').height('100%');
            window.favHelpPopup && window.favHelpPopup.hide();
            alert('这里可以执行你的任何脚本');
        }
        
        new PageHelp({
            helpArr: window.helpArr
        });

    })

## API说明

参数只有一个就是当前页面帮助的问题数组，  
每个帮助问题包含参数如下：  

* hook : 页面上所要框选的钩子
* q : 问题文字描述
* a : 答案文字描述
* cb : 自定义执行回调
