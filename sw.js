/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2019/06/23/tow/index.html","353b0680244581bfaeb98caf38f44407"],["/2019/06/26/four/index.html","0ebd64a6e23dcb5fb9166b4ba38c8475"],["/2019/06/26/three/index.html","58816d247e1138ac5ab387f246a25711"],["/2019/06/29/six/index.html","84710a751c24a61fa67108c53f93f254"],["/2019/07/06/serven/index.html","068f11300efb2b0659800f77178522a6"],["/2019/07/11/数据可视化笔记/index.html","4f87baaba722f8e841e38fa5d4a768d6"],["/2019/07/12/语音识别/index.html","33435e0b5422d97da5e761a913eeda71"],["/2019/07/14/hadoop基本概念介绍/index.html","6853d3b75b98fb2ae06af3ddc81f2872"],["/2019/07/14/数据科学笔记/index.html","88c33f3dd52cf71eeaf2c7688b5b5c96"],["/2019/07/22/python爬虫/index.html","37cd0c9f513a937682f6e40dbcc0b0f7"],["/2019/08/25/pandas函数/index.html","df80df60f4e87ffe4b4efcdf6c1a36cd"],["/2019/09/18/计算机系统组成及工作原理简介/index.html","ee7715b96ccdc197342e3eb021ec36e5"],["/2019/09/30/C 语言中 void 详解及应用/index.html","9bd70ae605af217d65252cd349deb496"],["/2019/09/30/第一次面试总结/index.html","4fd955a7b3894ac164dbf49f98d7d65f"],["/2019/10/07/django之url规则/index.html","dc812b9fd0a0486c5372b3a452f6320f"],["/2019/10/07/django配置初启/index.html","59f2231fbaa00d97a45da60951c8afce"],["/2019/10/13/C语言笔记1/index.html","6fb16c7bc2f65301a62136c9c26b5302"],["/2019/10/13/C语言笔记2/index.html","65f8de137ae885edb8094bbc37cbae1d"],["/2019/10/19/C语言打包技艺/index.html","9be34cef63a2c5b582e53eeec4ca2fd8"],["/2019/10/22/c语言笔记3/index.html","faec6e7163f3e724e1745d9b9302d06f"],["/2019/10/27/IP代理池/index.html","2e226106d7768700fd31df993a99d188"],["/2019/10/28/git命令/index.html","cb1846092324aa96d39ad99bbeb40da7"],["/2019/10/31/斗鱼弹幕抓取/index.html","2261a1a0e2eb4c2e5e338fbdd3b67fdb"],["/2019/11/13/多线程/index.html","79f57178f95082437977f5e78948adb0"],["/2019/11/14/多进程/index.html","bf71c584c982f64d1c1da2d467408e50"],["/2019/11/15/python类的私有属性和私有方法/index.html","a603493f532339c5b1680a3e691cc20e"],["/2019/11/16/协程/index.html","b91abba56b47c6b2b6f1ff77fe8de8e1"],["/2019/11/16/进程,线程,协程对比/index.html","fc7cf3af2f9870055d02115c231fb6c3"],["/2019/11/17/GIL锁/index.html","568d2d3f32c2513c1f1846f7770be9a1"],["/2019/11/17/闭包和装饰器/index.html","8913e636a93c92dd651fe9d25bc0b867"],["/2019/11/19/Python进阶知识点/index.html","148cf19b7e4aff0dc57e04fb0ba41ee4"],["/2019/11/22/京东全网爬虫/index.html","352b3154aca4c28e08721b4c77d62760"],["/2019/11/23/JavaScript的简介和基本知识/index.html","4dd5161e8611597ebf29fe76c0d24534"],["/2019/12/04/README/index.html","866950dcbc3839a34653cb35dcdbcd52"],["/2019/12/04/java简介/index.html","32189f56ed9f98582c840332e6b8daca"],["/2019/12/11/java基本知识/index.html","cee0b667da856fb6970ba49dde79cf47"],["/2019/12/16/java面向对象/index.html","cf1b9cdcf1768df712dcc4f2d435aea7"],["/about/index.html","7129fb58afc233f981b46b52835854bc"],["/archives/2019/06/index.html","01d465b70d022f739bc1a4e3a2869709"],["/archives/2019/07/index.html","11deb8db1f6cf71ed205d135616aeba7"],["/archives/2019/08/index.html","72aa35ad4fcd6b5c80918d85399c1ff9"],["/archives/2019/09/index.html","607447a4b28bb54d757e45f22567e9a3"],["/archives/2019/10/index.html","6fd6ba655a4a9071323d5faa9dbc69ee"],["/archives/2019/11/index.html","0333c5524ae8b1025b51a6a5dcae061d"],["/archives/2019/12/index.html","ce6abf17475023fe7083312ebf7896ef"],["/archives/2019/index.html","13c8e773a7dc1c0eb67b61c69c204cd6"],["/archives/2019/page/2/index.html","581026d3d4d1c726549a0f313be5fa64"],["/archives/2019/page/3/index.html","51e7e08e4f987748899fbe8d815c3eca"],["/archives/2019/page/4/index.html","de678540ecf6235f7b4229e7b1230982"],["/archives/index.html","9b3d1c76a818539cd5737a86f8544cdc"],["/archives/page/2/index.html","9fe0c8a1b3a60a337d386ceea02b2933"],["/archives/page/3/index.html","6da399482f35ec9e2181e71086eae45d"],["/archives/page/4/index.html","971431d853f49b1744db5e3c8c0ac966"],["/categories/C语言编程知识/index.html","d5991ad5004a65b31b5f02295cbccd76"],["/categories/Hadoop/index.html","d277624a3dff01a8c227c10fc93f7931"],["/categories/JavaScript/index.html","fad16ece6658be22f2d07f90cc1b12e0"],["/categories/Java学习/index.html","c444f05373e4f3f10ba304d7a2c00767"],["/categories/Linux/index.html","f9cb9c5f7e9d7eb3288fec49786a98dc"],["/categories/Linux/常用命令/index.html","abca09b6a0aeff91c13e121bc79b0c9b"],["/categories/Python/index.html","12ddce9a97cd20157de2de39aa26a4b5"],["/categories/Python/编译器介绍/index.html","8de44db2a3cb36e32829f24547d921b8"],["/categories/Python编程/index.html","a0a3e3e9b74550ccb1f27d3229416aaa"],["/categories/git/index.html","1cafba6b2fa7aa1cacda95f2673d9c73"],["/categories/index.html","ffc32456b85f93caeb06f5c1923cf44e"],["/categories/python数据挖掘/index.html","010154b32cd05e3ab51b53ed5cf25568"],["/categories/python爬虫/index.html","b6394b14c666e91e2df7d3872b8feac3"],["/categories/python的web框架/index.html","4d768ee7669355d61d8707bbd6f20379"],["/categories/个人随感/index.html","e9223000df4ebf0518f56ff19efcb96b"],["/categories/数据可视化/index.html","ba077e60482e073cfd1ecb1975643444"],["/categories/正则表达式/index.html","2dd592ce42c6ff3c08a939d3fcbe29b7"],["/categories/算法/index.html","f58e4a562235ad02d5b5829547a80d0b"],["/categories/算法/五大经典排序/index.html","d9e307114165a08bb2e247242ce660f5"],["/categories/统计学和概率论/index.html","a90659c5e2ab444cba044bd9a999bb3b"],["/categories/网站知识/index.html","f87953f82a8f6b0435add3603de25fa0"],["/categories/计算机组成原理/index.html","2f7d6251ff839d1d914fcbff3c5779b8"],["/categories/面试经历/index.html","ffa104908bc99f92f7a163e1926988c0"],["/css/main.css","3f7ad57e0034bdeee8b2c7f112f15b52"],["/images/Connection.jpg","ec8ea9576b5bea305dca385e5ee015b9"],["/images/L.png","5b9f0833c5fe389b0a9dd51a7b5fe8af"],["/images/algolia_logo.svg","f36be37cfbfc4be962c64f77a88f4b9c"],["/images/apple-touch-icon-next.png","5bcbd18f4de3fa448e0451b020974c18"],["/images/avatar.gif","9c4e9538f89645d5727963406b9f654e"],["/images/avatar.jpg","6a316b02e75ff203cd82c92a6712c612"],["/images/background.jpg","22c9e0f56413298026f616c1a1970407"],["/images/cc-by-nc-nd.svg","8c638e2dc177ddd532eeafcf162ccfa8"],["/images/cc-by-nc-sa.svg","b8a36088bf9d955e416c825e8bcf4dce"],["/images/cc-by-nc.svg","ff4868707d40da0cbc265bfe59b93c94"],["/images/cc-by-nd.svg","301d1c1bda72b509535069fb391241d0"],["/images/cc-by-sa.svg","f9d1c4e33b968afd1381b20600563f97"],["/images/cc-by.svg","ada77ae07aa07f33589e59e9f879444f"],["/images/cc-zero.svg","dce4253fc5dc8e14809150f8bf005ca9"],["/images/favicon-16x16-next.png","67571b40a8fa60b6e958359865aadde3"],["/images/favicon-32x32-next.png","f75654852b07d2ada50958e586a249c8"],["/images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/logo.svg","f03b0e22cbc928510759ed57f2fc1543"],["/images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/quote-l.svg","83c99047e96610cae83fe2c9fe00eaa7"],["/images/quote-r.svg","aea6c9a4bfe07787cd0193dee2228bd8"],["/images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["/images/weixin.jpg","4a0144268440d9d5574735c14974cf55"],["/index.html","ae4111e698668c4473826e77bcf68696"],["/js/src/affix.js","683c19859764baf0d17538897ea1eba2"],["/js/src/algolia-search.js","f5fa392318805997089ceb3a925979ba"],["/js/src/bootstrap.js","2a1083772854ae2663748e0a25c17285"],["/js/src/clickLove.js","7bcfdb57debd43483174cf9e15ab37cc"],["/js/src/exturl.js","2b444179b3145e5007b4d371dac07cd3"],["/js/src/hook-duoshuo.js","45997b0c06abff3cd88efd901f614065"],["/js/src/instantclick.min.js","865d92a4a07409b7fed739e6a108e9c4"],["/js/src/js.cookie.js","6e9eb1f53afb135aedaf90739c867738"],["/js/src/motion.js","0f6add86607c451269d0b3d286c84d8b"],["/js/src/post-details.js","b8e8e27c27c697567879c52888ffc24c"],["/js/src/schemes/pisces.js","827b5ad25e1142277c1e7dfe0cacebe5"],["/js/src/scroll-cookie.js","890406ae3539e4721ef5f314542e5e46"],["/js/src/scrollspy.js","fafdd7ab6af233b701506c733910b7f5"],["/js/src/utils.js","24512c3455f976730b7bf75e1222c533"],["/lib/Han/dist/font/han-space.woff","b09f2dd7d3ad8ad07f3b8495133909d9"],["/lib/Han/dist/font/han.woff","e841c6b547bc06a06f60f4de52bf906e"],["/lib/Han/dist/han.css","7edb5521bc5732846dec0f1561f58422"],["/lib/Han/dist/han.js","575b6c1667c01798730fbd972e959c9c"],["/lib/Han/dist/han.min.css","cab466d758269b437167422c4a16b364"],["/lib/Han/dist/han.min.js","96482c9c2b3c5ea9bf5a40db162c7f34"],["/lib/algolia-instant-search/instantsearch.min.css","029a13b44e6807955106ff3c075a02f9"],["/lib/algolia-instant-search/instantsearch.min.js","0db46eba0c8133693ee839507b1612f2"],["/lib/canvas-nest/canvas-nest.min.js","36e103d2a05bc706bac40f9ab8881eb7"],["/lib/canvas-ribbon/canvas-ribbon.js","16dc214240913551986593808c2efcfc"],["/lib/fancybox/source/blank.gif","325472601571f31e1bf00674c368d335"],["/lib/fancybox/source/fancybox_loading.gif","e14dca13d1d24c7cdf89f8c7b20d57dc"],["/lib/fancybox/source/fancybox_loading@2x.gif","5bafaeb221caf96cf68f94654d2e19a7"],["/lib/fancybox/source/fancybox_overlay.png","cbc2440151b716f07d1c90c7f3ed646c"],["/lib/fancybox/source/fancybox_sprite.png","783d4031fe50c3d83c960911e1fbc705"],["/lib/fancybox/source/fancybox_sprite@2x.png","8784554156c6f95c6acafffc92b38013"],["/lib/fancybox/source/helpers/fancybox_buttons.png","b448080f8615e664b7788c7003803b59"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.css","990b91c524c7b760d505c1eb7304ade6"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.js","f53c246661fb995a3f12e67fa38e0fa0"],["/lib/fancybox/source/helpers/jquery.fancybox-media.js","c017067f48d97ec4a077ccdf056e6a2e"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.css","5133d80120a238ef7fa4cbe43e8b9f02"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.js","cf1fc1df534eede4cb460c5cbd71aba6"],["/lib/fancybox/source/jquery.fancybox.css","03030c16e028ea1565d08f68c30f4602"],["/lib/fancybox/source/jquery.fancybox.js","921e9cb04ad6e2559869ec845c5be39b"],["/lib/fancybox/source/jquery.fancybox.pack.js","cc9e759f24ba773aeef8a131889d3728"],["/lib/fastclick/README.html","48d3ce1486e29d3deddb94099931262c"],["/lib/fastclick/lib/fastclick.js","6e9d3b0da74f2a4a7042b494cdaa7c2e"],["/lib/fastclick/lib/fastclick.min.js","a0fc6c24d1f3ff9ac281887c92b24acd"],["/lib/font-awesome/css/font-awesome.css","c97c3824a8d6c5eb936727310d68fe87"],["/lib/font-awesome/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["/lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/lib/font-awesome/fonts/fontawesome-webfont.svg","677433a0892aaed7b7d2628c313c9775"],["/lib/font-awesome/fonts/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["/lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/lib/jquery/index.js","32015dd42e9582a80a84736f5d9a44d7"],["/lib/jquery_lazyload/CONTRIBUTING.html","c94b7dd8654a2fc32e2e29e0895ee447"],["/lib/jquery_lazyload/README.html","96334ebaad968dbf1f02bf5b225dd5b4"],["/lib/jquery_lazyload/jquery.lazyload.js","8b427f9e86864ee3aaf1ae33e6e14263"],["/lib/jquery_lazyload/jquery.scrollstop.js","f163fd8f02361928853668a96f8a1249"],["/lib/needsharebutton/font-embedded.css","5320559b810d99adbb088f5cb423e50d"],["/lib/needsharebutton/needsharebutton.css","d41d8cd98f00b204e9800998ecf8427e"],["/lib/needsharebutton/needsharebutton.js","6c6f855f7d50f4bc3c804f52b03bbfbb"],["/lib/pace/pace-theme-barber-shop.min.css","e8dc66cf2d88abc25fbc89b8a0529abb"],["/lib/pace/pace-theme-big-counter.min.css","db2b8fe31e60f19021545277d2f6e05e"],["/lib/pace/pace-theme-bounce.min.css","ad954aa0bace4b213eeb19d6e89a0bda"],["/lib/pace/pace-theme-center-atom.min.css","8f6bc803acefc6f93afc98fb38201456"],["/lib/pace/pace-theme-center-circle.min.css","93c72298781226a80a9c66b27b21a57d"],["/lib/pace/pace-theme-center-radar.min.css","f0099bdd1cd42e9476bd7abc417c0328"],["/lib/pace/pace-theme-center-simple.min.css","eddff4756dbf21dbbff1c543bd894dde"],["/lib/pace/pace-theme-corner-indicator.min.css","776826157cb28ac1ee5e78771292b9ba"],["/lib/pace/pace-theme-fill-left.min.css","965859b39001da08e1e92327fe3d8e12"],["/lib/pace/pace-theme-flash.min.css","aab39b436e1fa0fdc51df06f2d53c38a"],["/lib/pace/pace-theme-loading-bar.min.css","4e05877f1f9efb9c1e7dd75cb78c764f"],["/lib/pace/pace-theme-mac-osx.min.css","29ae030ceaa8158352c5472218375b91"],["/lib/pace/pace-theme-minimal.min.css","f48f04d370993b55a2745e548cc82743"],["/lib/pace/pace.min.js","24d2d5e3e331c4efa3cda1e1851b31a7"],["/lib/three/canvas_lines.min.js","1324174ae6190fbf63b7bf0ad0a8a5bd"],["/lib/three/canvas_sphere.min.js","5c6bc45b137448b5b9df152ccfb2659c"],["/lib/three/three-waves.min.js","41059bd5e5c7aa520b1b411919e5121f"],["/lib/three/three.min.js","3298078bce82bdb1afadf5b1a280915e"],["/lib/ua-parser-js/dist/ua-parser.min.js","a6e833266c4b41fabb9ba94a145322d8"],["/lib/ua-parser-js/dist/ua-parser.pack.js","6b627e4d61a7135952824bb9c1a4a134"],["/lib/velocity/velocity.js","0361fa6dcf4cf4d19c593cdab0937dd0"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.js","f55d22cc592c9f8d4ffd3b41a6b90081"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/live2dw/lib/L2Dwidget.0.min.js","32973883fcac0a9ae6cc79c0ea25fda2"],["/live2dw/lib/L2Dwidget.min.js","094cbace49a39548bed64abff5988b05"],["/page/2/index.html","b6c434e69cae3d2869ee60a41d1593fe"],["/page/3/index.html","b58a0ed41b7a674ab98cc1c32cd8fd74"],["/page/4/index.html","0baa482a5fcb35ed9ef5f74e438fa9c3"],["/sw-register.js","664264241b838b278c0507e88b886607"],["/tags/Django/index.html","8ec75088aa49fad0a21c5a9aa0cc5f51"],["/tags/GIL锁/index.html","7135162b16c891dc5ab3a99c756026ab"],["/tags/Hadoop介绍/index.html","24bcf5fe2d5f9ba4e09a6d5075d44927"],["/tags/Java基本知识点/index.html","594e13c525e4711608ca67bd5d656219"],["/tags/Void-知识点/index.html","35ab16c1156c1bc98ac22cc6bfb79baf"],["/tags/git命令/index.html","eb82198436d69853a33d5b8f70ef8da8"],["/tags/index.html","20e10aab275ab1c650c3bdd8d27efe4e"],["/tags/js知识/index.html","36963aee4f02b2e46a1e9ef2d76d2274"],["/tags/linux命令/index.html","223e69e962a81b6af0c7cacdfcec2199"],["/tags/pandas函数/index.html","0ff185801c665b0fac3fc613047f08bb"],["/tags/python编译器/index.html","89bcdb49f7aa0d36441e80e304b6778d"],["/tags/scrapy框架/index.html","6798a6842a94c1048b71964daee96d2f"],["/tags/协程知识/index.html","1f09e7d9a630cc20d4b9ad6547b04d29"],["/tags/基本知识点/index.html","d918be2c0d992dc1ce9bafd7554532ee"],["/tags/扩展知识/index.html","2ae48515c0af2f17d33476c2128123ea"],["/tags/排序算法/index.html","99208187cffc25f8c6c50af20806b055"],["/tags/数学知识/index.html","a3213528f64cc315b496a8abd6120ad3"],["/tags/数据可视化概念/index.html","299eb8df3bcf80e661f1d99d6a3e26b4"],["/tags/正则/index.html","bea447b657e13f18f576527b34b634fe"],["/tags/爬虫实践/index.html","e8b188fac0e8e0a39c29bcfe446a9603"],["/tags/线程概念/index.html","2c2fd73d8543e0bdce36093dffe76bc7"],["/tags/网站的基本概念/index.html","38ffada00c2742c5453d97cb39786cb5"],["/tags/网络编程/index.html","3ae9d7a6a7c391586e4372a0616fc283"],["/tags/装饰器/index.html","73084f21589ff65980fdf42f4f65a7dc"],["/tags/计算机知识/index.html","c818b78c8213ad08e214df0034eed46e"],["/tags/语音识别/index.html","27c1bdb29c7240494278db06630e2b1f"],["/tags/进程-线程-协程总结/index.html","683788c6537439e7ef0a4488e357a4c4"],["/tags/进程概念/index.html","339bb3a8e6ee824bda3fa6e08d35b2a1"],["/tags/进阶知识点/index.html","231f491f7beb726ac176d70c9d16d677"],["/tags/面向对象编程/index.html","4956911bab319119ee4c28b3e4cba95e"],["/tags/面试总结/index.html","584229bb2848b21889e1419f22ca4399"]];
var cacheName = 'sw-precache-v3--' + (self.registration ? self.registration.scope : '');
var firstRegister = 1; // 默认1是首次安装SW， 0是SW更新


