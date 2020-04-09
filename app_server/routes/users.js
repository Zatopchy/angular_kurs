var express = require('express');
var router = express.Router();
let ctrlMain = require('../controllers/main');

/* GET users listing. */
router.get('/', ctrlMain.test);

module.exports = router;
