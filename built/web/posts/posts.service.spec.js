System.register(['./posts.service'], function(exports_1) {
    var posts_service_1;
    return {
        setters:[
            function (posts_service_1_1) {
                posts_service_1 = posts_service_1_1;
            }],
        execute: function() {
            describe('Posts Service', function () {
                beforeEach(function () {
                    this.postsService = new posts_service_1.PostsService();
                });
                it('should return posts', function (done) {
                    this.postsService.getPosts().then(function (posts) {
                        expect(posts.length).toBeGreaterThan(1);
                        done();
                    });
                });
            });
        }
    }
});
//# sourceMappingURL=posts.service.spec.js.map