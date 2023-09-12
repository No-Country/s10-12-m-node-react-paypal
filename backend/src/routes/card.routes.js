const { createCard, deleteCard } = require('../controllers/card.controller');
const {
    protectRoute,
    verifyAccountOwner,
} = require('../middlewares/auth.middleware');
const express = require('express');
const {
    createCardValidation,
    validDeleteCard,
} = require('../middlewares/validated.middleware');
const router = express.Router();

// ---> /api/card

// ---> api/card/create/:id
router.post(
    '/create/:id/',
    createCardValidation,
    protectRoute,
    verifyAccountOwner,
    createCard,
);

router.delete(
    '/delete/:id/',
    protectRoute,
    verifyAccountOwner,
    validDeleteCard,
    deleteCard,
);

module.exports = router;
