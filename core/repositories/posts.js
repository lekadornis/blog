'use strict';

var post = require(process.cwd() + '/core/models/post'),
    posts = {
        getAll: function () {
            return post.find({}).sort({date: -1}).exec();
        }
    };

module.exports = posts;