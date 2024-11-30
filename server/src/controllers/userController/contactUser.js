const asyncHandler = require("express-async-handler");
const User = require("../../models/userModel");
const { loadTemplate } = require('../../services/mail/utils/loadTemplate');
const { sendEmail } = require("../../services/mail/utils/sendEmail");
const sendSms = require("../../services/phone/sendSms")


/**
 * @description forgot password of User
 * @route POST /api/user/contact
 * @access public
 */


const contactUser = asyncHandler(async (req, res) => {    

    const { email,name,subject,message } = req.body;
    if (!email||!name||!subject||!message) {
      res.status(400);
      throw new Error("All fields are mandatory!");
    }
    let user  = await User.findOne({ email });
  
    if(!user){       
        res.status(400);
        throw new Error(`${email} does  not exist`);      
    }
    else{


                /**
                 * #TODO 
                 * IMPLEMENT TWILIO TEXT MESSAGING TO RECIPIENT
                 */
                //const welcomeMessage = 'Mike this is Joseph sending this message from express project';
                //sendSms("5045414308", welcomeMessage);
                //send email to recipient
                let recipient = [{name : name, email: email, subject : subject,message : message}]
                let companyName = 'ManVersusPredator'
                loadTemplate('contact-message', recipient).then((results) => {
                    console.log(JSON.stringify(results))
                    results.map((result) => {
                                sendEmail({
                            to: result.context.email,
                            from: companyName,
                            subject: result.email.subject,
                            html: result.email.html,
                            text: result.email.text
                            
                        }).then(()=>{console.log("sent!!")})
                        console.log(JSON.stringify(result,null,4))
                
                    });
                }).then(() => {
                    console.log('Email Sent ...!');
                    res.status(200).json({message:"message sent!!"})
                    
                }).catch((e)=>{
                    console.log("Error!!", e)
                })

            
                
        
    }

     //res.status(200).json({ token : accessToken, id : user._id, username : user.username, email : user.email});    
   
});



module.exports = { contactUser };

