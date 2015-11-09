/**
 * Created by Administrator on 2015/10/28.
 */
define([
    'jquery',
    'underscore',
    'backbone',
    'commonTpl',
],function(
    $,
    _,
    Backbone,
    commonTpl
) {
     var  Router=Backbone.Router.extend({
         el:$('body'),
         initialize:function(){
             $('#header').html(this.headerTemplate());
             $('#footer').html(this.footerTemplate());
             $('.open-menu').on('tap', function () {
                 $(this).toggleClass('open-btn');
                 $('#container').toggleClass('menu-btn');
                 $('#leftMenu').toggleClass('none');
                 $('#bgmark').toggleClass('none');
             })
             $(document).on('tap', function (e) {
                 //$('.open-menu').removeClass('open-btn');
                 //$('#container').removeClass('menu-btn');
                 //$('#bgmark').addClass('none');
                 //$('#leftMenu').addClass('none');

             })
             $('.btns-project').on('tap', function () {
                 $('.subNav').toggleClass('subNav-slide');
                 $('.more-v').toggleClass('more-slide');
             })
             this.loading();
         },
         loading:function(){
             if(document.readyState=='complete'){
                 $('#loading').hide();
                 $('#container').removeClass('none');
             }
         },
         routes:{
             'home':'index',
             '':'index',
             'list':'list',
             'project/case':'projectCase',
             'project/team':'projectTeam',
             'business':'business',
             'contact':'contact',
             'news':'news',
         },
         headerTemplate: _.template(commonTpl.headerTpl),
         footerTemplate: _.template(commonTpl.footerTpl),
         index:function(){
            var url='scripts/modules/home.js';
             require([url],function(IndexView){
                 var indexView=new IndexView();
             })
             this.changeView();
         },
         projectCase:function(){
             var url='scripts/modules/project.js';
             require([url],function(ProjectView){
                 var projectView=new ProjectView();
                 projectView.caseRender();
             })
             this.changeView();
         },
         projectTeam:function(){
             var url='scripts/modules/project.js';
             require([url],function(ProjectView){
                 var projectView=new ProjectView();
                 projectView.teamRender();
             })
             this.changeView();
         },
         contact:function(){
            var url='scripts/modules/contact.js';
             require([url],function(ContactView){
                 var contactView=new ContactView();
             })
             this.changeView();
         },
         news:function(){
             var url='scripts/modules/news.js';
             require([url],function(NewsView){
                 var newsView=new NewsView();
             })
             this.changeView();
         },
         business:function(){
             var url='scripts/modules/business.js';
             require([url],function(BusinessView){
                 var businessView=new BusinessView();
             })
             this.changeView();
         },
         changeView:function(){
             $('.open-menu').removeClass('open-btn');
             $('#container').removeClass('menu-btn');
             $('#leftMenu').addClass('none');
             $('.subNav').removeClass('subNav-slide');
             $('.more-v').removeClass('more-slide');
             $('#bgmark').addClass('none');
         }
     })
    return Router;
})