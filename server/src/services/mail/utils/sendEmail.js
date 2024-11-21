const { transporter } = require("../../../configs/nodemailer")

function sendEmail (obj) {
    return transporter.sendMail(obj);
}


module.exports = { sendEmail };

/** "bcrypt": "^5.1.1",
    "bluebird": "^3.7.2",
    "body-parser": "^1.20.2",
    "cors": "^2.8.5",
    "dotenv": "^16.4.5",
    "email-templates": "^2.7.1",
    "express": "^4.19.2",
    "express-async-handler": "^1.2.0",
    "handlebars": "^4.7.8",
    "jsonwebtoken": "^9.0.2",
    "nanoid": "^3.3.4",
    "node-localstorage": "^3.0.5",
    "nodemailer": "^6.9.14",
    "nodemailer-juice": "^1.0.1",
    "nodemon": "^3.1.4",
    "path": "^0.12.7", */