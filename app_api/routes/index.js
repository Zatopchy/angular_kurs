var express = require('express');
var router = express.Router();
let ctrlcitiesworld = require('../controllers/сitiesworld');
let ctrlAuth = require('../controllers/auth');

router.get('/citiesworld', ctrlcitiesworld.getAll);
router.get('/citiesworld/:id', ctrlcitiesworld.getOne);
router.post('/citiesworld', ctrlcitiesworld.create);
router.put('/citiesworld/:id', ctrlcitiesworld.update);
router.delete('/citiesworld/:id', ctrlcitiesworld.delete);

router.post('/signup', ctrlAuth.signup);
router.post('/login', ctrlAuth.login);
router.get('/logout/:login', ctrlAuth.logout);
router.delete('/selfremove/:login', ctrlAuth.selfremove);

module.exports = router;