/**
 * Created by Administrator on 2015/10/30.
 */
define([
    'jquery',
    'underscore',
    'backbone',
    'businessTpl'
], function(
    $,
    _,
    Backbone,
    businessTpl){
    var BusinessView=Backbone.View.extend({
        className:'business-page',
        businessTemplate:_.template(businessTpl),
        initialize:function(){
            this.render();
        },
        render:function(){
            $('.scroll-view').html($(this.el).append(this.businessTemplate()))
        }
    })
    return BusinessView;
})