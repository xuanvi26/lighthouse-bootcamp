const request = require('request');
const fs = require('fs');

request.get('https://sytantris.github.io/http-examples/future.jpg')
    .on('error', function (err) {
        throw err;
    })
    .on('response', function (response) {
        console.log('Response Status Code: ', response.statusCode);
        console.log('Response Message: ', response.statusMessage);
        console.log('Response Content Type: ', response.headers['content-type']);
        console.log('Dowloding image...');
    })
    .pipe(fs.createWriteStream('./future.jpg'))
    .on('finish', function () {
        console.log('Download complete.')
    })