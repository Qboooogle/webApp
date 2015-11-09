/*!
 * LastModifyTime: 2015-11-07 11:21:19
 * Copyright(c) 2015 leafront
*/
define(["jquery","underscore","backbone","newsTpl"],function($,e,n,t){var i,s=n.View.extend({className:"news-page",newsTemplate:e.template(t),initialize:function(){i=this,this.render()},render:function(){$(".scroll-view").html($(this.el).append(this.newsTemplate()))}});return s});