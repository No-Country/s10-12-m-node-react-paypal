const { Router } = require('express');
const router =  Router();

const {createBillingData} = require('../controllers/billingData.controller');

router.post('/createData/:id', createBillingData);

module.exports = router