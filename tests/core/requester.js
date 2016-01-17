'use strict';

var requester = require(__dirname + '/../../lib/requester/requester'),
    path = require('path'),
    requesterTest = {
        resolve : function (nodeUnit) {
            requester.processDir = __dirname + '/../';
            var pathToResolve = '/web/views/home.html';
            var pathResolved = requester.resolve(pathToResolve);
            var pathExpected = path.resolve(requester.processDir + pathToResolve);
            nodeUnit.expect(1);
            nodeUnit.ok(
                pathResolved === pathExpected,
                'The path resolved should be equal to the path expected'
            );
            nodeUnit.done();
        },
        requireNodeModule : function (nodeUnit) {
            var express = requester.require('express');
            nodeUnit.expect(1);
            nodeUnit.equals(typeof express(), 'function');
            nodeUnit.done();
        },
        requireCustomModule : function (nodeUnit) {
            var module_name = '/../../lib/requester/requester';
            var customModule = requester.require(__dirname + module_name);
            nodeUnit.expect(1);
            nodeUnit.ok(
                customModule.hasOwnProperty('processDir'),
                'The requester did not returned the module'
            );
            nodeUnit.done();
        }
    };

module.exports.requester = requesterTest;