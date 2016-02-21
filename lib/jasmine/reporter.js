var jasmineReporter = {
    jasmineStarted: function (suiteInfo) {
        console.log(suiteInfo.totalSpecsDefined + ' spec(s) defined');
    },
    suiteStarted: function (result) {
        console.log('Suite : ' + result.fullName);
    },
    specStarted: function (result) {
        console.log('    spec : ' + result.description);
    },
    specDone: function (result) {
        console.log('          ' + result.status + ' ' + result.passedExpectations.length);
        for (var i = 0; i < result.failedExpectations.length; i++) {
            console.log('          Failure: ' + result.failedExpectations[i].message);
            console.log('         ' + result.failedExpectations[i].stack);
        }
    },
    suiteDone: function (result) {
        console.log('Suite: ' + result.description + ' was ' + result.status);
        for (var i = 0; i < result.failedExpectations.length; i++) {
            console.log('          Failure: ' + result.failedExpectations[i].message);
            console.log('         ' + result.failedExpectations[i].stack);
        }
    },
    jasmineDone: function () {
        console.log('Finished suite');
    }
}

jasmine.getEnv().addReporter(jasmineReporter);