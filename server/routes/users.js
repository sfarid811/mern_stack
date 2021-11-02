const express = require('express');


const router = express.Router();

const {SignUp, SignIn, signOut } = require('../controllers/userController');
const {userSignUpValidator} = require('../middlewares/userValidator');

router.post('/signup', [userSignUpValidator], SignUp)
router.post('/signin', SignIn)
router.get('/signout', signOut)


module.exports = router;
