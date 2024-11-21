
const {twilioAccountSid, twilioAuthToken, twilioPhoneNumber} = require("../../configs/twilio")
const sendSms = (phone, message) => {
    console.log("account sid === ", twilioAccountSid)
    console.log("account auth token === ", twilioAuthToken)

  const client = require('twilio')(twilioAccountSid, twilioAuthToken);
  client.messages
    .create({
       body: message,
       from: twilioPhoneNumber,
       to: phone
     })
    .then(message => console.log("message sid === ",message.sid))
    .catch(err => { console.log("error === ", err)});
}

module.exports = sendSms;
