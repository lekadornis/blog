'use strict';

var requester = require(process.cwd() + '/lib/requester/requester');

var home = {
    index: function (request, response) {
        response.sendFile(requester.resolve('/web/views/home/index.html'));
    }
};

module.exports = home;