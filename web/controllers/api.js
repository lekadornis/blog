'use strict';

var requester = require(process.cwd() + '/lib/requester/requester');

var api = {
    getPosts: function (request, response) {
        response.sendFile(requester.resolve('/web/controllers/getPosts.json'));
    }
};

module.exports = api;