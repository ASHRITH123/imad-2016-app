var express = require('express'); //express is the keyword, to create a webserver so that we don't have to set listhn etc
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});
app.get('/article-one',function(req,res){
    res.send('Article one is requested, your request will be served shortly');   
    
});
app.get('/article-two',function(req,res){
   res.send('Article two is requested, your request will be served shortly');
});
app.get('/article-three',function(req,res){
    res.send('Article three is requested, you request will be served shortly');
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
