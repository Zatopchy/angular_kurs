var express = require('express');
var router = express.Router();

let ctrlIndex = require('../controllers/index');

/* GET home page. */
router.get('/', ctrlIndex.index);

module.exports = router;
