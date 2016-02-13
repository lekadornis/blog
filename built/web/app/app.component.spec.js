System.register(['angular2/testing', './app.component', '../posts/posts.service'], function(exports_1) {
    var testing_1, app_component_1, posts_service_1;
    return {
        setters:[
            function (testing_1_1) {
                testing_1 = testing_1_1;
            },
            function (app_component_1_1) {
                app_component_1 = app_component_1_1;
            },
            function (posts_service_1_1) {
                posts_service_1 = posts_service_1_1;
            }],
        execute: function() {
            testing_1.describe('AppComponent', function () {
                testing_1.beforeEachProviders(function () { return [posts_service_1.PostsService, app_component_1.AppComponent]; });
                testing_1.it('should have title property', function () {
                    var app = new app_component_1.AppComponent();
                    testing_1.expect(app.title).toEqual('One on a tower');
                });
                testing_1.it('posts service should return posts', testing_1.injectAsync([app_component_1.AppComponent], function (service) {
                    return service.getPosts().then(function (posts) {
                        testing_1.expect(posts.length).toBeGreaterThan(1);
                    });
                }));
            });
        }
    }
});
//# sourceMappingURL=app.component.spec.js.map