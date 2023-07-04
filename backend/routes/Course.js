const router = require("express").Router();
const {isAuthenticated , isAdmin, isInstructor, isStudent} = require("../middlewares/auth");
const CourseController = require("../controllers/Course");
const CategoryController = require("../controllers/Category");
const SectionController = require("../controllers/Section")
const SubSectionController = require("../controllers/SubSectionController");
const RatingAndReviewController = require("../controllers/RatingAndReview");


router.get("/all-course" , CourseController.getAllCourses)
router.get("/get-course-details/:courseID" , CourseController.getCourseDetails );

// -------------------------------------------------------------------------------------------------------------------------
// Instructor only

router.post("/create-course" , isAuthenticated , isInstructor , CourseController.createCourse);

// section
router.post("/add-section" , isAuthenticated , isInstructor , SectionController.createSection);
router.put("/update-section" , isAuthenticated , isInstructor, SectionController.updateSection);
router.delete("/delete-section/:sectionId" , isAuthenticated , isInstructor, SectionController.deleteSection);

// sub-section

router.post("/add-sub-section" , isAuthenticated , isInstructor, SubSectionController.createSubSection);
router.put("/update-sub-section" , isAuthenticated , isInstructor, SubSectionController.updateSubSection);
router.delete("/delete-sub-section/:subSectionId" , isAuthenticated , isInstructor, SubSectionController.deleteSubSection);
// -------------------------------------------------------------------------------------------------------------------------


// -------------------------------------------------------------------------------------------------------------------------
// Admin Only (for creating category)

router.post("/create-category", isAuthenticated, isAdmin, CategoryController.createCategory)
router.get("/show-all-categories", CategoryController.getAllCategory)
router.post("/get-category-page-details", CategoryController.categoryPageDetails)
// -------------------------------------------------------------------------------------------------------------------------


// Rating and reviews

router.post("/create-rating", isAuthenticated, isStudent, RatingAndReviewController.createRatingAndReview);
router.get("/get-average-rating", RatingAndReviewController.getAverageRatings)
router.get("/get-reviews", RatingAndReviewController.getAllRatingAndReviews);


module.exports = router;