const express = require('express');
const {
    createAssociated,
    deleteAssociated,
    getAllAssociated,
} = require('../controllers/associated_account.controller');
const {
    protectRoute,
    verifyAccountOwner,
} = require('../middlewares/auth.middleware');

const router = express.Router();

router.get('/:id/get', protectRoute, verifyAccountOwner, getAllAssociated);

router.post('/:id/create', protectRoute, verifyAccountOwner, createAssociated);

router.delete(
    '/:id/delete/:contactId',
    protectRoute,
    verifyAccountOwner,
    deleteAssociated,
);

module.exports = router;
