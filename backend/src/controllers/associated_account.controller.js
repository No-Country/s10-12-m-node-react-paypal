const catchAsync = require('../helpers/catchAsync')
const AssociatedAccServices = require('../services/associated_acounts.services')

const associatedAccServices = new AssociatedAccServices()

exports.createAssociated = catchAsync(async (req, res, next) => {
    const id = req.params.id
    const newAssociated = await associatedAccServices.createAssociated({
        id,
        next
    })

    return res.status(200).json({
        message: 'Create a new associated account.',
        newAssociated
    })
})

exports.getAllAssociated = catchAsync(async (req, res, next) => {
    const id = req.params.id
    const getAll = await associatedAccServices.getAllAssociated({
        id
    })
    return res.status(200).json({
        message: 'Get all associated accounts.',
        getAll
    })
})

exports.deleteAssociated = catchAsync(async (req, res, next) => {
    const id = req.params.id
    const deleted = await associatedAccServices.deleteAssociated({
        id
    })
    return res.status(200).json({
        message: 'Delete a associated account.',
        deleted
    })
})
