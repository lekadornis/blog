'use strict';

var post = require(process.cwd() + '/core/models/post'),
    posts = {
        getPosts: function(conditions) {
            return post.find(conditions).sort({date: -1}).exec();
        }
    };

module.exports = posts;