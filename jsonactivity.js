const fs =require("fs");

//reading json file
 const users = require("./activity");
 
 //defining new user
 
 let user ={
	 firstname:"sanmugam",
	 lastname:"s",
	 age:25,
	 emp_id:"EC167"
 };
 let user1 ={
	 firstname:"saravanan",
	 lastname:"s",
	 age:29,
	 emp_id:"EC168"
 };
  let user2 ={
	 firstname:"ajay",
	 lastname:"s",
	 age:24,
	 emp_id:"EC169"
 };
 
 //step 2 adding new data to users object
 
 users.unshift(user);
 users.push(user1);
 users.push(user2);
 
 //step 3 writing to a file
 
 fs.writeFile("activity.json",JSON.stringify(users),err =>{
	 if(err) throw err;
	 console.log("done writing");
 });