const expressJWT = require('express-jwt');
require('dotenv').config();




const requireSignIn = expressJWT({

    secret: process.env.JWT_SECRET,
    algorithms : ["HS256"],
    userProperty : 'auth'
})



module.exports = {
requireSignIn
}