var ignoreUrlParametersMatching = [/^utm_/];


var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
        url.pathname += index;
    }
    return url.toString();
};

var cleanResponse = function (originalResponse) {
    // 如果没有重定向响应，不需干啥
    if (!originalResponse.redirected) {
        return Promise.resolve(originalResponse);
    }

    // Firefox 50 及以下不知处 Response.body 流, 所以我们需要读取整个body以blob形式返回。
    var bodyPromise = 'body' in originalResponse ?
        Promise.resolve(originalResponse.body) :
        originalResponse.blob();

    return bodyPromise.then(function (body) {
        // new Response() 可同时支持 stream or Blob.
        return new Response(body, {
            headers: originalResponse.headers,
            status: originalResponse.status,
            statusText: originalResponse.statusText
        });
    });
};

var createCacheKey = function (originalUrl, paramName, paramValue,
    dontCacheBustUrlsMatching) {

    // 创建一个新的URL对象，避免影响原始URL
    var url = new URL(originalUrl);

    // 如果 dontCacheBustUrlsMatching 值没有设置，或是没有匹配到，将值拼接到url.serach后
    if (!dontCacheBustUrlsMatching ||
        !(url.pathname.match(dontCacheBustUrlsMatching))) {
        url.search += (url.search ? '&' : '') +
            encodeURIComponent(paramName) + '=' + encodeURIComponent(paramValue);
    }

    return url.toString();
};

