var https = require("https");

function getAndPrintHTMLChunks () {

    var requestOptions = {
      host: 'sytantris.github.io',
      path: '/http-examples/step1.html'
    };

    // var dataStr = '';
  
    https.request(requestOptions, (response) => {

        response.setEncoding('utf8');

        response.on('data', (data) => {
            // dataStr += data;
            console.log(data);
            console.log('\n');
        })

        response.on('end', () => {
            console.log('Request completed')
        })

    });

    // console.log(dataStr);
  
  }

getAndPrintHTMLChunks();

// AT STEP 4 OF THE CURRENT EXERCISE