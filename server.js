'use strict';

var express = require('express'),
    webApp = express(),
    testsController = require(process.cwd() + '/core/controllers/tests'),
    blogController = require(process.cwd() + '/core/controllers/blog'),
    apiController = require(process.cwd() + '/core/controllers/api'),
    defaultsController = require(process.cwd() + '/core/controllers/defaults'),
    path = require('path');

var server = {
    createRoutes : function () {
        webApp.use('*/node_modules', express.static(
            path.resolve('node_modules')
        ));
        webApp.use('*/images', express.static(
            path.resolve('web/images')
        ));
        webApp.use('*/views', express.static(
            path.resolve('web/views')
        ));
        webApp.use('*/styles', express.static(
            path.resolve('web/styles')
        ));

        webApp.use('/blog', express.static(
            path.resolve('built/web/blog')
        ));
        webApp.use('/:year/:month/:day/post', express.static(
            path.resolve('built/web/post')
        ));
        webApp.use('/posts', express.static(
            path.resolve('built/web/posts')
        ));
        webApp.use('/:year/:month/:day/posts', express.static(
            path.resolve('built/web/posts')
        ));

        webApp.get('/get/post/by/url/:url', apiController.getPostByUrl);
        webApp.get('/get/posts', apiController.getPosts);
        webApp.get('/ng-tests', testsController.unitTests);
        webApp.get('/:year/:month/:day/:url', blogController.getPost);
        webApp.get('/', blogController.index);
        webApp.get('*', defaultsController.notFound);
    },
    start : function () {
        this.createRoutes();
        var port = process.env.OPENSHIFT_NODEJS_PORT || '8080',
            ipaddress = process.env.OPENSHIFT_NODEJS_IP || '127.0.0.1',
            turnOnMessage = Date(Date.now())
                                + ' - ' + ipaddress
                                + ':' + port;

        webApp.set('views', './web/views');
        webApp.set('view engine', 'ejs');
        webApp.listen(port, ipaddress, function () {
            console.log(turnOnMessage);
        });
    }
};

server.start();