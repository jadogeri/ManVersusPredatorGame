const asyncHandler = require("express-async-handler");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require("../../models/userModel");
const Auth = require("../../models/authModel");
const {deleteAuth} = require("../../helpers/deleteAuth");

//@desc Logout user
//@route POST /api/user/logout
//@access public
const logoutUser = asyncHandler(async (req, res) => {
 
    const { token } = req.body;
    if (!token) {
      res.status(400);
      throw new Error("token is mandatory!");
    }

    let authUser = await Auth.findOne({ token : token });    

    console.log("logout user ===",authUser)
    if(!authUser){  
        res.status(401).json({ message : `not logged in`});
    }
    else{
        let registeredUser = await User.findById(authUser.id)
        deleteAuth(token )
       
        res.status(200).json({ message : `logged out user ${registeredUser.username}`});
        
    }
  

    //   res.status(401);
    //   throw new Error("email or password is not valid");
 
})
module.exports = { logoutUser };