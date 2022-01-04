const Product = require("../models/product");
const formidable = require("formidable");
const fs = require("fs");
const { extend, parseInt } = require("lodash");



const createProduct = (req, res) => {
  let form = new formidable.IncomingForm({ keepExtensions: true });
  form.parse(req, async (err, fields, files) => {
    if (err) return res.status(400).send({ error: "Image upload failed" });
    try {
      let product = new Product(fields);
      if (files.photo) {
        if (files.photo.size > 1000000)
          return res
            .status(400)
            .send({ error: "Upload failed, Max Size <= 1MB" });

        product.photo.data = fs.readFileSync(files.photo.path);
        product.photo.contentType = files.photo.type;
      }
      await product.save();
      // product.photo = undefined;
      return res.status(200).json({product});

     
    } catch (error) {

      res.status(400).json({message: "Product cannot be saved"});
    }
  });
};
// @desc    Fetch all products
// @route   GET /api/product
// @access  Public
const getAllProducts = async (req, res) => {
  let sortBy = req.query.sortBy ? req.query.sortBy : '_id';
  let order = req.query.order ? req.query.order : 'asc';
  let limit = req.query.limit ? parseInt(req.query.limit) : 100;

  
  Product.find({})
         .select("-photo")
         .populate('category')
         .sort([[sortBy, order]])
         .limit(limit)
         .exec((err, products) => {

            if(err) {
                return res.status(404).json({
                    error: "Products not found !"
                })
            }

            res.json({
                products
            })
         })

};

const searchProduct = async (req, res) => {
  let order = req.body.order ? req.body.order : "desc";
  let sortBy = req.body.sortBy ? req.body.sortBy : "_id";
  let limit = req.body.limit ? Number(req.body.limit) : 100;
  let skip = Number(req.body.skip);

  let findArgs = {};

  //console.log(req.body.filters);
  try {
    for (let key in req.body.filters) {
      if (req.body.filters[key].length > 0) {
        if (key === "price") {
          findArgs[key] = {
            $gte: req.body.filters[key][0],
            $lte: req.body.filters[key][1],
          };
        } else {
          findArgs[key] = req.body.filters[key];
        }
      }
    }

    const products = await Product.find(findArgs)
      // .select("-photo")
      .populate("category", "_id name")
      .sort([[sortBy, order]])
      .skip(skip)
      .limit(limit)
      .exec();

    return res.status(200).send({ size: products.length, products });
  } catch (error) {
    return res.status(400).send({ error: "Could not fetch products" });
  }

}



const productById = (req, res, next, id) => {

  Product.findById(id).exec((err, product) => {

    if (err || !product) {
      return res.status(404).json({
        error: 'Product not found !'
      })
    }
    req.product = product;
    next()
  })

}

const showProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const product = await Product.findById(id);
    res.status(200).json(product);
  } catch (error) {
    const { id } = req.params;
    res.status(404).json({
      message: `${id} don't exist`,
    });
  }
}



const photoProduct = (req, res) => {

  const { data, contentType } = req.product.photo;

  if (data) {

    res.set('Content-Type', contentType)

    return res.send(data)

  }

}


const removeProduct = async (req, res) => {

  let product = req.product

  product.remove((err, product) => {

      if(err) {
          return res.status(404).json({
              error: "Product not found !"
          })
      }

      res.status(204).json({})

  })
}

const updateProduct = async (req, res, next) => {
  let form = new formidable.IncomingForm({ keepExtensions: true });

  form.parse(req, async (err, fields, files) => {
    if (err)
      return res
        .status(400)
        .send({ error: "Invalid form data, update failed" });

    try {
      let product = req.product;
      product = extend(product, fields);
      if (files.photo?.size) {
        if (files.photo?.size > 1000000)
          return res
            .status(400)
            .send({ error: "Upload failed, Max Size <= 1MB" });

        product.photo.data = fs.readFileSync(files.photo.path);
        product.photo.contentType = files.photo.type;
      }
      await product.save();
      // product.photo = undefined;
      return res.status(200).send(product);
    } catch (error) {
      next(error);
    }
  });
}


const searchByQueryType = async (req, res) => {
 
  const { type, query } = req.body;

try {
  let products;

  switch (type) {
    case 'text':
      products = await Product.find({ $text: { $search: query } });
      break;
    case 'category':
      products = await Product.find({ name: query });
      break;
  }
  
  if (!products.length > 0) {
    products = await Product.find({});
  }

  res.json({ products });
} catch (err) {
  // console.log(err, 'filter Controller.searchByQueryType error');
  res.status(500).json({
    errorMessage: 'Please try again later',
  });
}
}

const getNewArrivals = async (req, res) => {
	const sortBy = req.query.sortBy ? req.query.sortBy : 'desc';
	const limit = req.query.limit ? parseInt(req.query.limit) : parseInt(3);

	try {
		const newArrivals = await Product.find({})
			.sort({ createdAt: sortBy })
			.limit(limit);

		res.json({
			newArrivals,
		});
	} catch (err) {
		console.log(err, 'filter Controller.getNewArrivals error');
		res.status(500).json({
			errorMessage: 'Please try again later',
		});
	}
}


module.exports = {
  createProduct,
  getAllProducts,
  photoProduct,
  productById,
  showProduct,
  removeProduct,
  updateProduct,
  searchProduct,
  searchByQueryType,
  getNewArrivals
  

};
