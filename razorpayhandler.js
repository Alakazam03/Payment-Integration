var express = require('express')
var app = express()

// respond with "hello world" when a GET request is made to the homepage
app.get('/payments', function (req, res) {
  
  //console.log(res);
  var paymentId=req.query.key;
  console.log(req.query.key);
  console.log(req.query.Id);
  if(paymentId){
   console.log(instance.payments.fetch(paymentId));
   var operation = //make an api call after receiving an http request from payment page
	}
	res.sendStatus(200);
});




// Set Express to listen out for HTTP requests
var server = app.listen(process.env.PORT || 5000, function () {
  console.log("Listening on port %s", server.address().port);
});
