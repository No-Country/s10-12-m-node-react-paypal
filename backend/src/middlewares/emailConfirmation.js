const nodemailer = require('nodemailer');
const nodemailerSendgrid = require('nodemailer-sendgrid');
const ejs = require('ejs');
const path = require('path');
const logger = require('../helpers/logger');

// const transporter = nodemailer.createTransport({
//     host: 'sandbox.smtp.mailtrap.io',
//     port: 2525,
//     auth: {
//         user: '6585fd075b242c',
//         pass: 'f73277b4e93f5e',
//     },
// });

// const transporter = nodemailer.createTransport({
//     host: 'smtp.gmail.com',
//     port: 465,
//     secure: true,
//     auth: {
//         user: process.env.USER_EMAIL_COUNTRYPAY,
//         password: process.env.PASS_GMAIL_CP,
//     },
// });

// const createTransport = () => {
//     const transport = nodemailer.createTransport(
//         nodemailerSendgrid({
//             apiKey: process.env.API_KEY_SENDGRID,
//         }),
//     );
//     return transport;
// };

const transporter = nodemailer.createTransport(
    nodemailerSendgrid({
        apiKey: process.env.API_KEY_SENDGRID,
    }),
);

// console.log('Transporter Nodemailer: ', transporter);

const emailConfirmation = async (toEmail, confirmLink, req, res, next) => {
    try {
        const data = await renderEmailTemplate(confirmLink);
        const mailOptions = {
            from: 'ccountrypay@gmail.com',
            to: toEmail,
            subject: 'Confirm your CountryPay account',
            html: data,
        };

        const info = await sendEmail(mailOptions);
        logger.info('Confirmation email sent:', info.response);
        logger.info(info);
        console.log('Console log. Mailing status', info.response);

        // next();
        return 'Mail has been sent successfully';
    } catch (error) {
        logger.error('Error sending confirmation email:', error);
        // next(error);
    }
};

async function renderEmailTemplate(confirmLink) {
    return new Promise((resolve, reject) => {
        ejs.renderFile(
            path.join(__dirname, '../views/emailConfirmation.ejs'),
            { confirmLink },
            (err, data) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(data);
                }
            },
        );
    });
}

async function sendEmail(mailOptions) {
    return new Promise((resolve, reject) => {
        transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
                reject(error);
            } else {
                resolve(info);
            }
        });
    });
}

module.exports = emailConfirmation;
