webpackJsonp([19],{"5WXe":function(t,n,a){n=t.exports=a("FZ+f")(!1),n.push([t.i,".page_animation .animations{width:100px;height:100px;background:#b8860b}.page_animation .slide-fade-enter-active{-webkit-transition:all 3s ease;transition:all 3s ease}.page_animation .slide-fade-leave-active{-webkit-transition:all .8s cubic-bezier(1,.5,.8,1);transition:all .8s cubic-bezier(1,.5,.8,1)}.page_animation .slide-fade-enter{-webkit-transform:translateX(10px);transform:translateX(10px);opacity:.5}.page_animation .slide-fade-leave-to{-webkit-transform:translateX(30px);transform:translateX(30px);opacity:.5}",""])},Zhd3:function(t,n,a){var i=a("5WXe");"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);a("rjj0")("070f71eb",i,!0,{})},dh2h:function(t,n,a){"use strict";function i(t){a("Zhd3")}Object.defineProperty(n,"__esModule",{value:!0});var e=a("pDhZ"),o=a("o7Pi"),s=a("VU/8"),r=i,c=s(e.a,o.a,!1,r,null,null);n.default=c.exports},o7Pi:function(t,n,a){"use strict";var i=function(){var t=this,n=t.$createElement,a=t._self._c||n;return a("div",{staticClass:"page_animation"},[a("mt-header",{attrs:{slot:"header",title:"动画",fixed:!0},slot:"header"},[a("mt-button",{attrs:{slot:"left",icon:"back"},nativeOn:{click:function(n){t.back(n)}},slot:"left"})],1),t._v(" "),a("div",{attrs:{slot:"content"},slot:"content"},[a("a",{attrs:{href:"https://github.com/daneden/animate.css"}},[t._v("参考地址")]),t._v(" "),a("div",{staticClass:"animations animated",class:t.animation},[t._v("\n      "+t._s(t.animation)+"\n    ")]),t._v(" "),a("mt-button",{on:{click:function(n){t.changeAnimation()}}},[t._v("切换动画")]),t._v(" "),a("h3",[t._v("transition 动画")]),t._v(" "),a("transition",{attrs:{name:t.transitionName}},[a("div",{directives:[{name:"show",rawName:"v-show",value:t.show,expression:"show"}],staticClass:"animations"},[t._v("\n        "+t._s(t.animation)+"\n      ")])]),t._v(" "),a("mt-button",{on:{click:function(n){t.show=!t.show}}},[t._v("显示/隐藏")])],1)],1)},e=[],o={render:i,staticRenderFns:e};n.a=o},pDhZ:function(t,n,a){"use strict";n.a={name:"n22Template",components:{},directives:{},data:function(){return{animation:"zoomInRight",transitionName:"slide-fade",show:!1}},created:function(){},computed:{},methods:{init:function(){},changeAnimation:function(){this.animation="zoomOutLeft"==this.animation?"zoomInRight":"zoomOutLeft"}},watch:{},mounted:function(){this.init()}}}});