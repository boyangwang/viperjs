'use strict';
const expect = require('chai').expect;
const app = require('../app.js');
const req = require('request-promise');
const fs = require('fs');
const path = require('path');

describe('Sanity', () => {
    it('should be sane', () => {
        expect(true).equal(true);
    });
});
describe('ViperJS integration test', () => {
    before((done) => {
        app.server.on('listening', () => done());
        if (app.server.listening) done();
    });
    it('should server static files', (done) => {
        req({uri: 'http://localhost:7030' + '/index.html'})
            .then((res) => new Promise((resolve, reject) => {
                fs.readFile(path.join(__dirname, '../public', 'index.html'), 'utf8', (err, data) => {
                    resolve({file: data, res: res});
                });
            }))
            .then((results) => { expect(results.file).equal(results.res); })
            .then(done).catch((reason) => done(reason));
    });
});
