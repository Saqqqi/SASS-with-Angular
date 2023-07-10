const express = require('express');
const sassMiddleware = require('node-sass-middleware');
const app = express();

app.use(sassMiddleware({
    src: __dirname + '/public/stylesheet',
    dest: __dirname + '/public',
    debug: true,
    outputStyle: 'compressed',
    indentedSyntax: true // Use Sass instead of SCSS syntax
}));

app.use(express.static(__dirname + '/public'));

app.get('/', function(req, res) {
    res.sendFile(__dirname + '/public/index.html');
});

app.listen(3000, function() {
    console.log('Server is running on port 3000');
});