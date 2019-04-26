var https = require("https");

function getAndPrintHTMLChunks () {

  var requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step2.html'
  };

    var dataStr = '';
  
    https.get(requestOptions, (response) => {

        response.setEncoding('utf8');

        response.on('data', (data) => {
            dataStr += data;
            // console.log(data);
            // console.log('\n');
        })

        response.on('end', () => {
          console.log(dataStr);
            console.log('Request completed')
        })

    });
  
  }

getAndPrintHTMLChunks();

// AT STEP 4 OF THE CURRENT EXERCISE