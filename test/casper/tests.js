'use strict';

casper.test.begin('Sanity', 1, function suite(test) {
    test.assertEquals(true, true, 'should be sane');
    test.done();
});
casper.test.begin('Google', 1, function suite(test) {
    casper.start("http://www.google.fr/", function() {
        test.assertTitle("Google", "title");

    });
    casper.run(function() {
        test.done();
    });
});
