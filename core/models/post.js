'use strict';

var mongoose = require(process.cwd() + '/core/dbConnection');

var schema = new mongoose.Schema({
    title: 'string',
    content: 'string',
    date: 'string',
    url: 'string',
});

var post = mongoose.model('posts', schema);

module.exports = post;