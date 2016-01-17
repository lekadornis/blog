'use strict';

var requester = require(process.cwd() + '/lib/requester/requester');

var tests = {
    index: function (request, response) {
        response.sendFile(requester.resolve('/tests/angular/unit-tests.html'));
    }
};

module.exports = tests;