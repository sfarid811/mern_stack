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


const { userById } = require('../middlewares/user');
const { requireSignIn, isAuth, isAdmin } = require('../middlewares/auth');

router.post('/create/:userId', [requireSignIn, isAuth, isAdmin], createProduct);
//router.post('/create',  createProduct);




router.get('/all', getAllProducts)

router.get('/photo/:productId', photoProduct);

router.get('/:id', showProduct);

// pour la filtration de type checkbox 
router.post('/search', searchProduct);

// pour la recherche input
router.post('/keyword', searchByQueryType)

router.delete('/:productId/:userId', [requireSignIn, isAuth, isAdmin], removeProduct);

router.put('/:productId/:userId', [requireSignIn, isAuth, isAdmin],updateProduct);

router.param('userId', userById);
router.param('productId', productById);


module.exports = router;
