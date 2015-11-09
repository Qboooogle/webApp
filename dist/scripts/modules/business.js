/*!
 * LastModifyTime: 2015-11-07 11:21:19
 * Copyright(c) 2015 leafront
*/
define(["jquery","underscore","backbone","businessTpl"],function($,e,n,s){var i=n.View.extend({className:"business-page",businessTemplate:e.template(s),initialize:function(){this.render()},render:function(){$(".scroll-view").html($(this.el).append(this.businessTemplate()))}});return i});