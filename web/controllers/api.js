'use strict';

var requester = require(process.cwd() + '/lib/requester/requester');

var api = {
    getPosts: function (request, response) {
        response.sendFile(requester.resolve('/web/controllers/fakePosts.json'));
    }
};

module.exports = api;