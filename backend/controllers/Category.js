const Category = require('../models/Category');

class CategoryController {

    // create tag

    static createCategory = async (req, res) => {

        try {

            // admin only

            const { name, description } = req.body;

            if (!name || !description) return res.status(400).json({
                success: false,
                status: 400,
                message: "All fields are required"
            })

            const category = await Category.create({ name, description });

            return res.status(201).json({
                success: true,
                status: 201,
                message: "Category created successfully"
            })

        } catch (error) {
            console.log("Error in create category", error.message);
            return res.status(500).json({
                success: false,
                status: 500,
                message: error.message
            })
        }

    }

    // get all tags

    static getAllCategory = async (req, res) => {

        try {

            const tags = await Category.find({});

            if(!tags) return res.status(400).json({
                success : false, 
                status : 400,
                message : "No category available!"
            })

            return res.status(200).json({
                success : true,
                status : 200,
                message : "Categories fetched",
                totalCategories : tags.length,
                tags
            })

        } catch (error) {
            console.log("Error in get category", error.message);
            return res.status(500).json({
                success: false,
                status: 500,
                message: error.message
            })
        }

    }

    static categoryPageDetails = async (req, res) => {
        try {

            const {categoryId} = req.body;
            const selectedCategory = await Category.findById(categoryId).populate("courses").exec();

            if(!selectedCategory) return res.status(404).json({
                success : false,
                status : 404,
                message : "Course not found"
            });

            const differentCategories = await Category.findById({_id : {$ne : categoryId}}).populate("courses").exec();   
            
            return res.status(200).json({
                success : true,
                status : 200,
                differentCategories, 
                selectedCategory
            })
            
        } catch (error) {
            console.log("error in categoryPageDetails" , error.message);
            return res.status(500).json({
                success : false,
                status : 500,
                message : error.message
            })
        }
    }

}

module.exports = CategoryController;