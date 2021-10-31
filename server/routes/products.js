const express = require('express');


const router = express.Router();

const { createProduct, getAllProducts, photoProduct, productById, showProduct } = require('../controllers/productController')


router.post('/create', createProduct);
router.get('/', getAllProducts);
router.get('/photo/:productId', photoProduct);
router.get('/:id', showProduct);

router.param('productId', productById)

module.exports = router;
