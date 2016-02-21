'use strict';

var mongoose = require('mongoose'),
    connection_string = '127.0.0.1:27017/posts';
    
if (process.env.OPENSHIFT_MONGODB_DB_PASSWORD) {
    connection_string = 
        process.env.OPENSHIFT_MONGODB_DB_USERNAME + ":" +
        process.env.OPENSHIFT_MONGODB_DB_PASSWORD + "@" +
        process.env.OPENSHIFT_MONGODB_DB_HOST + ':' +
        process.env.OPENSHIFT_MONGODB_DB_PORT + '/' +
        process.env.OPENSHIFT_APP_NAME;
}

mongoose.connect(connection_string);

module.exports = mongoose;