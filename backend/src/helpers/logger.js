const winston = require('winston');

const logLevels = {
    error: 'red',
    warn: 'yellow',
    info: 'green',
    debug: 'blue',
};

const logger = winston.createLogger({
    level: 'info',
    levels: logLevels,
    format: winston.format.combine(
        winston.format.colorize(),
        winston.format.simple(),
    ),
    transports: [
        new winston.transports.Console(),
        // Puedes agregar más transportes aquí, como el registro en archivos
    ],
});

module.exports = logger;
