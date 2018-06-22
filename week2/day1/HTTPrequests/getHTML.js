const https = require('https');

module.exports = { 
    get: function(options, callback) {
        https.get(options, function(response) {  
            response.setEncoding('utf8');
            response.on('data', function(data) {
                callback(data);
            })
        })
    }
}

function printHTML (html) {
    console.log(html);
}
  
var requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step4.html'
};

// getHTML(requestOptions, printHTML);