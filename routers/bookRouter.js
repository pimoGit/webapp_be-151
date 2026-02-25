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

// rotta di create recensione
router.post('/:id/reviews', bookController.storeReview);

module.exports = router;