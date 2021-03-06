
var express = require('express');
var path = require('path');
var app = express();

app.use(express.static(path.join(__dirname, 'assets')));

app.get('/', (req, res) => {
    res.sendFile(`${__dirname}/index.html`);
});
app.get('/201704', (req, res) => {
    res.sendFile(`${__dirname}/201704/index.html`);
});
app.get('/201705', (req, res) => {
    res.sendFile(`${__dirname}/201705/index.html`);
});
app.get('/201706', (req, res) => {
    res.sendFile(`${__dirname}/201706/index.html`);
});
app.get('/201707', (req, res) => {
    res.sendFile(`${__dirname}/201707/index.html`);
});
app.get('/201708', (req, res) => {
    res.sendFile(`${__dirname}/201708/index.html`);
});
app.get('/201709', (req, res) => {
    res.sendFile(`${__dirname}/201709/index.html`);
});
app.get('/201710', (req, res) => {
    res.sendFile(`${__dirname}/201710/index.html`);
});
app.get('/201711', (req, res) => {
    res.sendFile(`${__dirname}/201711/index.html`);
});

var port = process.env.PORT || 8080;

var server = app.listen(port, (req, res) => {
    console.log(`Catch the action at http:\\localhost:${port}`);
})
