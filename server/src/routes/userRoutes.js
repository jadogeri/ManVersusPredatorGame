const express = require('express')
const {validateTokenBody} = require("../middlewares/validateBodyTokenHandler")

const router = express.Router();

const {registerUser, 
      loginUser, 
      logoutUser, 
      deactivateUser, 
      forgotUser, 
      resetUser} = require("../controllers/userController/index");

router.post("/register",registerUser);

router.post("/login",loginUser);

router.delete("/logout",validateTokenBody,logoutUser);

router.delete("/deactivate",deactivateUser);

router.put("/reset",resetUser);

router.put("/forgot",forgotUser);


module.exports = router;