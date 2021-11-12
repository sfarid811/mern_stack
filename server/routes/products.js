const express = require('express');


const router = express.Router();

const { createProduct, 
    getAllProducts, 
    photoProduct, 
    productById,
     showProduct, 
     removeProduct,
     updateProduct,
     searchProduct,
     searchByQueryType
    } = require('../controllers/productController')
// const {searchByQueryType} = require('../controllers/filterController');

router.post('/create', createProduct);

router.get('/all', getAllProducts)

router.get('/photo/:productId', photoProduct);

router.get('/:id', showProduct);

// pour la filtration de type checkbox 
router.post('/search', searchProduct);

// pour la recherche input
router.post('/keyword', searchByQueryType)

router.delete('/:id', removeProduct);

router.put('/:productId', updateProduct)

router.param('productId', productById)

module.exports = router;
