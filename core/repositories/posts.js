'use strict';

var post = require(process.cwd() + '/core/models/post'),
    posts = {
        getAll: function () {
            return post.find({}).sort({date: -1}).exec();
        },
        getPostByUrl: function(url) {
            return post.find({url: url}).sort({date: -1}).exec();
        }
    };

module.exports = posts;