var express = require('express')
var app = express()
 
// express route with multiple functions
app.get('/hello/', function (req, res, next) {
   res.write('Hello page. ')
   next()
}, function(req, res, next){
   res.write('Hello again. ')
   res.end()
})
 
// start the server
var server = app.listen(8000, function(){
    console.log('Listening on port 8000...')
})