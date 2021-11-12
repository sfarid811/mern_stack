const getOneUser = (req, res) => {
    req.profile.salt = undefined;
    req.profile.hashed_password = undefined;
    
    res.json({
        user : req.profile
    })

}



module.exports = {
    getOneUser
}