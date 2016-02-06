System.register(['./mock-posts'], function(exports_1) {
    var mock_posts_1;
    var PostsService;
    return {
        setters:[
            function (mock_posts_1_1) {
                mock_posts_1 = mock_posts_1_1;
            }],
        execute: function() {
            PostsService = (function () {
                function PostsService() {
                }
                PostsService.prototype.getPosts = function () {
                    return Promise.resolve(mock_posts_1.POSTS);
                };
                return PostsService;
            })();
            exports_1("PostsService", PostsService);
        }
    }
});
