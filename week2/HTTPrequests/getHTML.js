const https = require('https');

function getHTML (options, callback) {

    https.get(options, function(response) {
        
        response.setEncoding('utf8');

        let html = '';
        response.on('data', function(data) {
            html += data;
            // console.log(data);
        })
        response.on('end', function(end) {
            console.log(end);
        })


    })
  
}
  
function printHTML (html) {
    console.log(html);
}
  
var requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step4.html'
};

getHTML(requestOptions, printHTML);