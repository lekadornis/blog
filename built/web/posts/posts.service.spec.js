System.register(['./posts.service'], function(exports_1) {
    var posts_service_1;
    return {
        setters:[
            function (posts_service_1_1) {
                posts_service_1 = posts_service_1_1;
            }],
        execute: function() {
            describe('Posts Service', function () {
                it('return posts', function (done) {
                    var postsService = new posts_service_1.PostsService();
                    postsService.getPosts().then(function (posts) {
                        expect(posts.length).toBeGreaterThan(1);
                        done();
                    });
                });
            });
        }
    }
});
