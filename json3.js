const fs =require("fs");

//reading json file
 const users = require("./usernew1");
 
 //defining new user
 
 let user ={
	 name:"sap",
	 age:25,
	 language:["node","react","graph1"]
 };
  let user1 ={
	 name:"sap1",
	 age:23,
	 language:["node1","react1","graph111"]
 };
 
 //step 2 adding new data to users object
 
 users.unshift(user);
 users.push(user1);
 
 //step 3 writing to a file
 
 fs.writeFile("usernew.json",JSON.stringify(users),err =>{
	 if(err) throw err;
	 console.log("done writing");
 });