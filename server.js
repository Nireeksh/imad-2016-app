var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));
var articleOne={
  tile:'  article one i am nireeksha',
  heading:'Article one',
  date:'sep 5,2016',
  content:  `
  <p>This is a content for ma first article.This is a content for ma first article.This is a content for ma first article.This is a content for ma first article.This is a content for ma first article.This is a content for ma first article.This is a content for ma first article.This is a content for ma first article.This is a content for ma first article</p>
            <p>This is a content for ma first article.This is a content for ma first article.This is a content for ma first article.This is a content for ma first article.This is a content for ma first article.This is a content for ma first article.This is a content for ma first article.This is a content for ma first article.This is a content for ma first article</p>
            <p>This is a content for ma first article.This is a content for ma first article.This is a content for ma first article.This is a content for ma first article.This is a content for ma first article.This is a content for ma first article.This is a content for ma first article.This is a content for ma first article.This is a content for ma first article</p>`
        
};
function createTemplate (data) {
    var ttle=data.tile;
    var heading=data.heading;
    var date=data.date;
    var content=data.content;

var htmlTemplate=`
<html>
    <head>
        ${title}
        <meta name="viewport" content="width-device-width,initial-scale-1">
        <link href="/ui/style.css" rel="stylesheet" />
    </head>
    <body>
        <div class="container">
        <div>
            <a href='/'>Home</a>
        </div>
        <hr/>
        <h3>
            ${heading}
        </h3>
        <div>
            ${date}
        </div>
        <div>
            ${content}
        </div>
        </div>
    </body>
</html>
`;
return htmlTemplate;
}

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});
app.get('/article-one',function(req,res) {
res.send(createTemplate(articleOne));
});
app.get('/article-two',function(req,res) {
res.send("article two is requested and served here");
});
app.get('/article-three',function(req,res) {
res.send("article three is requested and served here");
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
