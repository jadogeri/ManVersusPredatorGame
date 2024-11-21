const express = require('express')
const router = express.Router();

const {addAuth, 
      deleteAuth} = require("../controllers/authController/index");

router.post("/add",addAuth);

router.delete("/delete",deleteAuth);

module.exports = router;