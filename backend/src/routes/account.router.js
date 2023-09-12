const express = require('express');
const accountController = require('../controllers/account.controller');
const {
    protectRoute,
    verifyAccountOwner,
} = require('../middlewares/auth.middleware');
const { recharge } = require('../middlewares/validated.middleware');

const router = express.Router();

router.post(
    '/:id',
    protectRoute,
    verifyAccountOwner,
    accountController.createAccount,
);

router.post(
    '/recharge/:id',
    recharge,
    protectRoute,
    verifyAccountOwner,
    accountController.rechargeCard,
);

router.post('/confirm/:token', protectRoute, accountController.confirmAccount);

module.exports = router;
