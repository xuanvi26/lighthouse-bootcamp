let fs = require("fs");
let args = process.argv.slice(2);

fs.readFile(args[0], function(err, data) {
    if (err) return console.error(err);
    console.log(data.toString());
});
localStorage