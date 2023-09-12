const transactionController = require('../controllers/transaction.controller');
const { Router } = require('express');
const {
    protectRoute,
    verifyAccountOwner,
} = require('../middlewares/auth.middleware');
const { validTransfers } = require('../middlewares/validated.middleware');

const router = Router();

router.post(
    '/:id',
    validTransfers,
    protectRoute,
    verifyAccountOwner,
    transactionController.createTransaction,
);
router.post(
    '/charge-point/:id',
    protectRoute,
    verifyAccountOwner,
    transactionController.chargePointCharge,
);

module.exports = router;
