const catchAsync = require('../helpers/catchAsync');
const CardServices = require('../services/card.services');
const cardServices = new CardServices();

exports.createCard = catchAsync(async (req, res, next) => {
    const { id } = req.params;
    const body = req.body;
    const card = await cardServices.createOneCard({ body, id, next });

    return res.status(200).json({
        message: 'succes',
        card,
    });
});
