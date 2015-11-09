/*!
 * LastModifyTime: 2015-11-07 11:21:19
 * Copyright(c) 2015 leafront
*/
define(["jquery","underscore","backbone","contactTpl"],function($,e,t,n){var c=t.View.extend({className:"contact-page",contactTemplate:e.template(n),initialize:function(){this.render()},render:function(){$(".scroll-view").html($(this.el).append(this.contactTemplate()))}});return c});