'use strict';

var postsRepo = require(process.cwd() + '/core/repositories/posts');

var api = {
    getPosts: function (request, response) {
        postsRepo.getAll().then(function(posts) {
            posts.forEach(function(post){
                var isoDate = new Date(post.date);
                post.date = isoDate.toISOString().substr(0,10);
            });
            response.json(posts);
        });
    }
};

module.exports = api;