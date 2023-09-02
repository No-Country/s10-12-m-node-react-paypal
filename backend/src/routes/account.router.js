const express = require('express');
const accountController = require('../controllers/account.controller');

const router = express.Router();

router.post(
    '/create-stripe-account/:id',
    accountController.createStripeAccount,
);

module.exports = router;