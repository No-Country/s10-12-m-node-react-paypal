const uniqueId = () => {
    const timestamp = new Date().getTime();

    const randomNumber = Math.floor(Math.random() * 1000);

    return timestamp + randomNumber;
};

module.exports = uniqueId;
