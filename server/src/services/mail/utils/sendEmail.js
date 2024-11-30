const { transporter } = require("../../../configs/nodemailer")

function sendEmail (obj) {
    return transporter.sendMail(obj);
}


module.exports = { sendEmail };

