const fs= require("fs");

//read user.json file
fs.readFile("user.json",function(err,data)
{
	//check for error
	if(err) throw err;
	
	
	//converting to json
	const user =JSON.parse(data);
	console.log(user);
});