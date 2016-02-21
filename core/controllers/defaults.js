'use strict';

var requester = require(process.cwd() + '/lib/requester/requester');

var defaults = {
    notFound: function (request, response) {
        response.status(404).sendFile(requester.resolve('/web/views/404.html'));
    }
};

module.exports = defaults;