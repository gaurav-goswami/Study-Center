const router = require("express").Router();
const {isAuthenticated} = require('../middlewares/auth');
const ProfileController = require('../controllers/Profile');

router.put("/update-profile" , isAuthenticated , ProfileController.updateProfile);
router.delete("/delete-profile" , isAuthenticated , ProfileController.deleteAccount );
router.put("/update-avatar" , isAuthenticated , ProfileController.updateDisplayPicture);
router.get("/get-user-details" , isAuthenticated , ProfileController.getAllUserDetails);
router.get("/get-enrolled-courses" , isAuthenticated , ProfileController.getEnrolledCourses);

module.exports = router;