const  { spawn } =require('child_process');
const child = spawn('pwd');
child.on('error', function(err) {
  console.log('Oh noez, teh errurz: ' + err);
});

