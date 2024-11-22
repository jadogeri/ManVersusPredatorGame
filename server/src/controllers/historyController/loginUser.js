const asyncHandler = require("express-async-handler");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require("../../models/userModel");
const {addAuth} = require("../../helpers/addAuth");

//@desc Login user
//@route POST /api/user/login
//@access public
const loginUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;
  console.log(email, password)
  if (!email || !password) {
    res.status(400);
    throw new Error("All fields are mandatory!");
  }
  let user ;
  if(email){
    user = await User.findOne({ email : email});
    console.log(user)
  }
 
  if(!user){
     
      res.status(400);
      throw new Error(`${email} does  not exist`);
    
  }

  console.log( process.env.ACCESS_TOKEN_SECERT )
  //compare password with hashedpassword
  if (user && (await bcrypt.compare(password, user.password))) {
    const accessToken = jwt.sign(
      {
        user: {
          username: user.username,
          email: user.email,
          id: user._id,
        },
      },
      process.env.ACCESS_TOKEN_SECERT,
      { expiresIn: "60m" }
    )

console.log("before calling addauth func")
   addAuth(user._id, accessToken)
   .then(()=>{
    res.status(200).json({ token : accessToken, id : user._id, username : user.username, email : user.email});

   })
   .catch((err)=>{
    res.status(401).json({err : err})
   })
   //res.status(200).json({ token : accessToken, id : user._id, username : user.username, email : user.email});
  } else {
    res.status(401);
    throw new Error("email or password is not valid");
  }
});


module.exports = { loginUser };