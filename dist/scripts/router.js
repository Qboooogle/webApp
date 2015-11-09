/*!
 * LastModifyTime: 2015-11-07 11:21:19
 * Copyright(c) 2015 leafront
*/
define(["jquery","underscore","backbone","commonTpl"],function($,e,n,t){var s=n.Router.extend({el:$("body"),initialize:function(){$("#header").html(this.headerTemplate()),$("#footer").html(this.footerTemplate()),$(".open-menu").on("tap",function(){$(this).toggleClass("open-btn"),$("#container").toggleClass("menu-btn"),$("#leftMenu").toggleClass("none"),$("#bgmark").toggleClass("none")}),$(document).on("tap",function(e){}),$(".btns-project").on("tap",function(){$(".subNav").toggleClass("subNav-slide"),$(".more-v").toggleClass("more-slide")}),this.loading()},loading:function(){"complete"==document.readyState&&($("#loading").hide(),$("#container").removeClass("none"))},routes:{home:"index","":"index",list:"list","project/case":"projectCase","project/team":"projectTeam",business:"business",contact:"contact",news:"news"},headerTemplate:e.template(t.headerTpl),footerTemplate:e.template(t.footerTpl),index:function(){var e="scripts/modules/home.js";require([e],function(e){new e}),this.changeView()},projectCase:function(){var e="scripts/modules/project.js";require([e],function(e){var n=new e;n.caseRender()}),this.changeView()},projectTeam:function(){var e="scripts/modules/project.js";require([e],function(e){var n=new e;n.teamRender()}),this.changeView()},contact:function(){var e="scripts/modules/contact.js";require([e],function(e){new e}),this.changeView()},news:function(){var e="scripts/modules/news.js";require([e],function(e){new e}),this.changeView()},business:function(){var e="scripts/modules/business.js";require([e],function(e){new e}),this.changeView()},changeView:function(){$(".open-menu").removeClass("open-btn"),$("#container").removeClass("menu-btn"),$("#leftMenu").addClass("none"),$(".subNav").removeClass("subNav-slide"),$(".more-v").removeClass("more-slide"),$("#bgmark").addClass("none")}});return s});