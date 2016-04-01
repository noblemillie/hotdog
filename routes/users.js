var express = require('express');
var router = express.Router();

// Require the User model
var Dawg = require('../models/dawg');


/* GET display a new form to add a user */
router.get('/new', function(req, res, next) {
  res.render('dawgs/new', { title: 'Hotdog' });
});


/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});


router.post('/', function(req, res, next) {
    var name = req.body.name;
    var favoritetoy = req.body.favorite;

    var newDawg = Dawg({
        name: name,
        favoritetoy: favoritetoy,
    });

    // Save the user
    newDawg.save(function(err, user) {
        if (err) console.log(err);
        console.log(user);

        res.send('What up Dawg!!');
    });
});

module.exports = router;
