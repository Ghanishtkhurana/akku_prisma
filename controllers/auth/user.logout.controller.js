const userLogout = async(req,res)=>{
    try {
        res.clearCookie('token')
        res.status(200).json({
            success : true ,
            message : "Logout successfully"
        })
    } catch (error) {
        res.status(400).json({
            success : false ,
            message : error.message
        })
    }
}

module.exports = userLogout