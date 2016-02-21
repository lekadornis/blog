'use strict';

var requester = require(process.cwd() + '/lib/requester/requester');

var home = {
    unitTests: function (request, response) {
        response.sendFile(requester.resolve('/web/views/tests/unit-tests.html'));
    }
};

module.exports = home;