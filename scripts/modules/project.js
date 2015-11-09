/**
 * Created by Administrator on 2015/10/28.
 */
define([
    'jquery',
    'underscore',
    'backbone',
    'projectTpl'
], function(
    $,
    _,
    Backbone,
    projectTpl){
    var ProjectView=Backbone.View.extend({
        className:'project-page',
        projectCaseTemplate:_.template(projectTpl.projectCaseTpl),
        projectTeamTemplate:_.template(projectTpl.projectTeamTpl),
        initialize:function(){

        },
        teamRender:function(){
            $('.scroll-view').html($(this.el).append(this.projectTeamTemplate()))
        },
        caseRender:function(){
            $('.scroll-view').html($(this.el).append(this.projectCaseTemplate()))
        }
    })
    return ProjectView;
})