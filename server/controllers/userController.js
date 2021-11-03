





const getOneUser = (req, res) => {


    res.json({
        user : req.profile
    })

}








module.exports = {
    getOneUser
}