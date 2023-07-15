
   
   
   let http = require('http');
let fs = require('fs');

let a=10;
let b=20;

let handleRequest =(request , response) =>{

   response.writeHead(200,{
   'Content-Type':'text/html'
   });
   
   fs.readFile('./index.html' ,null,function (error ,data)
   {
	   if(error)
	   {
		   response.writeHead(404);
		   response.write('file not found');
	   }
	   else
	   {
		   response.write(data);
		   let c=a+b;
		   response.write('Sum Of a+b='+c);
		   }
		   response.end();
   });
   };
   
   http.createServer(handleRequest).listen(9090);