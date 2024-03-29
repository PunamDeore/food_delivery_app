const express = require('express');
const router = express.Router();
const { calculatePriceController } = require('../controllers/pricingController');

router.post('/calculatePrice', calculatePriceController);

module.exports = router;
