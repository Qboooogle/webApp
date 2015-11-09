/**
 * Created by Administrator on 2015/10/28.
 */
define(['jquery','underscore','backbone','swipe','indexTpl'],function($,_,Backbone,Swipe,indexTpl){
    var IndexView=Backbone.View.extend({
        className:'home-page',
        indexTemplate: _.template(indexTpl),
        initialize: function () {
            this.render();
            var elem = document.getElementById('swipe');
            Swipe(elem, {
                startSlide: 0,
                auto: 3000,
                continuous: true,
                disableScroll: true,
                stopPropagation: true,
                callback: function (index, element) {
                    var i = swipeBtn.length;
                    while (i--) {
                        swipeBtn[i].className = '';
                    }
                    swipeBtn[index].className = 'active';
                },
                transitionEnd: function (index, element) {
                }
            });
            var swipeBtn = document.querySelectorAll('.swipe a');
            var caseswipe = document.getElementById('business-swipe');
            window.caseswipe = Swipe(caseswipe, {
                startSlide: 0,
                auto: 3000,
                continuous: true,
                disableScroll: true,
                stopPropagation: true
            });
        },
        render: function () {
            $('.scroll-view').html($(this.el).append(this.indexTemplate()));
            return this;
        }
    })
    return IndexView;
})