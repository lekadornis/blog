System.register(['angular2/testing', 'angular2/http', './posts.service'], function(exports_1) {
    var testing_1, http_1, posts_service_1;
    return {
        setters:[
            function (testing_1_1) {
                testing_1 = testing_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (posts_service_1_1) {
                posts_service_1 = posts_service_1_1;
            }],
        execute: function() {
            testing_1.describe('Posts Service', function () {
                testing_1.beforeEachProviders(function () { return [
                    posts_service_1.PostsService,
                    http_1.HTTP_PROVIDERS
                ]; });
                testing_1.it('should return posts', testing_1.injectAsync([posts_service_1.PostsService], function (service) {
                    return service.getPosts().toPromise().then(function (posts) {
                        testing_1.expect(posts.length).toBeGreaterThan(1);
                    });
                }));
            });
        }
    }
});
//# sourceMappingURL=posts.service.spec.js.map