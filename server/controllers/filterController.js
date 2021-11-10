const Product = require("../models/product");

const searchByQueryType = async (req, res) => {
 

    const { type, query } = req.body;

	try {
		let products;

		switch (type) {
			case 'text':
				products = await Product.find({ $text: { $search: query } });
				break;
			case 'category':
				products = await Product.find({ productCategory: query });
				break;
		}

		if (!products.length > 0) {
			products = await Product.find({});
		}

		res.json({ products });
	} catch (err) {
		console.log(err, 'filter Controller.searchByQueryType error');
		res.status(500).json({
			errorMessage: 'Please try again later',
		});
	}
}


module.exports = {
    searchByQueryType
};
