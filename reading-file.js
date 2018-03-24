
var fs= require('fs');

	
fs.readFile('httpd.conf', 'utf8', function(err, contents){
	//console.log('before replacing' + contents );

	if(contents.match(/sit/g)){
		contents= contents.replace(/sit/g,'uat');
		writeContents('httpd.conf', contents);	
		//console.log('after replacing'+ contents);
	}
	else if(contents.match(/uat/g)){
		contents= contents.replace(/uat/g,'sit');
		writeContents('httpd.conf', contents);	
	}
});

function writeContents(fileName, contents){
	fs.writeFile(fileName,contents, function(err){
			if(err) {
				return console.log(err);
			}
	});	
}

