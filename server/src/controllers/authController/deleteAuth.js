const asyncHandler = require("express-async-handler");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const Auth = require("../../models/authModel");

/**
 * @description Removes a User
 * @route DELETE /api/user/deactivate
 * @access private
 */



       
  const deleteAuth = asyncHandler(async (req, res) => {
    const { id } = req.body;
    console.log(id)
    if (!id ) {
      res.status(400);
      throw new Error("id is mandatory!");
    }
    const auth = await Auth.findOne({ id : id });
    if (auth) {
      const response = await Auth.deleteOne({id : id})
      res.status(201).json({ message : `deleted session of id ${id}` });
    }
    else{
      
      res.status(201).json({ message : "not logged in" });
  
    }
  
  });


module.exports = { deleteAuth };