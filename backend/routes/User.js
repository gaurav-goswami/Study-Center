const router = require('express').Router();
const {isAuthenticated} = require('../middlewares/auth');

const AuthController = require('../controllers/Auth');

router.post("/signup" , AuthController.signUp)
router.post("/send-otp" , AuthController.sendOtp);
router.post("/login" , AuthController.login)
router.put("/change-password" , isAuthenticated , AuthController.changePassword);
router.post("/reset-password-token" , AuthController.resetPasswordToken);
router.put("/reset-password" , AuthController.resetPassword);

module.exports = router;