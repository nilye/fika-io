const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const http = require('http');
const app = express();

//general
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.set('trust proxy', true);

//cros
app.use(function(req, res, next){
	res.setHeader('Access-Control-Allow-Origin', '*');
	res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
	res.setHeader('Access-Control-Allow-Methods', 'POST, GET, PATCH, DELETE, OPTIONS');
	next();
});

//static dir
app.use(express.static(path.join(__dirname, 'dist'), {index:false, redirect: false}));

//index route
app.use(function(req, res){
	res.sendFile(path.join(__dirname + '/dist/index.html'));
});

// var port = (process.env.PORT || '80');
const port = (process.env.PORT || '8000');
// let port = (process.env.PORT || '80');

app.set('port', port);
const server = http.createServer(app);
server.listen(port);
console.log('served on port 8000')
