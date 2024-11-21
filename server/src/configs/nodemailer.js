/**
 * @author      Joseph Adogeri
 * @since       27-AUG-2024
 * @version     1.0
 * @description configuration setting for nodemailer 
 *  
 */
const creds = { user:process.env.NODEMAILER_USER,
                pass :process.env.NODEMAILER_PASS};
                
const inLineCss = require('nodemailer-juice');
const nodemailer = require('nodemailer')
const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: creds.user,
            pass: creds.pass,
        },
    }).use('compile', inLineCss());
    

const EmailTemplate = require('email-templates').EmailTemplate
const path = require('path')
const Promise = require('bluebird');

module.exports = {nodemailer, transporter, EmailTemplate, path, Promise}