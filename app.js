
var express = require('express');
var path = require('path');
var app = express();

app.use(express.static(path.join(__dirname, 'assets')));

app.get('/', (req, res) => {
    res.sendFile(`${__dirname}/index.html`);
})
var port = process.env.PORT || 8080;

var server = app.listen(port, (req, res) => {
    console.log(`Catch the action at http:\\localhost:${port}`);
})
