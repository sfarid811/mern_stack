const express = require('express');


const router = express.Router();

const { createProduct, 
    getAllProducts, 
    photoProduct, 
    productById,
     showProduct, 
     removeProduct,
     updateProduct
    } = require('../controllers/productController')


router.post('/create', createProduct);
router.get('/all', getAllProducts);
router.get('/photo/:productId', photoProduct);
router.get('/:id', showProduct);
router.delete('/:id', removeProduct);
router.put('/:productId', updateProduct)
router.param('productId', productById)

module.exports = router;
