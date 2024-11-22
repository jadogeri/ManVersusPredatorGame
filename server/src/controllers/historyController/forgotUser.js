const asyncHandler = require("express-async-handler");
const User = require("../../models/userModel");
const { loadTemplate } = require('../../services/mail/utils/loadTemplate');
const { sendEmail } = require("../../services/mail/utils/sendEmail");
const { nanoid } = require("nanoid");
const bcrypt = require("bcrypt")
const sendSms = require("../../services/phone/sendSms")


/**
 * @description forgot password of User
 * @route PUT /api/user/forgot
 * @access public
 */


const forgotUser = asyncHandler(async (req, res) => {    
    let uuid = "";
    let hashedPassword = "";
    const { email } = req.body;
    if (!email) {
      res.status(400);
      throw new Error("email is mandatory!");
    }
    let user  = await User.findOne({ email });
  
    if(!user){       
        res.status(400);
        throw new Error(`${email} does  not exist`);      
    }
    else{

        //generate unique password
        uuid = nanoid(parseInt(process.env.NANOID_SIZE));
        console.log("uuid == ", uuid)
       
        bcrypt.hash(uuid,parseInt(process.env.BCRYPT_SALT_KEY), (err, hash) => {         
      
            if (err) {
                return err;
            }    
            hashedPassword = hash  
            User.updateOne({_id : user._id},{$set : {password : hashedPassword}})
            .then(()=>{
                res.status(200).json({message : `password has been changed check email`})
            })
            .then(()=>{
                //send text to recipient
                
                
                /**
                 * #TODO 
                 * IMPLEMENT TWILIO TEXT MESSAGING TO RECIPIENT
                 */
                //const welcomeMessage = 'Mike this is Joseph sending this message from express project';
                //sendSms("5045414308", welcomeMessage);
                //send email to recipient
                let recipient = [{name : user.username, email: user.email, password : uuid}]
                let companyName = 'DeauxBoisSweets'
                loadTemplate('forgot-password', recipient).then((results) => {
                    results.map((result) => {
                                sendEmail({
                            to: result.context.email,
                            from: companyName,
                            subject: result.email.subject,
                            html: result.email.html,
                            text: result.email.text,
                            
                        }).then(()=>{console.log("sent!!")})
                        console.log(JSON.stringify(result,null,4))
                
                    });
                }).then(() => {
                    console.log('Email Sent ...!');
                }).catch((e)=>{
                    console.log("Error!!", e)
                })

            }).catch((e)=>{  console.log("Error!!", e)
            })
            .catch((e)=>{ console.log(e)})
        })                          
                
        
    }

     //res.status(200).json({ token : accessToken, id : user._id, username : user.username, email : user.email});    
   
});



module.exports = { forgotUser };

