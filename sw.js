/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2019/06/23/linux常用命令/index.html","320a6a5f472dcbf8af0a35ce1b7cc1d3"],["/2019/06/26/four/index.html","6d004167691a05258ca43579635f38be"],["/2019/06/26/python解释器介绍/index.html","ea749d116c41fa769cdc05d668ac6b7b"],["/2019/06/29/算法时间复杂度和五大经典排序算法/index.html","079c2cab89e3695d53073b40200c400b"],["/2019/07/06/网站概念/index.html","7ff5b90d46ca8063c5ba44c9ac166833"],["/2019/07/11/数据可视化笔记/index.html","cdba24bdbd5cd9491f3331e5e93c9c67"],["/2019/07/12/语音识别/index.html","caa75a92e859bffae9d2c5bd16bea71c"],["/2019/07/14/hadoop基本概念介绍/index.html","37165da91c3368ee3b146bc98bbb57d0"],["/2019/07/14/数据科学笔记/index.html","28cafca5da86ad3762f07ae692de370b"],["/2019/07/22/python爬虫/index.html","27a283ca316807ac7c88c2e0dedce62c"],["/2019/08/25/pandas函数/index.html","284631d1671e2ccac6ee417905567848"],["/2019/09/18/计算机系统组成及工作原理简介/index.html","c58cfa65f383c55684fbf43b787ee0d3"],["/2019/09/30/C 语言中 void 详解及应用/index.html","f3bd1755ebd01f7886125c7f86a75138"],["/2019/09/30/第一次面试总结/index.html","bc41bba61f63d69258fecada61e1cce0"],["/2019/10/07/django之url规则/index.html","ef203b27ec1211ec056b90bc78725f62"],["/2019/10/07/django配置初启/index.html","eb6b85ea1d12db2883416dfde12fe908"],["/2019/10/13/C语言笔记1/index.html","a71987c2bab65786a89895a377f063af"],["/2019/10/13/C语言笔记2/index.html","9390023c3e04f2c5c359124294bf6d4c"],["/2019/10/19/C语言打包技艺/index.html","1933a4667768275950a26cee7e0f7d9e"],["/2019/10/22/c语言笔记3/index.html","834d193fb63df8e42729a4f222e279d9"],["/2019/10/27/IP代理池/index.html","a7c9849eec4711c492c3df25d63e9974"],["/2019/10/28/git命令/index.html","9e9ec9431591f77f0ce4a618fd79d9b3"],["/2019/10/31/斗鱼弹幕抓取/index.html","9db1f8bbff4ff35b6f6de06a3051cccf"],["/2019/11/13/多线程/index.html","a4bb73b4a77a6e8d7575804b4676a74f"],["/2019/11/14/多进程/index.html","09ee9e3c053719a4702471bf3ef635fa"],["/2019/11/15/python类的私有属性和私有方法/index.html","f40cb076236fc9792a6d395e2fd77857"],["/2019/11/16/协程/index.html","35e74d32da91607fecebec534edabe4e"],["/2019/11/16/进程,线程,协程对比/index.html","443d8f60be84c1e8c0121e924348c989"],["/2019/11/17/GIL锁/index.html","9b0665b4f5544a16446d9b94cd72d19e"],["/2019/11/17/闭包和装饰器/index.html","13dd4c513c9a82442a4f7a8759489b77"],["/2019/11/19/Python进阶知识点/index.html","bb32d6f01d200c779be9c48ae9776b3b"],["/2019/11/22/京东全网爬虫/index.html","58ff50898e2b23144d8c9d90887c4ade"],["/2019/11/23/JavaScript的简介和基本知识/index.html","6c45644a1fd5ed11a3901cb1a07e5dea"],["/2019/12/04/README/index.html","874ec05652088dd412636bb4531c0964"],["/2019/12/04/java简介/index.html","c29b09bb0f1ef956e853e1e441043bc5"],["/2019/12/11/java基本知识/index.html","03a7b40c5dea63a5ff925432b26d220c"],["/2019/12/17/Java面向对象/index.html","54492978c9d8dc38e032efdfe17abb8a"],["/2019/12/19/面试总结/index.html","f2ec8aea8399d16299f14969f5205eb7"],["/2019/12/20/SQL性能调优/index.html","6320f4b3902a2865f6a8b56a803e41f4"],["/2019/12/26/vue框架介绍/index.html","f0f35bfa60f9218e264900ef1e9c79d2"],["/2020/01/02/12306自动抢票/index.html","81c7ba1cca79ada4f06aff491f1df8d7"],["/2020/02/24/flask框架/index.html","85fc5d7bd953120369be99f1aba99f6c"],["/2020/02/28/docker以及相关概念介绍/index.html","33634455387a07f7b4edfbf8ce9aaa3e"],["/2020/04/05/python数据类型的底层实现/index.html","a218921aeec3eb93f4b239d511c55529"],["/about/index.html","c87ffa1f0615867195c028c074419d23"],["/archives/2019/06/index.html","8f589a1ac11df29b4e088cedb84e43af"],["/archives/2019/07/index.html","7ae15b6c5b974f0f50712e4348b69614"],["/archives/2019/08/index.html","98f8bfe0322725e7b7af424aeff2ab12"],["/archives/2019/09/index.html","090df16118df462a00092e6f7a36e489"],["/archives/2019/10/index.html","3b71c96d0abfce550f44f9f8086d485e"],["/archives/2019/11/index.html","6bd52f32035600ac620c3993efccf5ca"],["/archives/2019/12/index.html","9ae650a7d5da5a2eadeb8fea4cc371b6"],["/archives/2019/index.html","3c78ce21d06465f39770d2dc64d608ec"],["/archives/2019/page/2/index.html","59bb22c08b28f7b4f02e8b4b9eeeb01b"],["/archives/2019/page/3/index.html","1e4c6c2bcda02bb3f244990b5fe9f399"],["/archives/2019/page/4/index.html","39d5cef6c30d56cdd9fac6c54a36e5bd"],["/archives/2020/01/index.html","af47c058625690a08fce230de481a4d8"],["/archives/2020/02/index.html","7dc7e95da1c2c70a317f068e9c3d9f9a"],["/archives/2020/04/index.html","7537aafb621787057a9c3b811f2b9d6a"],["/archives/2020/index.html","c88bb2b37960af6242eb30830b4d5f10"],["/archives/index.html","fc6883728bc5047fbcb9c2a18371dd09"],["/archives/page/2/index.html","5081e90dc489bec1b2c076bd7645b404"],["/archives/page/3/index.html","da69fb7db77268d7d144c8e5257b74ef"],["/archives/page/4/index.html","52e2ba4e858271efc083de07ac852b14"],["/archives/page/5/index.html","c3200bd5515c728082a5c9634ad3e2cb"],["/categories/C语言编程知识/index.html","055b9071138ad000a0912b5dbc363105"],["/categories/Hadoop/index.html","9380d1a784dd624b8c37fe6200c0a0e4"],["/categories/JavaScript/index.html","de00b1f22384763cb478667a89328a6a"],["/categories/Java学习/index.html","861a622cb67d2ce6ebe1a07cf7ea9069"],["/categories/Linux/index.html","8b49a24fcf9de213829ce1589c1fb563"],["/categories/Linux/常用命令/index.html","06ac9143c8772145eb3beb4ff61c4034"],["/categories/SQL知识/index.html","eb0a21d1cff6676bce09d0993129465e"],["/categories/docker/index.html","6da40f3dcfb7f3a01ba65a2465886622"],["/categories/git/index.html","9708a0c18977720743ea09cc2b0dee0a"],["/categories/index.html","5ec2443b3910a2d0407c6ef57b4c737b"],["/categories/python/index.html","4ba670098a28d4733838504dbb7f0836"],["/categories/python数据挖掘/index.html","15cbf65c05a22686686fcec5de3f8355"],["/categories/python爬虫/index.html","a2277b022c1cfab3cba60b05a59e594b"],["/categories/python的web框架/index.html","7b6a3df069a6ebc4050377a20d339343"],["/categories/python编程/index.html","4761bb949ede59fbc3501a7bffe6413b"],["/categories/python编程/page/2/index.html","416a521f52a391c129500a87493b5f0a"],["/categories/selenium知识/index.html","a12a22ca169e91e16dbcad6e6697ef31"],["/categories/个人随感/index.html","14c1ed4f3132948c5a377a4268359841"],["/categories/前端学习/index.html","396f68f7f5b85a6fd55664c05ed2644e"],["/categories/数据可视化/index.html","03805534e919ec98fca03f37a7b4d65f"],["/categories/正则表达式/index.html","530866efdfce725ae95b3a61a9f5f579"],["/categories/算法/index.html","fb297b6deb0e5b015ac59cf0af24db26"],["/categories/算法/五大经典排序/index.html","d418039afa5da70336411a4958f48740"],["/categories/统计学和概率论/index.html","a6b2669a0b4ad6b417411a71cd43d375"],["/categories/网站知识/index.html","4f34aba35687e058d42e55e8c7f3235d"],["/categories/计算机组成原理/index.html","06f6fe042bd107b3416c060baa17048f"],["/categories/面试经历/index.html","b1280b3d821dc2d270730afde679890b"],["/css/blog-encrypt.css","ee21c7086a59d52b97a9e7b6240a9414"],["/css/main.css","49c3618c147a8fe395f05c65c60100cd"],["/images/Connection.jpg","ec8ea9576b5bea305dca385e5ee015b9"],["/images/L.png","5b9f0833c5fe389b0a9dd51a7b5fe8af"],["/images/algolia_logo.svg","f36be37cfbfc4be962c64f77a88f4b9c"],["/images/apple-touch-icon-next.png","5bcbd18f4de3fa448e0451b020974c18"],["/images/avatar.gif","9c4e9538f89645d5727963406b9f654e"],["/images/avatar.jpg","6a316b02e75ff203cd82c92a6712c612"],["/images/background.jpg","22c9e0f56413298026f616c1a1970407"],["/images/cc-by-nc-nd.svg","8c638e2dc177ddd532eeafcf162ccfa8"],["/images/cc-by-nc-sa.svg","b8a36088bf9d955e416c825e8bcf4dce"],["/images/cc-by-nc.svg","ff4868707d40da0cbc265bfe59b93c94"],["/images/cc-by-nd.svg","301d1c1bda72b509535069fb391241d0"],["/images/cc-by-sa.svg","f9d1c4e33b968afd1381b20600563f97"],["/images/cc-by.svg","ada77ae07aa07f33589e59e9f879444f"],["/images/cc-zero.svg","dce4253fc5dc8e14809150f8bf005ca9"],["/images/favicon-16x16-next.png","67571b40a8fa60b6e958359865aadde3"],["/images/favicon-32x32-next.png","f75654852b07d2ada50958e586a249c8"],["/images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/logo.svg","f03b0e22cbc928510759ed57f2fc1543"],["/images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/quote-l.svg","83c99047e96610cae83fe2c9fe00eaa7"],["/images/quote-r.svg","aea6c9a4bfe07787cd0193dee2228bd8"],["/images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["/images/weixin.jpg","4a0144268440d9d5574735c14974cf55"],["/index.html","5583c1e00630c2463fb3ea8e94390bed"],["/js/src/affix.js","683c19859764baf0d17538897ea1eba2"],["/js/src/algolia-search.js","f5fa392318805997089ceb3a925979ba"],["/js/src/bootstrap.js","2a1083772854ae2663748e0a25c17285"],["/js/src/clickLove.js","7bcfdb57debd43483174cf9e15ab37cc"],["/js/src/exturl.js","2b444179b3145e5007b4d371dac07cd3"],["/js/src/hook-duoshuo.js","45997b0c06abff3cd88efd901f614065"],["/js/src/instantclick.min.js","865d92a4a07409b7fed739e6a108e9c4"],["/js/src/js.cookie.js","6e9eb1f53afb135aedaf90739c867738"],["/js/src/motion.js","0f6add86607c451269d0b3d286c84d8b"],["/js/src/post-details.js","b8e8e27c27c697567879c52888ffc24c"],["/js/src/schemes/pisces.js","827b5ad25e1142277c1e7dfe0cacebe5"],["/js/src/scroll-cookie.js","890406ae3539e4721ef5f314542e5e46"],["/js/src/scrollspy.js","fafdd7ab6af233b701506c733910b7f5"],["/js/src/utils.js","24512c3455f976730b7bf75e1222c533"],["/lib/Han/dist/font/han-space.woff","b09f2dd7d3ad8ad07f3b8495133909d9"],["/lib/Han/dist/font/han.woff","e841c6b547bc06a06f60f4de52bf906e"],["/lib/Han/dist/han.css","7edb5521bc5732846dec0f1561f58422"],["/lib/Han/dist/han.js","575b6c1667c01798730fbd972e959c9c"],["/lib/Han/dist/han.min.css","cab466d758269b437167422c4a16b364"],["/lib/Han/dist/han.min.js","96482c9c2b3c5ea9bf5a40db162c7f34"],["/lib/algolia-instant-search/instantsearch.min.css","029a13b44e6807955106ff3c075a02f9"],["/lib/algolia-instant-search/instantsearch.min.js","0db46eba0c8133693ee839507b1612f2"],["/lib/blog-encrypt.js","3ae8437d6308ad7de3234910f430c7be"],["/lib/canvas-nest/canvas-nest.min.js","36e103d2a05bc706bac40f9ab8881eb7"],["/lib/canvas-ribbon/canvas-ribbon.js","16dc214240913551986593808c2efcfc"],["/lib/fancybox/source/blank.gif","325472601571f31e1bf00674c368d335"],["/lib/fancybox/source/fancybox_loading.gif","e14dca13d1d24c7cdf89f8c7b20d57dc"],["/lib/fancybox/source/fancybox_loading@2x.gif","5bafaeb221caf96cf68f94654d2e19a7"],["/lib/fancybox/source/fancybox_overlay.png","cbc2440151b716f07d1c90c7f3ed646c"],["/lib/fancybox/source/fancybox_sprite.png","783d4031fe50c3d83c960911e1fbc705"],["/lib/fancybox/source/fancybox_sprite@2x.png","8784554156c6f95c6acafffc92b38013"],["/lib/fancybox/source/helpers/fancybox_buttons.png","b448080f8615e664b7788c7003803b59"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.css","990b91c524c7b760d505c1eb7304ade6"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.js","f53c246661fb995a3f12e67fa38e0fa0"],["/lib/fancybox/source/helpers/jquery.fancybox-media.js","c017067f48d97ec4a077ccdf056e6a2e"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.css","5133d80120a238ef7fa4cbe43e8b9f02"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.js","cf1fc1df534eede4cb460c5cbd71aba6"],["/lib/fancybox/source/jquery.fancybox.css","03030c16e028ea1565d08f68c30f4602"],["/lib/fancybox/source/jquery.fancybox.js","921e9cb04ad6e2559869ec845c5be39b"],["/lib/fancybox/source/jquery.fancybox.pack.js","cc9e759f24ba773aeef8a131889d3728"],["/lib/fastclick/README.html","48d3ce1486e29d3deddb94099931262c"],["/lib/fastclick/lib/fastclick.js","6e9d3b0da74f2a4a7042b494cdaa7c2e"],["/lib/fastclick/lib/fastclick.min.js","a0fc6c24d1f3ff9ac281887c92b24acd"],["/lib/font-awesome/css/font-awesome.css","c97c3824a8d6c5eb936727310d68fe87"],["/lib/font-awesome/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["/lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/lib/font-awesome/fonts/fontawesome-webfont.svg","677433a0892aaed7b7d2628c313c9775"],["/lib/font-awesome/fonts/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["/lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/lib/jquery/index.js","32015dd42e9582a80a84736f5d9a44d7"],["/lib/jquery_lazyload/CONTRIBUTING.html","c94b7dd8654a2fc32e2e29e0895ee447"],["/lib/jquery_lazyload/README.html","96334ebaad968dbf1f02bf5b225dd5b4"],["/lib/jquery_lazyload/jquery.lazyload.js","8b427f9e86864ee3aaf1ae33e6e14263"],["/lib/jquery_lazyload/jquery.scrollstop.js","f163fd8f02361928853668a96f8a1249"],["/lib/needsharebutton/font-embedded.css","5320559b810d99adbb088f5cb423e50d"],["/lib/needsharebutton/needsharebutton.css","d41d8cd98f00b204e9800998ecf8427e"],["/lib/needsharebutton/needsharebutton.js","6c6f855f7d50f4bc3c804f52b03bbfbb"],["/lib/pace/pace-theme-barber-shop.min.css","e8dc66cf2d88abc25fbc89b8a0529abb"],["/lib/pace/pace-theme-big-counter.min.css","db2b8fe31e60f19021545277d2f6e05e"],["/lib/pace/pace-theme-bounce.min.css","ad954aa0bace4b213eeb19d6e89a0bda"],["/lib/pace/pace-theme-center-atom.min.css","8f6bc803acefc6f93afc98fb38201456"],["/lib/pace/pace-theme-center-circle.min.css","93c72298781226a80a9c66b27b21a57d"],["/lib/pace/pace-theme-center-radar.min.css","f0099bdd1cd42e9476bd7abc417c0328"],["/lib/pace/pace-theme-center-simple.min.css","eddff4756dbf21dbbff1c543bd894dde"],["/lib/pace/pace-theme-corner-indicator.min.css","776826157cb28ac1ee5e78771292b9ba"],["/lib/pace/pace-theme-fill-left.min.css","965859b39001da08e1e92327fe3d8e12"],["/lib/pace/pace-theme-flash.min.css","aab39b436e1fa0fdc51df06f2d53c38a"],["/lib/pace/pace-theme-loading-bar.min.css","4e05877f1f9efb9c1e7dd75cb78c764f"],["/lib/pace/pace-theme-mac-osx.min.css","29ae030ceaa8158352c5472218375b91"],["/lib/pace/pace-theme-minimal.min.css","f48f04d370993b55a2745e548cc82743"],["/lib/pace/pace.min.js","24d2d5e3e331c4efa3cda1e1851b31a7"],["/lib/three/canvas_lines.min.js","1324174ae6190fbf63b7bf0ad0a8a5bd"],["/lib/three/canvas_sphere.min.js","5c6bc45b137448b5b9df152ccfb2659c"],["/lib/three/three-waves.min.js","41059bd5e5c7aa520b1b411919e5121f"],["/lib/three/three.min.js","3298078bce82bdb1afadf5b1a280915e"],["/lib/ua-parser-js/dist/ua-parser.min.js","a6e833266c4b41fabb9ba94a145322d8"],["/lib/ua-parser-js/dist/ua-parser.pack.js","6b627e4d61a7135952824bb9c1a4a134"],["/lib/velocity/velocity.js","0361fa6dcf4cf4d19c593cdab0937dd0"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.js","f55d22cc592c9f8d4ffd3b41a6b90081"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/live2dw/lib/L2Dwidget.0.min.js","32973883fcac0a9ae6cc79c0ea25fda2"],["/live2dw/lib/L2Dwidget.min.js","094cbace49a39548bed64abff5988b05"],["/page/2/index.html","0a10f4d0e53ad22ba68edc45ce1dabd8"],["/page/3/index.html","7d3ea49291002e59559e3d3b623661b5"],["/page/4/index.html","0be7960ddc7f72c5b5031d77d7724fa4"],["/page/5/index.html","2a09c0f81d3dbd2705c08430a12dc074"],["/sw-register.js","9c90debf06ac3e700a70c30a42debd43"],["/tags/Django/index.html","38b439d7bab066d97f0e6dfb7fbc26d5"],["/tags/GIL锁/index.html","51add7f7a58c50453acd1610fd5928ff"],["/tags/Hadoop介绍/index.html","5aec54fd24300971a12ea0128fa71f97"],["/tags/Java基本知识点/index.html","b36eba8193573c75ce4d297dbd1eab44"],["/tags/SQL调优/index.html","cfea837f1a8822ca07a74282833f3837"],["/tags/Void-知识点/index.html","810034f45995bf1c0dc92794550e6f60"],["/tags/Vue框架/index.html","c49f45fc6c54a13af913cfa33f74fedf"],["/tags/docker知识/index.html","f342577fe2cc23618f1afaec1179c300"],["/tags/flask/index.html","1571b27810277dc2a05f242972bdfea5"],["/tags/git命令/index.html","830e2bbd942f8a4580f07e92ed31fe30"],["/tags/index.html","5aeb4cb2e96dadaa57b68b7c72d13067"],["/tags/js知识/index.html","0556c70774042493592a90ba770797d2"],["/tags/linux命令/index.html","12df8aaa5e3e82b9ee1732c2d1f2df14"],["/tags/pandas函数/index.html","906a6f59e30fd332f248aefcb0ddaf8f"],["/tags/python编译器/index.html","9f3ff80176407db851e97c6f845d7ed8"],["/tags/python进阶/index.html","87d70f048f0fa8db287376e8ef062bf3"],["/tags/scrapy框架/index.html","de0360d7402d43d90a77aadd9ec1fe8d"],["/tags/selenium/index.html","6070b720a02146b066933864949e1928"],["/tags/协程知识/index.html","6dbb06c2d2fc5f40ce624757e00e0de3"],["/tags/基本知识点/index.html","3c55e6366ffa6c02536208d60cb8568d"],["/tags/扩展知识/index.html","17711a4eeac1f6e44143a3d3228657d5"],["/tags/排序算法/index.html","c14fc4dfb0ad532c6f053a89afdc3107"],["/tags/数学知识/index.html","5f7449e70cd6c608b869d62bf4b29c5c"],["/tags/数据可视化概念/index.html","9016fe4c2e09b29b25356dbf8b76805e"],["/tags/正则/index.html","63f0799f9548e43eecc9de26f49e98eb"],["/tags/爬虫实践/index.html","8a3c87b7c5ce40ac1cffe329d894ed57"],["/tags/线程概念/index.html","283e83aac2787efe2df29f67cf6d7c86"],["/tags/网站的基本概念/index.html","256a21e0f43ba0447f633b13d20d1f1b"],["/tags/网络编程/index.html","4f8c571bce79f6edd0116c89100d0923"],["/tags/装饰器/index.html","1a7de95b3127063e4d91df2b2648118a"],["/tags/计算机知识/index.html","e99147d80fffbfe29115eced1c11c68d"],["/tags/语音识别/index.html","b5dc953043102551c1af2eecc56b0237"],["/tags/进程-线程-协程总结/index.html","e38f825e33955fccb5aa50b3f07aa869"],["/tags/进程概念/index.html","4632b637a0bc0dc7422ba88b61f10bd8"],["/tags/进阶知识点/index.html","94203d951ba494ffc345a67acd5ccb4f"],["/tags/面向对象编程/index.html","5a8631325a761ca10fb2db41d227b15c"],["/tags/面试总结/index.html","d8016d93d5f35e00257d4eb5a2e59642"]];
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
