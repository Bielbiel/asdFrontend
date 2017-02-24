'use strict';
const http = require('http');
const express = require('express');

const app = express();
var proxy = require('http-proxy-middleware');
var config = {
    backendUrl: process.env.PROXY || 'http://localhost:3000', port: process.env.PORT || 8080
};
app.use('/api', proxy({target: config.backendUrl, changeOrigin: true}));
app.use('/', express.static(__dirname + '/app'));
app.get('*', function (req, res)
{
    res.sendFile(__dirname + '/app/index.html');
});

const httpListener = http.createServer(app).listen(config.port, function ()
{
    console.info('listening on port', httpListener.address().port);
});
