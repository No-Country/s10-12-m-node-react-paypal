const uniqueId = require('./randomId');

exports.generateNickName = (name) => {
    const nickName = name.split(' ')[0] + uniqueId().toString().substring(0, 4);
    return nickName;
};
