const path = require('path')
const Promise = require('bluebird');
const  { EmailTemplate }= require("../../../configs/nodemailer")


function loadTemplate (templateName, contexts) {
    let template = new EmailTemplate(path.join(__dirname + "/../", 'templates', templateName));
    return Promise.all(contexts.map((context) => {
        return new Promise((resolve, reject) => {
            template.render(context, (err, result) => {
                if (err) reject(err);
                else resolve({
                    email: result,
                    context,
                });
            });
        });
    }));
}

module.exports = { loadTemplate }