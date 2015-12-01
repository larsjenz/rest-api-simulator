/*eslint-env node*/

//------------------------------------------------------------------------------
// node.js starter application for Bluemix
//------------------------------------------------------------------------------

// This application uses express as its web server
// for more info, see: http://expressjs.com
var express = require('express');


// create a new express server
var app = express();

// serve the files out of ./public as our main files
app.use(express.static(__dirname + '/public'));


var api = require('./rest-api.js');
app.get('/getModel', api.getModel );
app.get('/getModelDescription', api.getModelDescription );
app.get('/getMachineType', api.getMachineType );
app.get('/getSerialNumber', api.getSerialNumber );
app.get('/isActive', api.isActive );
app.get('/getCurrentStatus', api.getCurrentStatus );
app.get('/getDeviceName', api.getDeviceName );
app.post('/setDeviceName', api.setDeviceName );

// start server on the specified port and binding host
app.listen(process.env.PORT, function() {

	// print a message when the server starts listening
  console.log("server starting on " + process.env.PORT);
});

