const asyncHandler = require("express-async-handler");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require("../../models/userModel");
const Auth = require("../../models/authModel");



/**
 * @description Reset a User
 * @route PUT /api/user/reset
 * @access public
 */


const resetUser = asyncHandler(async (req, res) => {    
    console.log("calling reset user")
    console.log(req.body)
    const {email, new_password, current_password } = req.body;
    if (!email || !new_password || ! current_password) {
      res.status(400);
      throw new Error("All fields are mandatory!");
    }
       
    const registeredUser = await User.findOne({ email });
  if (!registeredUser) {
    res.status(400);
    throw new Error("Email not registered!");
  }


  if (registeredUser && (await bcrypt.compare(current_password, registeredUser.password))) {

  //Hash password
  const hashedPassword = await bcrypt.hash(new_password, parseInt(process.env.BCRYPT_SALT_KEY));
  console.log("Hashed Password: ", hashedPassword);

console.log("before calling reset password")
User.updateOne({_id : registeredUser._id},{$set : {password : hashedPassword}})
.then(()=>{
    res.status(200).json({message : `successful reset of password`})
})
   //res.status(200).json({ token : accessToken, id : user._id, username : user.username, email : user.email});
  } else {
    res.status(401);
    throw new Error("password is not valid");
  }
    res.status(200).json({ message: emailAvailable });

   
});


module.exports = { resetUser };


/**
 * 
 * const asyncHandler = require("express-async-handler");
const bcrypt = require("bcrypt");
const User = require("../../models/userModel");

//@desc Register a user
//@route POST /api/user/register
//@access public
const registerUser = asyncHandler(async (req, res) => {
  console.log("called register")
  const { username, email, password } = req.body;
  if (!username || !email || !password) {
    res.status(400);
    throw new Error("All fields are mandatory!");
  }
  const emailAvailable = await User.findOne({ email });
  if (emailAvailable) {
    res.status(400);
    throw new Error("Email already registered!");
  }
  const usernameAvailable = await User.findOne({ username });
  if (usernameAvailable) {
    res.status(400);
    throw new Error("Username already registered!");
  }


  //Hash password
  const hashedPassword = await bcrypt.hash(password, parseInt(process.env.BCRYPT_SALT_KEY));
  console.log("Hashed Password: ", hashedPassword);
  const user = await User.create({
    username,
    email,
    password: hashedPassword,
  });

  console.log(`User created ${user}`);
  if (user) {
    res.status(201).json({ _id: user.id, email: user.email });
  } else {
    res.status(400);
    throw new Error("User data is not valid");
  }
  
});

module.exports = { registerUser};
 */
