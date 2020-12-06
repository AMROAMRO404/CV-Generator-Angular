const port = 3000;
var express = require('express');
var app = express();

app.get('/', function(req, res) {
    res.send("hello world");
});
app.post('/postCV', function(req, res) {
    console.log("here you can post new cv");
    res.send("yess I can post")
});
app.get('/cv/:id', function(req, res) {
    let id = req.params['id'];
    res.send("the cv id " + id); // res means that the connection with server is end
});

//lestinig to the port 3000 .... 
app.listen(port, function(req, res) {
    console.log("Server is lestinig to the port " + port + " ...");
})