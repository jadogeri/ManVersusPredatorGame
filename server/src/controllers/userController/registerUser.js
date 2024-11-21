const asyncHandler = require("express-async-handler");
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

