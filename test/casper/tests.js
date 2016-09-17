'use strict';

casper.test.begin('Sanity', 1, function suite(test) {
    test.assertEquals(true, true, 'should be sane');
    test.done();
});
casper.test.begin('Google', 1, function suite(test) {
    casper
        .start('http://www.google.fr/', function() {
            test.assertTitle('Google', 'title');
        })
        .run(function() {
            test.done();
        });
});
casper.test.begin('ViperJS', 1, function suite(test) {
    casper
        .start('http://localhost:7030/', function() {
            test.assertHttpStatus(200);
        })
        .run(function() {
            test.done();
        });
});
