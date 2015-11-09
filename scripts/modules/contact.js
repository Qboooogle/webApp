/**
 * Created by Administrator on 2015/10/30.
 */
define([
    'jquery',
    'underscore',
    'backbone',
    'contactTpl'
], function(
    $,
    _,
    Backbone,
    contactTpl){
    var ContactView=Backbone.View.extend({
        className:'contact-page',
        contactTemplate:_.template(contactTpl),
        initialize:function(){
            this.render();
        },
        render:function(){
            $('.scroll-view').html($(this.el).append(this.contactTemplate()))
        }
    })
    return ContactView;
})