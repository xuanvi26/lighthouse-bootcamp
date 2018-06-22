const https = require('https');

const getAndPrintHTMLChunks = () => {

    let requestOptions = {
        host: 'syntantris.github.io',
        path: '/http-examples/step1.html'
    };

    https.get(requestOptions, function(response) {
        
        response.setEncoding('utf8');
        
        response.on('data', function (data) {
            console.log(data + '\n');
        })

    })

}

getAndPrintHTMLChunks();