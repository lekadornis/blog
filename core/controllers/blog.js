'use strict';

var requester = require(process.cwd() + '/lib/requester/requester');

var blog = {
    index: function (request, response) {
        response.sendFile(requester.resolve('/web/views/blog/index.html'));
    }
};

module.exports = blog;