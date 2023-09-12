const catchAsync = require('../helpers/catchAsync');
const BillingDataServices = require('../services/billingData.services');
const billingData = new BillingDataServices();

exports.createBillingData = catchAsync(async(req,res,next)=>{
    const id = req.params.id;
    const body = req.body;
    const newBillingData = await billingData.createBillingData({id,body,next})
    return res.status(200).json({
        message: 'Create a new billing data',
        newBillingData
    })
});

exports.updateBillingData = catchAsync(async(req,res,next)=>{
    const id = req.params.id;
    const body = req.body;
    console.log(body)
    const updateDate = await billingData.updateBillingData({id,body,next});
   
    res.status(200).json({
        status: 'success',
        message: 'Data updated successfully',
        user: updateDate,
    });
})

exports.sendBillinData = catchAsync(async(req,res,next)=>{
    const id = req.params.id
    const data = await billingData.sendBillinData({id,next})
    res.status(200).json({
        status: 'success',
        message: 'Send data successfully',
        user: data,
    });
})