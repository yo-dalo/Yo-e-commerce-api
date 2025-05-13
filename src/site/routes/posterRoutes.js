const express = require('express');
const router = express.Router();
const posterController = require('../controllers/posterController');

// GET all posters
router.get('/', posterController.getAllPosters);

// GET poster by ID
router.get('/:id', posterController.getPosterById);

// GET poster by URL
router.get('/url/:url', posterController.getPosterByUrl);

module.exports = router;