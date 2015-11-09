/*!
 * LastModifyTime: 2015-11-07 11:21:19
 * Copyright(c) 2015 leafront
*/
require.config({baseUrl:"scripts",urlArgs:"v=20151107112119",paths:{jquery:"lib/zepto.min",underscore:"lib/underscore-min",backbone:"lib/backbone-min",swipe:"component/swipe",router:"router",app:"scripts/app",home:"modules/home",project:"modules/project",contact:"modules/contact",news:"modules/news",business:"modules/business",indexTpl:"views/index.tpl",commonTpl:"views/common.tpl",projectTpl:"views/project.tpl",contactTpl:"views/contact.tpl",newsTpl:"views/news.tpl",businessTpl:"views/business.tpl"},shim:{jquery:{exports:"$"},underscore:{exports:"_"},backbone:{deps:["underscore","jquery"],exports:"Backbone"}}}),require(["backbone","router"],function(e,s){new s;e.history.start()});