// routes/translateRoutes.js
const express = require('express');
const router = express.Router();
const translateController = require('../controllers/translateController');

// Route để dịch văn bản
router.post('/translate-text', translateController.translateText);

module.exports = router;
