'use strict';

var mongoose = require(process.cwd() + '/core/dbConnection');

var post = mongoose.model('posts', {
        title: {
            title: String,
            content: String
        }
    });

module.exports = post;