var  {exec}= require('child_process');

var cmd = 'taskkill /f /im Taskmgr.exe';

exec(cmd, function(error, stdout, stderr){
	console.log(stdout);
	console.log(stderr);
}
);
