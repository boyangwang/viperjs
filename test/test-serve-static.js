import req from 'request-promise';
import fs from 'fs';
import path from 'path';
import { expect } from 'chai';
import app from '../server/app.js';

describe('ViperJS integration test', () => {
    before((done) => {
        app.server.on('listening', () => done());
        if (app.server.listening) done();
    });
    const publicDirectoryPath = path.join(__dirname, '../public');
    function expectServeStaticFile(urlpath, filepath) {
        describe('should serve static files', () => {
            it(`${filepath}`, (done) => {
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
                    if (fs.statSync(path.join(directory, file)).isDirectory()) {
                        expectServeStaticFilesRecursive(path.join(directory, file));
                    } else if (!/^\./.test(file)) {
                        const currentFilePath = path.join(directory, file);
                        expectServeStaticFile(`http://localhost:7030/${path.relative(
                            publicDirectoryPath, currentFilePath).replace(/\\/g, '/')}`, currentFilePath);
                    }
                }
            }
        });
    }
    expectServeStaticFilesRecursive(publicDirectoryPath);
    expectServeStaticFile('http://localhost:7030/js/babel-polyfill.min.js', path.join(
        __dirname, '../node_modules/babel-polyfill/dist/polyfill.min.js'));
});
