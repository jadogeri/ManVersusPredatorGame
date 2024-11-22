const asyncHandler = require("express-async-handler");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require("../../models/userModel");
const {deleteAuth} = require("../../helpers/deleteAuth");
const Auth = require("../../models/authModel")

/**
 * @description Removes a User
 * @route DELETE /api/user/deactivate
 * @access private
 */


const deactivateUser = asyncHandler(async (req, res) => {    
       
  const { confirm_delete , email, password } = req.body;
  console.log(confirm_delete,email,password)
  if ( !email || confirm_delete === null || !password) {
    res.status(400);
    throw new Error("All fields are mandatory!");
  }

  if ( !confirm_delete) {
    res.status(400);
    throw new Error("must confirm deletion of account");
  }
  
   const  user = await User.findOne({ email });
console.log(user)
  //compare password with hashedpassword
  if (user && (await bcrypt.compare(password, user.password))) {
    await User.deleteOne({email : email })
    let token = await Auth.findOne({id : user._id})
    deleteAuth(token)
    res.status(200).json({ message: `deleted account of user : ${user.username}` })

  } else {
    res.status(401);
    throw new Error("email or password is not valid");
  }
   
});



module.exports = { deactivateUser };