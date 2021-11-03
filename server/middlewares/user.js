const User = require('../models/user')

const userById = (req, res, next, id) => {

        User.findById(id).exec((err, user) => {
            if(err || !user) {
                return res.status(404).json({
                    
                    message: "User Not Found"
                })
            }

            req.profile = user;

            console.log(user)

            next();
        })

}



module.exports = {
    userById
}