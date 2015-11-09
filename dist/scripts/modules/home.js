/*!
 * LastModifyTime: 2015-11-07 11:21:19
 * Copyright(c) 2015 leafront
*/
define(["jquery","underscore","backbone","swipe","indexTpl"],function($,e,t,n,i){var a=t.View.extend({className:"home-page",indexTemplate:e.template(i),initialize:function(){this.render();var e=document.getElementById("swipe");n(e,{startSlide:0,auto:3e3,continuous:!0,disableScroll:!0,stopPropagation:!0,callback:function(e,n){for(var i=t.length;i--;)t[i].className="";t[e].className="active"},transitionEnd:function(e,t){}});var t=document.querySelectorAll(".swipe a"),i=document.getElementById("business-swipe");window.caseswipe=n(i,{startSlide:0,auto:3e3,continuous:!0,disableScroll:!0,stopPropagation:!0})},render:function(){return $(".scroll-view").html($(this.el).append(this.indexTemplate())),this}});return a});