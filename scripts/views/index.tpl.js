define([],function(){
    var indexTpl='<div id="swipe" class="swipe">\
            <ul class="swipe-wrap">\
                <li><img src="images/banner01.jpg"/> </li>\
                <li><img src="images/banner02.jpg"/> </li>\
                <li><img src="images/banner03.jpg"/> </li>\
            </ul>\
            <div class="swipe-btn">\
                <a class="active" href="javascript:;"></a>\
                <a href="javascript:;"></a>\
                <a href="javascript:;"></a>\
            </div>\
        </div>\
        <div class="home-case">\
            <h3 class="home-case-title">案例展示<em>product</em></h3>\
            <ul class="home-case-list">\
                <li><a href="#"><img src="images/home-case01.jpg" alt=""/></a></li>\
                <li><a href="#"><img src="images/home-case02.jpg" alt=""/></a></li>\
                <li><a href="#"><img src="images/home-case03.jpg" alt=""/></a></li>\
                <li><a href="#"><img src="images/home-case04.jpg" alt=""/></a></li>\
                <li><a href="#"><img src="images/home-case05.jpg" alt=""/></a></li>\
                <li><a href="#"><img src="images/home-case06.jpg" alt=""/></a></li>\
                <li><a href="#"><img src="images/home-case07.jpg" alt=""/></a></li>\
                <li><a href="#"><img src="images/home-case08.jpg" alt=""/></a></li>\
            </ul>\
                <a href="#" class="home-case-more">viewmore</a>\
            </div>\
            <div class="business-case">\
                <h3 class="home-case-title">案例展示<em>product</em></h3>\
            <div id="business-swipe">\
                <ul class="swipe-wrap">\
                    <li><img src="images/swipe-case01.jpg" alt=""/></li>\
                    <li><img src="images/swipe-case02.jpg" alt=""/></li>\
                    <li><img src="images/swipe-case03.jpg" alt=""/></li>\
                </ul>\
            </div>\
                <a href="javascript:;" onclick="caseswipe.prev()" class="prev fa-angle-left"></a>\
                <a href="javascript:;" onclick="caseswipe.next()"class="next fa-angle-right"></a>\
            </div>\
            <div class="home-contact">\
                <h3 class="home-case-title">关于我们<em>About Us</em></h3>\
                <p>优艺客(UElike)文化传播有限公司(原韩雪冬网页设计工作室)，成立于2008年，是由一群有着研发精神和创新精神的团队组成。多年来，我们一直专注于互联网整合营销传播服务，截止目前我们已经服务过300多个大型客户。不论是品牌官网、企业官网、还是信息应用平台，</p>\
                <a href="#" class="home-contact-more">MORE</a>\
        </div>\
        <article class="home-news">\
            <h3 class="home-case-title">案例展示<em>product</em></h3>\
            <ul class="home-news-list">\
            <li>\
                <time>2015-08-05</time>\
                <h4>UEMO后台初步完成，已经进入测试阶段。</h4>\
                <p>千呼万唤始出来，千树万树梨花开。等了这么久，勤劳的技术哥哥马不停蹄的敲着代码，终于UEMO的后台于今日初步完成，已经“duang~ duang~”的进入了测（zhao）试（cha）阶段。虽然技术哥哥有着超乎自信的小眼神，但我们是不会放过任何一个不完美，不人性的Bug的。</p>\
            </li>\
            <li>\
            <time>2015-07-30</time>\
            <h4>企业版UEMO的设计部分已完成二十余套！</h4>\
            <p>经过多年的研究与调查，从今年的6月开工设计至今，勤劳的设计精英们已完成二十余套企业版UEMO。每一套设计我们都细心研究，集体讨论。从美观度到延展性，从体验度到适用性。技术哥哥前端姐姐提出的中肯建议，设计师们都虚心接受，悉心改良。技术哥哥也在快马加鞭的赶制后台部分，相信过不了多久一套完整的产品就可以跟大家见面了！</p>\
        </li>\
        <li>\
        <time>2015-06-18</time>\
        <h4>让早期的想法变为现实！</h4>\
            <p>经过多年的研究与调查，从今年的6月开工设计至今，勤劳的设计精英们已完成二十余套企业版UEMO。每一套设计我们都细心研究，集体讨论。从美观度到延展性，从体验度到适用性。技术哥哥前端姐姐提出的中肯建议，设计师们都虚心接受，悉心改良。技术哥哥也在快马加鞭的赶制后台部分，相信过不了多久一套完整的产品就可以跟大家见面了！</p>\
        </li>\
        </ul>\
        <a href="#" class="home-news-more">MORE</a>\
        </article>\
        <div class="links">\
            <ul class="links-list">\
                <li><img src="images/link01.png" alt=""/></li>\
                <li><img src="images/link02.png" alt=""/></li>\
                <li><img src="images/link03.png" alt=""/></li>\
                <li><img src="images/link04.png" alt=""/></li>\
                <li><img src="images/link05.png" alt=""/></li>\
                <li><img src="images/link06.png" alt=""/></li>\
            </ul>\
        </div>\
        </div>';
    return indexTpl;
})