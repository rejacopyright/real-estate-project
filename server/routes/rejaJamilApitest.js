const express = require('express');
const {
 helath,
 getBalance,
 buyItem,
} = require('../controllers/rejaController');
const router = express.Router();

router.get('/', helath);
router.get('/balance', getBalance);
router.post('/buy', buyItem);

module.exports = router;
