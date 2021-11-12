const Category = require("../models/category");



const createCategory = (req, res) => {
    const category = new Category(req.body);

    category.save((err, category) => {

        if (err) {
            return res.status(400).json({
                error: 'bad Request !'
            })
        }

        res.json({
            cartegory: category
        })
    })
}

const getAllCategories = async (req, res) => {
    try {
        const categories = await Category.find({});
        return res.status(200).json({categories});
    } catch (error) {
        return res.status(400).send({
            error: "Failed to list categories"
        });
    }
};

module.exports = {
    createCategory,
    getAllCategories
};