var isPathWhitelisted = function (whitelist, absoluteUrlString) {
    // 如果 whitelist 是空数组，则认为全部都在白名单内
    if (whitelist.length === 0) {
        return true;
    }

    // 否则逐个匹配正则匹配并返回
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function (whitelistedPathRegex) {
        return path.match(whitelistedPathRegex);
    });
};

var stripIgnoredUrlParameters = function (originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);
    // 移除 hash; 查看 https://github.com/GoogleChrome/sw-precache/issues/290
    url.hash = '';

    url.search = url.search.slice(1) // 是否包含 '?'
        .split('&') // 分割成数组 'key=value' 的形式
        .map(function (kv) {
            return kv.split('='); // 分割每个 'key=value' 字符串成 [key, value] 形式
        })
        .filter(function (kv) {
            return ignoreUrlParametersMatching.every(function (ignoredRegex) {
                return !ignoredRegex.test(kv[0]); // 如果 key 没有匹配到任何忽略参数正则，就 Return true
            });
        })
        .map(function (kv) {
            return kv.join('='); // 重新把 [key, value] 格式转换为 'key=value' 字符串
        })
        .join('&'); // 将所有参数 'key=value' 以 '&' 拼接

    return url.toString();
};


var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
        url.pathname += index;
    }
    return url.toString();
};

