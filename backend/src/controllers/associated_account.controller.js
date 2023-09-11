const catchAsync = require('../helpers/catchAsync');
const AssociatedAccServices = require('../services/associated_acounts.services');

const associatedAccServices = new AssociatedAccServices();

exports.createAssociated = catchAsync(async (req, res, next) => {
    const { sessionUser, body } = req;

    const newAssociated = await associatedAccServices.createAssociated({
        sessionUser,
        body,
        next,
    });

    return res.status(200).json({
        message: 'Create a new associated account.',
        newAssociated,
    });
});

exports.getAllAssociated = catchAsync(async (req, res, next) => {
    const id = req.params.id;
    const Contacts = await associatedAccServices.getAllAssociated({
        id,
    });
    return res.status(200).json({
        message: 'Get all associated accounts.',
        Contacts,
    });
});

exports.deleteAssociated = catchAsync(async (req, res, next) => {
    const { id, contactId } = req.params;
    const deleted = await associatedAccServices.deleteAssociated({
        id,
        contactId,
    });
    return res.status(200).json({
        message: 'Delete a associated account.',
        deleted: !!deleted,
    });
});
