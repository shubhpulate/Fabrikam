var express = require('express');
var app = express();


//Reusable controllers
var companyController=function (req, res) {
  console.log("CAlling rest api");
  var companies=[{company:'Fabrikam'},
  {total_offices:24},

	[{p_name:'android app'},{p_name:'ios app'},{p_name:'web app'}],			
				
				
  {iass:'Amazon webservices cloud'},
  {cloud_host:'AWS'}];
  
  res.send(companies);
  };
  
  
app.get('/companies',companyController );

var server = app.listen(8088, function () {
  var host = server.address().address
  var port = server.address().port

  console.log("Example app listening at http://localhost:8088", host, port)
})