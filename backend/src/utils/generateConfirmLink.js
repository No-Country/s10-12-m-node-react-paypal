const generateRandomToken = require('../helpers/generateRandomToken');

const generateConfirmLink = (accountId) => {
    const confirmationToken = generateRandomToken();

    const confirmLink = `https://countrypay.onrender.com/api/account/confirm?accountId=${accountId}&token=${confirmationToken}`;

    return confirmLink;
};

module.exports = generateConfirmLink;
