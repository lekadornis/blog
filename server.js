'use strict';

var express = require('express'),
    webApp = express(),
    homeController = require(process.cwd() + '/core/controllers/home'),
    testsController = require(process.cwd() + '/core/controllers/tests'),
    blogController = require(process.cwd() + '/core/controllers/blog'),
    apiController = require(process.cwd() + '/core/controllers/api'),
    defaultsController = require(process.cwd() + '/core/controllers/defaults'),
    path = require('path');

var server = {
    createRoutes : function () {
        webApp.use('/node_modules', express.static(
            path.resolve('node_modules')
        ));
        webApp.use('/views', express.static(
            path.resolve('web/views')
        ));
        webApp.use('/styles', express.static(
            path.resolve('web/styles')
        ));
        webApp.use('/app', express.static(
            path.resolve('built/web/app')
        ));
        webApp.use('/posts', express.static(
            path.resolve('built/web/posts')
        ));

        webApp.get('/get/posts', apiController.getPosts);
        webApp.get('/el-commit', blogController.index);
        webApp.get('/ng-tests', testsController.unitTests);
        webApp.get('/', homeController.index);
        webApp.get('*', defaultsController.notFound);
    },
    start : function () {
        this.createRoutes();
        var port = process.env.OPENSHIFT_NODEJS_PORT || '8080',
            ipaddress = process.env.OPENSHIFT_NODEJS_IP || '127.0.0.1',
            turnOnMessage = Date(Date.now())
                                + ' - ' + ipaddress
                                + ':' + port;
        
        webApp.listen(port, ipaddress, function () {
            console.log(turnOnMessage);
        });
    }
};

server.start();