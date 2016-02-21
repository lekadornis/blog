'use strict';

var post = require(process.cwd() + '/core/models/post'),
    posts = {
        getAll: function () {
            return post.find({}).exec();
        }
    };

module.exports = posts;