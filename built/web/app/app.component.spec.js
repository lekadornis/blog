System.register(['angular2/testing', 'angular2/http', 'angular2/core', 'rxjs/add/operator/map', 'rxjs/add/operator/toPromise', 'rxjs/Rx', './app.component', '../posts/posts.service'], function(exports_1) {
    var __extends = (this && this.__extends) || function (d, b) {
        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
    var testing_1, http_1, core_1, Rx_1, app_component_1, posts_service_1;
    var MockPostsService;
    return {
        setters:[
            function (testing_1_1) {
                testing_1 = testing_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (_1) {},
            function (_2) {},
            function (Rx_1_1) {
                Rx_1 = Rx_1_1;
            },
            function (app_component_1_1) {
                app_component_1 = app_component_1_1;
            },
            function (posts_service_1_1) {
                posts_service_1 = posts_service_1_1;
            }],
        execute: function() {
            MockPostsService = (function (_super) {
                __extends(MockPostsService, _super);
                function MockPostsService() {
                    _super.apply(this, arguments);
                }
                MockPostsService.prototype.getPosts = function () {
                    return Rx_1.Observable.of(new Object()).map(function (posts) { return [
                        { "title": "Title 1 mocked", "content": "Text 1" },
                        { "title": "Title 2 mocked", "content": "Text 2" }
                    ]; });
                };
                return MockPostsService;
            })(posts_service_1.PostsService);
            testing_1.describe('AppComponent', function () {
                testing_1.beforeEachProviders(function () { return [
                    core_1.provide(posts_service_1.PostsService, { useClass: MockPostsService }),
                    app_component_1.AppComponent,
                    http_1.HTTP_PROVIDERS
                ]; });
                testing_1.it('should have a title defined', function () {
                    var app = new app_component_1.AppComponent(null);
                    testing_1.expect(app.title).toBeDefined();
                });
                testing_1.it('posts service should return posts', testing_1.injectAsync([app_component_1.AppComponent], function (service) {
                    return service.getPosts().toPromise().then(function (posts) {
                        testing_1.expect(posts.length).toBeGreaterThan(1);
                    });
                }));
            });
        }
    }
});
//# sourceMappingURL=app.component.spec.js.map