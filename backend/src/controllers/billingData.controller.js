const catchAsync = require('../helpers/catchAsync');
const BillingDataServices = require('../services/billingData.services');
const billingData = new BillingDataServices();

exports.createBillingData = catchAsync(async(req,res,next)=>{
    const {userId} = req.params.id;
    const body = req.body
    const newData = await billingData.createBillingData({userId,body,next});
    res.status(200).json({
        status: 'success',
        message: 'your data was created successfully',
        newData
    })
});