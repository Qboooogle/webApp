/**
 * Created by Administrator on 2015/10/30.
 */
/**
 * Created by Administrator on 2015/10/28.
 */
define([
    'jquery',
    'underscore',
    'backbone',
    'newsTpl'
], function(
    $,
    _,
    Backbone,
    newsTpl){
    var self;
    var NewsView=Backbone.View.extend({
        className:'news-page',
        newsTemplate:_.template(newsTpl),
        initialize:function(){
            self=this;
            this.render();
        },
        render:function(){
            $('.scroll-view').html($(this.el).append(this.newsTemplate()))
        }
    })
    return NewsView;
})