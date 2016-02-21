'use strict';

var requester = require(process.cwd() + '/lib/requester/requester');

var home = {
    index: function (request, response) {
        response.sendFile(requester.resolve('/web/views/index.html'));
    },
    unitTests: function (request, response) {
        response.sendFile(requester.resolve('/web/views/unit-tests.html'));
    }
};

module.exports = home;