var https = require("https");
console.log('Required https');

var options = {
    host: 'stream-large-file.herokuapp.com',
    path: '/give-me-stuff-now'
};

var callback = function(response) {
    console.log('Callback here (after request), printing out the response!');
    response.on('data', (data) => {
        console.log('!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! Callback execution !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!')
        console.log(data.toString())
    })
}

console.log('Starting request')

https.request(options, callback).end();

console.log('Request finished')