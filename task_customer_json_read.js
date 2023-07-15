const fs=require("fs");


fs.readFile('taskcustomer.json', function(err,data)
{
if(err) throw err;
	
	
	//converting to json
	const user =JSON.parse(data);
	console.log(user);
	});