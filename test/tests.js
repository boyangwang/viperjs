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
    const publicDirectoryPath = path.join(__dirname, '../public');
    function expectServeStaticFile(urlpath, filepath) {
        describe('should server static files', () => {
            it(`should serve ${filepath}`, (done) => {
                req({ uri: urlpath })
                    .then(res => new Promise((resolve, reject) => {
                        fs.readFile(filepath, 'utf8', (err, data) => {
                            if (err) {
                                reject(err);
                            } else {
                                resolve({ file: data, res });
                            }
                        });
                    }))
                    .then((results) => { expect(results.file).equal(results.res); })
                    .then(done)
                    .catch(reason => done(reason));
            });
        });
    }
    function expectServeStaticFilesRecursive(directory) {
        fs.readdir(directory, (err, files) => {
            if (err) {
                expect.fail();
            } else {
                for (const file of files) {
                    if (!fs.statSync(path.join(directory, file)).isDirectory()) {
                        const currentFilePath = path.join(directory, file);
                        expectServeStaticFile(`http://localhost:7030/${path.relative(
                            publicDirectoryPath, currentFilePath).replace(/\\/g, '/')}`, currentFilePath);
                    } else {
                        expectServeStaticFilesRecursive(path.join(directory, file));
                    }
                }
            }
        });
    }
    expectServeStaticFilesRecursive(publicDirectoryPath);
});
