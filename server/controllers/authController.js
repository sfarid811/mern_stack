const User = require("../models/user");
var jwt = require('jsonwebtoken');



const Register = async (req, res) => {
    
    const { name, email, password } = req.body;

    const userExists = await User.findOne({ email });

    if (userExists) {
        res.status(400)
        throw new Error('User already exists');
      }

      const user = await User.create({
        name,
        email,
        password,
      })

      if (user) {
        res.status(201).json({
          _id: user._id,
          name: user.name,
          email: user.email,
     
        })
      } else {
        res.status(400)
        throw new Error('Invalid user data')
      }

}

const Login = (req, res) => {

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

        res.cookie('token', token, {expire: '72h'})
        //res.cookie('token', token, {expire: new Date() + 8062000})

        const { _id, name, email, role } = user;

        return res.json({
            token, user: {_id, name, email, role}
        })

    })

}

const logOut = (req, res) => {
    

    res.clearCookie('token');

    res.json({
        message : "User Signout !"
    })

}
module.exports = {
    Register,
    Login,
    logOut
}