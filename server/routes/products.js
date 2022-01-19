const express = require('express');
const Product = require('../models/product');


const router = express.Router();
const multer = require('multer');

const { createProduct,
  getAllProducts,
  photoProduct,
  productById,
  showProduct,
  removeProduct,
  updateProduct,
  searchProduct,
  searchByQueryType,
  getNewArrivals
} = require('../controllers/productController')

const storage = multer.diskStorage({
  destination: function (req, file, callback) {
    callback(null, '../client/public/images');
  },
  filename: function (req, file, callback) {
    callback(null, file.originalname);
  },
});

const upload = multer({ storage });

const { userById } = require('../middlewares/user');
const { requireSignIn, isAuth, isAdmin } = require('../middlewares/auth');

router.post('/create/:userId', [requireSignIn, isAuth, isAdmin], createProduct);


router.post('/addProduct/:userId', upload.single('photo'), [requireSignIn, isAuth, isAdmin], (req, res) => {
  try {
    const newProduct = new Product({
      name: req.body.name,
      description: req.body.description,
      price: req.body.price,
      quantity: req.body.quantity,
      category: req.body.category,
      photo: req.file.originalname
    })
    newProduct.save();
    res.status(200).json((newProduct))

  } catch (error) {
    res.status(500).json({
      error: "Product cannot be saved"
    })
  }
})

router.get('/allProducts', async (req, res) => {
  let sortBy = req.query.sortBy ? req.query.sortBy : '_id';
  let order = req.query.order ? req.query.order : 'asc';
  let limit = req.query.limit ? parseInt(req.query.limit) : 100;


  Product.find({})
    //    .select("-photo")
    .populate('category')
    .sort([[sortBy, order]])
    .limit(limit)
    .exec((err, products) => {

      if (err) {
        return res.status(404).json({
          error: "Products not found !"
        })
      }

      res.json({
        products
      })
    })
})

//edit product with Multer 

router.put('/edit/:id', upload.single('photo'), (req, res) => {
      const { id } = req.params;

      Product.findById(id)
      .then(product => {
        product.name =  req.body.name;
        product.description = req.body.description;
        product.price = req.body.price;
        product.quantity =  req.body.quantity;
        product.category = req.body.category;
        product.photo =  req.file.originalname;

        product.save()
        .then(() => res.status(200).json("Product Updated"))
        .catch(error => res.status(400).json(`Err ${error}`));
      })
      .catch(error => res.status(400).json(`Err ${error}`));
})


router.get('/listproducts', async (req, res) => {
  const pageSize = 4;
  const page = Number(req.query.pageNumber) || 1;

  const keyword = req.query.keyword
    ? {
        name: {
          $regex: req.query.keyword,
          $options: 'i',
        },
      }
    : {}

  const count = await Product.countDocuments({ ...keyword })
  const products = await Product.find({ ...keyword })
    .limit(pageSize)
    .skip(pageSize * (page - 1))

  res.json({ products, page, pages: Math.ceil(count / pageSize) })
 
 
});

router.get('/count', async (req, res) => {
  try {
    const products = await Product.find({})
      .populate('category')
      .limit(4);

    res.json({ products });
    // console.log(products.length) 3
  } catch (err) {
    console.log(err, 'productController.readAll error');
    res.status(500).json({
      error: 'Please try again later',
    });
  }
})
router.get('/all', getAllProducts)

router.get('/photo/:productId', photoProduct);

router.get('/:id', showProduct);

//get arrivals products
router.get('/filterArrivals', getNewArrivals);

// pour la filtration de type checkbox 
router.post('/search', searchProduct);

// pour la recherche input
router.post('/keyword', searchByQueryType)

router.delete('/:productId/:userId', [requireSignIn, isAuth, isAdmin], removeProduct);

router.put('/:productId/:userId', [requireSignIn, isAuth, isAdmin], updateProduct);

router.param('userId', userById);
router.param('productId', productById);


module.exports = router;
