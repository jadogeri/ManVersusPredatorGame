const {registerUser} = require("./registerUser");
const {logoutUser} = require("./logoutUser");
const {loginUser} = require("./loginUser");
const {deactivateUser} = require("./deactivateUser");
const {resetUser} = require("./resetUser");
const {forgotUser} = require("./forgotUser");


module.exports = { registerUser, loginUser, logoutUser, resetUser, forgotUser, deactivateUser };
