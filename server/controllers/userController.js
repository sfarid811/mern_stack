const User = require("../models/user");
var jwt = require('jsonwebtoken');



const SignUp = (req, res) => {

    const user = new User(req.body);

    user.save((err, user) => {
        if(err){
            return res.status(400).send(err)
        }
        res.send(user);

    })

}

const SignIn = (req, res) => {

    const { email, password } = req.body;

    User.findOne({email}, (err, user) => {
        
        if(err || !user) {
            return res.status(400).json({
                error: 'User not found with this email, Please SignUp!'
            })
        }

        if(!user.authenticate(password)) {
            return res.status(401).json({
                error: 'Email and Password dont Match !'
            })
        }

        const token = jwt.sign({_id: user._id, role: user.role}, process.env.JWT_SECRET);

        res.cookie('token', token, {expire: new Date() + 8062000})

        const { _id, name, email, role } = user;

        return res.json({
            token, user: {_id, name, email, role}
        })

    })

}

const signOut = (req, res) => {
    

    res.clearCookie('token');

    res.json({
        message : "User Signout !"
    })

}
module.exports = {
    SignUp,
    SignIn,
    signOut
}