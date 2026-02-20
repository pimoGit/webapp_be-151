// importiamo parte di express
const express = require('express');
// utilizziamo parte di express per gestire le rotte
const router = express.Router();

// importiamo relativo controller
const bookController = require('../controllers/bookController');

// definiamo le rotte

// rotta di index
router.get('/', bookController.index);

// rotta di show
router.get('/:id', bookController.show);

module.exports = router;