'use strict';

var postsRepo = require(process.cwd() + '/core/repositories/posts');

var api = {
    getPosts: function (request, response) {
        var host = request.protocol + '://' + request.get('host');
        postsRepo.getPosts(request.params).then(function(posts) {
            posts.forEach(function(post){
                var isoDate = new Date(post.date);
                post.date = isoDate.toISOString().substr(0,10);
                post.url = host + '/' + post.date.replace(/-/g,'/') + '/' + post.url;
            });
            response.json(posts);
        });
    }
};

module.exports = api;