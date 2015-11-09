/*!
 * LastModifyTime: 2015-11-07 11:21:19
 * Copyright(c) 2015 leafront
*/
define(["jquery","underscore","backbone","projectTpl"],function($,e,t,a){var p=t.View.extend({className:"project-page",projectCaseTemplate:e.template(a.projectCaseTpl),projectTeamTemplate:e.template(a.projectTeamTpl),initialize:function(){},teamRender:function(){$(".scroll-view").html($(this.el).append(this.projectTeamTemplate()))},caseRender:function(){$(".scroll-view").html($(this.el).append(this.projectCaseTemplate()))}});return p});