
const Auth = require("../models/authModel");

//@desc Register a user
//@route POST /api/auth/add
//@access public
const addAuth = async (id,token) => {
console.log("inside of addAuth func")
  console.log(id, token)
  if (!id || !token) {

    throw new Error("All fields are mandatory!");
  }
  const auth = await Auth.findOne({ id : id });
  if (auth) {
    await Auth.updateOne({id : id},{$set : {token : token}})
   
  }
  else{
    Auth.insertMany({id : id , token : token})
   
  }

};

module.exports = { addAuth};