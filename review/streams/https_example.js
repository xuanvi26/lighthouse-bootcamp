var https = require("https");
console.log('Required https');

var options = {
    host: 'www.example.com',
    path: '/'
};

var callback = function(response) {
    console.log('Callback here (after request), printing out the response!');
    console.log(response);
}

console.log('Starting request')

https.request(options, callback).end();

console.log('Request finished')