var hashParamName = '_sw-precache';
var urlsToCacheKeys = new Map(
    precacheConfig.map(function (item) {
        var relativeUrl = item[0];
        var hash = item[1];
        var absoluteUrl = new URL(relativeUrl, self.location);
        var cacheKey = createCacheKey(absoluteUrl, hashParamName, hash, false);
        return [absoluteUrl.toString(), cacheKey];
    })
);

function setOfCachedUrls(cache) {
    return cache.keys().then(function (requests) {
        // 如果原cacheName中没有缓存任何收，就默认是首次安装，否则认为是SW更新
        if (requests && requests.length > 0) {
            firstRegister = 0; // SW更新
        }
        return requests.map(function (request) {
            return request.url;
        });
    }).then(function (urls) {
        return new Set(urls);
    });
}

self.addEventListener('install', function (event) {
    event.waitUntil(
        caches.open(cacheName).then(function (cache) {
            return setOfCachedUrls(cache).then(function (cachedUrls) {
                return Promise.all(
                    Array.from(urlsToCacheKeys.values()).map(function (cacheKey) {
                        // 如果缓存中没有匹配到cacheKey，添加进去
                        if (!cachedUrls.has(cacheKey)) {
                            var request = new Request(cacheKey, { credentials: 'same-origin' });
                            return fetch(request).then(function (response) {
                                // 只要返回200才能继续，否则直接抛错
                                if (!response.ok) {
                                    throw new Error('Request for ' + cacheKey + ' returned a ' +
                                        'response with status ' + response.status);
                                }

                                return cleanResponse(response).then(function (responseToCache) {
                                    return cache.put(cacheKey, responseToCache);
                                });
                            });
                        }
                    })
                );
            });
        })
            .then(function () {
            
            // 强制 SW 状态 installing -> activate
            return self.skipWaiting();
            
        })
    );
});

