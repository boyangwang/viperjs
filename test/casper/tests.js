casper.on('remote.message', function(message) {
    this.echo(message);
});
casper.on('page.error', function(e) {
    this.echo(e);
});
casper.test.begin('ViperJS', 22, function suite(test) {
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
                test.assertElementCount('.viperjs-navbar-logo', 1, 'viperjs-navbar-logo');
                test.assertElementCount('.viperjs-input-output', 1, 'viperjs-input-output');
                test.assertElementCount('.viperjs-input-container', 1, 'viperjs-input-container');
                test.assertElementCount('.viperjs-input-editor', 1, 'viperjs-input-editor');
                test.assertElementCount('.viperjs-input-history-inputs', 1, 'viperjs-input-history-inputs');
                test.assertElementCount('.viperjs-input-tokenize-button', 1, 'viperjs-input-tokenize-button');
                test.assertElementCount('.viperjs-output-parsed-container', 1, 'viperjs-output-parsed-container');
                test.assertElementCount('.viperjs-output-tokenized-container', 1, 'viperjs-output-tokenized-container');
                test.assertElementCount('.viperjs-output-history-tokenizeds', 1, 'viperjs-output-history-tokenizeds');
                test.assertElementCount('.viperjs-output-current-tokenized', 1, 'viperjs-output-current-tokenized');
                test.assertElementCount('.viperjs-output-history-parseds', 1, 'viperjs-output-history-parseds');
                test.assertElementCount('.viperjs-output-current-parsed', 1, 'viperjs-output-current-parsed');
                test.assertElementCount('.viperjs-output-parse-button', 1, 'viperjs-output-parse-button');
            }, function() {
                test.fail('TIMEOUT: .viperjs-app does not exist');
            }, 5000);
        })
        .run(function() {
            test.done();
        });
});
