var https = require('https');

var getHTML = require('./httpRequestExercise');

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step6/1337.html'
};

function print1337(html) {

  processedHtml = '';
  for (let i = 0; i < html.length; i++) {
      switch (html[i] + html[i+1]) {
            case 'a' : //supposed to use RegEx here
                processedHtml += '4';
            case 'e' :
                processedHtml += '3';
            case 'ck' : 
                i++;
      }
  }

}

console.log(getHTML)

getHTML(requestOptions, print1337);