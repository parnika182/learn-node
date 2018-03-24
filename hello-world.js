var http = require('http');
var getDateAndTime = require('./date-time.js');

http.createServer(function(req, res) {
	
	res.writeHead(200, {'Content-type' : 'text/html'});
	res.write('Current date and time is: '+ getDateAndTime.dateTimes());
	res.end('Hello World');
	
}
).listen(8080);