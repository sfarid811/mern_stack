const express = require('express');


const router = express.Router();

const {Register, Login, logOut } = require('../controllers/authController');
const {userSignUpValidator} = require('../middlewares/userValidator');
const {requireSignIn} = require('../middlewares/auth');

router.post('/register', [userSignUpValidator], Register)
router.post('/login', Login)
router.get('/signout', logOut)
router.get('/hello', requireSignIn, (req, res) => {
    res.send('hi guys')
})


module.exports = router;
