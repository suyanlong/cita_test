var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
    console.log("---------------");
    console.log(req.param("name"));

    res.render('index');
});

module.exports = router;
