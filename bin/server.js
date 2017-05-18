var app = require('../app');
var https = require('https');
var fs = require('fs');
var port = process.env.PORT || 3000;

var options =
{
	key : fs.readFileSync('./certs/server.key'),
	cert : fs.readFileSync('./certs/server.cert')
};
var server = https.createServer(options, app);
server.on('error', onError);
server.listen(port, function()
{
	console.log('server started on port ' + port);
});

function onError(error) {
  if (error.syscall !== 'listen') {
    throw error;
  }

  var bind = typeof port === 'string'
    ? 'Pipe ' + port
    : 'Port ' + port;

  // handle specific listen errors with friendly messages
  switch (error.code) {
    case 'EACCES':
      console.error(bind + ' requires elevated privileges');
      process.exit(1);
      break;
    case 'EADDRINUSE':
      console.error(bind + ' is already in use');
      process.exit(1);
      break;
    default:
      throw error;
  }
}