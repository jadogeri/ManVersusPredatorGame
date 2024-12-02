const express = require('express')
const {validateTokenBody} = require("../middlewares/validateBodyTokenHandler")

const router = express.Router();

const {registerTest, loginTest, logoutTest, deactivateTest, testTest} = require("../controllers/testController");

router.post("/register",registerTest);

router.post("/login",loginTest);

router.post("/logout",validateTokenBody,logoutTest);

router.delete("/deactivate",deactivateTest);

router.get("/test",testTest);





module.exports = router;