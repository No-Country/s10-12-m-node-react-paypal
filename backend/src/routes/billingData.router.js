const { Router } = require('express');
const router =  Router();

const {createBillingData,updateBillingData,sendBillinData} = require('../controllers/billingData.controller');

router.post('/createData/:id', createBillingData);
router.put('/updateData/:id', updateBillingData);
router.get('/sendData/:id', sendBillinData);

module.exports = router