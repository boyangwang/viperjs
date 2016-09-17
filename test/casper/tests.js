'use strict';

casper.on('remote.message', function(message) {
    this.echo(message);
});
casper.on('page.error', function(e) {
    this.echo(e);
});
casper.test.begin('Sanity', 1, function suite(test) {
    test.assertEquals(true, true, 'should be sane');
    test.done();
});
casper.test.begin('ViperJS', 9, function suite(test) {
    casper
        .start('http://localhost:7030/', function() {
            test.assertHttpStatus(200);
            test.assertElementCount('#viperjs-wrapper', 1, 'viperjs-wrapper');
        })
        .then(function() {
            this.waitForSelector('.viperjs-app', function() {
                test.assertElementCount('.viperjs-app', 1, 'viperjs-app');
                test.assertElementCount('.viperjs-navbar', 1, 'viperjs-navbar');
                test.assertElementCount('.viperjs-navbar-left', 1, 'viperjs-navbar-left');
                test.assertElementCount('.viperjs-navbar-right', 1, 'viperjs-navbar-right');
                test.assertElementCount('.viperjs-navbar-title', 1, 'viperjs-navbar-title');
                test.assertElementCount('.viperjs-navbar-links', 1, 'viperjs-navbar-links');
                test.assertElementCount('.viperjs-navbar-link', 1, 'viperjs-navbar-link');
            }, function() {
                test.fail('TIMEOUT: .viperjs-app does not exist');
            }, 5000);
        })
        .run(function() {
            test.done();
        });
});
