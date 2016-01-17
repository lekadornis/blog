'use strict';

var path_module = require('path'),
    requester = {
        processDir: process.cwd(),
        resolve: function (path) {
            return path_module.resolve(this.processDir + path);
        },
        require: function (path) {
            try {
                if (require.resolve(path)) {
                    return require(path);
                }
            } catch (e) {
                return require(this.resolve(path));
            }
        }
    };
 
module.exports = requester;