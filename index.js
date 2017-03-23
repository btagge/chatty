var express = require('express');
var bodyParser = require('body-parser');
var app = express();

app.use(express.static('assets'));
app.use(bodyParser.json());

var messages = [{user: 'btagge', message: 'Hello, world'}]

app.get('/messages', function (req, res, next) {
  res.status(200).json({ messages: messages });
});

app.post('/messages', function (req, res, next) {
  messages.push({ user: req.body.user, message: req.body.message, time: new Date() });
  res.status(200).json({ messages: messages });
});

var port = 8887;
app.listen(port, function() {
    console.log('now listening on port' + port);
});
