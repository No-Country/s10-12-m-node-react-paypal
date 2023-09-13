const uniqueId = require('./randomId');

exports.generateNickName = (name) => {
    const randomNumber = Math.floor(Math.random() * 9999) + 1;
    console.log(randomNumber);
    const nickName = name.split(' ')[0] + randomNumber.toString();
    return nickName;
};