self.addEventListener('activate', function (event) {
    var setOfExpectedUrls = new Set(urlsToCacheKeys.values());

    event.waitUntil(
        caches.open(cacheName).then(function (cache) {
            return cache.keys().then(function (existingRequests) {
                return Promise.all(
                    existingRequests.map(function (existingRequest) {
                        // 删除原缓存中相同键值内容
                        if (!setOfExpectedUrls.has(existingRequest.url)) {
                            return cache.delete(existingRequest);
                        }
                    })
                );
            });
        }).then(function () {
            
            return self.clients.claim();
            
        }).then(function () {
                // 如果是首次安装 SW 时, 不发送更新消息（是否是首次安装，通过指定cacheName 中是否有缓存信息判断）
                // 如果不是首次安装，则是内容有更新，需要通知页面重载更新
                if (!firstRegister) {
                    return self.clients.matchAll()
                        .then(function (clients) {
                            if (clients && clients.length) {
                                clients.forEach(function (client) {
                                    client.postMessage('sw.update');
                                })
                            }
                        })
                }
            })
    );
});



    self.addEventListener('fetch', function (event) {
        if (event.request.method === 'GET') {

            // 是否应该 event.respondWith()，需要我们逐步的判断
            // 而且也方便了后期做特殊的特殊
            var shouldRespond;


            // 首先去除已配置的忽略参数及hash
            // 查看缓存简直中是否包含该请求，包含就将shouldRespond 设为true
            var url = stripIgnoredUrlParameters(event.request.url, ignoreUrlParametersMatching);
            shouldRespond = urlsToCacheKeys.has(url);

            // 如果 shouldRespond 是 false, 我们在url后默认增加 'index.html'
            // (或者是你在配置文件中自行配置的 directoryIndex 参数值)，继续查找缓存列表
            var directoryIndex = 'index.html';
            if (!shouldRespond && directoryIndex) {
                url = addDirectoryIndex(url, directoryIndex);
                shouldRespond = urlsToCacheKeys.has(url);
            }

            // 如果 shouldRespond 仍是 false，检查是否是navigation
            // request， 如果是的话，判断是否能与 navigateFallbackWhitelist 正则列表匹配
            var navigateFallback = '';
            if (!shouldRespond &&
                navigateFallback &&
                (event.request.mode === 'navigate') &&
                isPathWhitelisted([], event.request.url)
            ) {
                url = new URL(navigateFallback, self.location).toString();
                shouldRespond = urlsToCacheKeys.has(url);
            }

            // 如果 shouldRespond 被置为 true
            // 则 event.respondWith()匹配缓存返回结果，匹配不成就直接请求.
            if (shouldRespond) {
                event.respondWith(
                    caches.open(cacheName).then(function (cache) {
                        return cache.match(urlsToCacheKeys.get(url)).then(function (response) {
                            if (response) {
                                return response;
                            }
                            throw Error('The cached response that was expected is missing.');
                        });
                    }).catch(function (e) {
                        // 如果捕获到异常错误，直接返回 fetch() 请求资源
                        console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
                        return fetch(event.request);
                    })
                );
            }
        }
    });









/* eslint-enable */
