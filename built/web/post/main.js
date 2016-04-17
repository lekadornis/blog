System.register(['angular2/platform/browser', 'angular2/core', './post.component'], function(exports_1) {
    var browser_1, core_1, post_component_1;
    return {
        setters:[
            function (browser_1_1) {
                browser_1 = browser_1_1;
            },
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (post_component_1_1) {
                post_component_1 = post_component_1_1;
            }],
        execute: function() {
            core_1.enableProdMode();
            browser_1.bootstrap(post_component_1.PostComponent);
        }
    }
});
//# sourceMappingURL=main.js.map