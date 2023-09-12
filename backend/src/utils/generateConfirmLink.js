const generateRandomToken = require('../helpers/generateRandomToken');

const generateConfirmLink = (accountId) => {
    const confirmationToken = generateRandomToken();

    const confirmLink = `http://localhost:3000/api/account/confirm?accountId=${accountId}&token=${confirmationToken}`;

    return confirmLink;
};

module.exports = generateConfirmLink;
