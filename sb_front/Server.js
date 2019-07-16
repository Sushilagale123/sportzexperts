var express = require('express'); 
var app = express();                                            // create our app w/ express   
var port = process.env.PORT || 9090;                            // set the port 
 app.use(express.static("dist"));                                                                                                                                                                                                                 
 app.get('/',function(req, res){                                                                                        
  res.redirect('/');                                                                                                      
});                                            
 app.listen(port);                                                                                  
   console.log("App listening on port " + port); 
