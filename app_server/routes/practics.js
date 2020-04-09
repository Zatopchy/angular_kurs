let express = require('express');
let router = express.Router();
let ctrlPractics = require('../controllers/practics');

router.get('/practics/:id', ctrlPractics.getOne);
router.get('/practics', ctrlPractics.getAll);
router.post('/practics', ctrlPractics.createNew);
router.put('/practics/:id', ctrlPractics.update);
router.delete('/practics/:id', ctrlPractics.delete);

module.exports = router;