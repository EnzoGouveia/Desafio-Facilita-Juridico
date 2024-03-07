const { Router } = require('express');
const controller = require('../controllers/calculateController');

const router = Router();

router.post('/', controller.calculateRoute);

module.exports = router;