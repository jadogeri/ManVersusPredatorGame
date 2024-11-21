const asyncHandler = require("express-async-handler");
const bcrypt = require("bcrypt");
const Auth = require("../../models/authModel");

//@desc Register a user
//@route POST /api/auth/add
//@access public
const addAuth = asyncHandler(async (req, res) => {
  const { id, token } = req.body;
  console.log(id, token)
  if (!id || !token) {
    res.status(400);
    throw new Error("All fields are mandatory!");
  }
  const auth = await Auth.findOne({ id : id });
  if (auth) {
    const response = await Auth.updateOne({id : id},{$set : {token : token}})
    res.status(201).json({ message : "updated token in database" });
  }
  else{
    Auth.insertMany({id : id , token : token})
    res.status(201).json({ message : "inserted record to database" });

  }

});

module.exports = { addAuth};