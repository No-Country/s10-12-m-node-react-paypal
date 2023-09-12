const crypto = require('crypto');

const generateRandomToken = () => {
    const tokenLength = 20;
    const tokenBuffer = crypto.randomBytes(tokenLength);
    const token = tokenBuffer.toString('hex');

    return token;
};

module.exports = generateRandomToken;
