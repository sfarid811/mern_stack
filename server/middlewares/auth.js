const expressJWT = require('express-jwt');




const requireSignIn = expressJWT({

    secret: process.env.JWT_SECRET,

})



module.exports = {
requireSignIn
}