'use strict';

var postsRepo = require(process.cwd() + '/core/repositories/posts');

var api = {
    getPosts: function (request, response) {
        postsRepo.getAll().then(function(posts) {
            response.json(posts);
        });
    }
};

module.exports = api;