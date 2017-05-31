/**
 * Created by suyanlong on 2017/5/30.
 */
var express = require('express');
var router = express.Router();

/* GET cita_test listing. */
router.get('/', function (req, res, next) {
    console.log("------------cita_test-------------");
    console.log("----" + req.param("ip"));
    console.log("---port--" + req.param("port"));


    res.send('respond with a resource');
});

router.post('/',function (req, res, next) {
    //
    console.log("------------cita_test-------------");
    console.log("----" + req.param("ip"));
    console.log( req);



    res.send('respond with a resource');
});

module.exports = router;

