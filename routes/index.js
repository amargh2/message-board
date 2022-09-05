var express = require('express');
var router = express.Router();

const messages = [
  {
    text: 'X-Files theme stuck in my head on repeat!',
    user: 'Amando',
    added: new Date()
  },
  {
    text: 'The truth is out there!',
    user: 'Charles',
    added: new Date()
  }
]


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Mini Message Board', messages: messages });
});

router.get('/new', function(req, res, next) {
  res.render('form', {title: 'Submit a New Message'})
})

router.post('/new', function(req, res, next) {
  message = {
    text:req.body.text,
    user: req.body.user,
    added: new Date()
  }
  messages.push(message)
})

module.exports = router;