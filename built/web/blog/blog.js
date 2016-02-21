System.register(['angular2/platform/browser', './blog.component'], function(exports_1) {
    var browser_1, blog_component_1;
    return {
        setters:[
            function (browser_1_1) {
                browser_1 = browser_1_1;
            },
            function (blog_component_1_1) {
                blog_component_1 = blog_component_1_1;
            }],
        execute: function() {
            //enableProdMode();
            browser_1.bootstrap(blog_component_1.BlogComponent);
        }
    }
});
//# sourceMappingURL=blog.js.map