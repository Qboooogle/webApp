/**
 * Created by Administrator on 2015/10/28.
 */
define([],function(){
    var headerTpl='<div class="open-menu fl">\
                <span class="open-top-bar">\
                </span>\
                <span class="open-bot-bar">\
                </span>\
        </div>\
        <a href="index.html" class="logo" alt="logo"><img src="images/logo.png"/> </a>';
    var footerTpl='<h3 class="home-case-title">联系我们<em>Contact Us</em></h3>\
            <h4>北京优艺客文化传播有限公司</h4>\
            <p>地点：北京市通州区新华大街北京ONE写字楼2605</p>\
            <p>邮编：101100</p>\
            <p>电话：<a href="tel:010-69557550" class="tel">010-69557550</a></p>\
            <p>电话：<a href="tel:010-56078880" class="tel">010-56078880</a></p>\
            <p>传真：010-65078880</p>\
            <p>邮箱：uelike@uelike.com</p>\
            <div id="bgmark" class="none"></div>';
    return {
        headerTpl:headerTpl,
        footerTpl:footerTpl
    }

})