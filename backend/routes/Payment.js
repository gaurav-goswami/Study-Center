const router = require("express").Router();
const {capturePayment , verifySignature} = require("../controllers/Payments");
const {isAuthenticated , isStudent} = require("../middlewares/auth");

router.post("/capture-payment", isAuthenticated, isStudent, capturePayment)
router.post("/verify-signature", verifySignature)

module.exports = router