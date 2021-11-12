const express = require('express');


const router = express.Router();
const {userById} = require('../middlewares/user');
const {requireSignIn, isAuth, isAdmin} = require('../middlewares/auth');
const {createCategory, getAllCategories} = require('../controllers/categoryController');


router.post('/create/:userId',  [requireSignIn, isAuth, isAdmin], createCategory);
router.get('/all', getAllCategories);
router.param('userId', userById);


module.exports = router;