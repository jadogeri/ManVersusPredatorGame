const asyncHandler = require('express-async-handler');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
//const { nanoid } = require("nanoid");

/**
 * @description Post Register 
 * @route POST /api/Test/register
 * @access public
 */

const registerTest = asyncHandler(async (req, res) => {
   
    res.status(200).json({message : `registered Test`});

});


/**
 * @description Login a Test
 * @route POST /api/user/login
 * @access public
 */

const loginTest = asyncHandler(async (req, res) => {
    res.status(200).json({message : `logged in Test`});

  
});

/**
 * @description Logout a Test
 * @route PUT /api/user/logout
 * @access public
 */


const logoutTest = asyncHandler(async (req, res) => {
    res.status(200).json({message : `logged out Test`});


 });

/**
 * @description Removes a Test
 * @route DELETE /api/user/deactivate
 * @access private
 */


const deactivateTest = asyncHandler(async (req, res) => {     
       


     res.status(200).json({message : `deactivated Test`});
      
});

const testTest = asyncHandler(async (req, res) => {     
       


    res.status(200).json({message : `test Test`});
     
});



module.exports = {registerTest, loginTest, logoutTest, deactivateTest, testTest}