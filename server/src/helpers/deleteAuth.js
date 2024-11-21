
const Auth = require("../models/authModel");

/**
 * @description Removes a User
 * @route DELETE /api/user/deactivate
 * @access private
 */



       
  const deleteAuth = async (token) => {

 
       await Auth.deleteOne({token : token})    
   };


module.exports = { deleteAuth };



