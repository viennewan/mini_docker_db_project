var express = require('express');
var app = express();
var numberOfFiles = require('./main');

app.get('/', function (req, res) {
    numberOfFiles().then(function(rows) {
        var msg = 'Hello World ! Totally '+ rows + ' files now!';
        res.send(msg);
    }).catch(error => {console.log(error)});
});

app.listen(8080, function () {
  console.log('Test case app is listening on port 8080!');
});

