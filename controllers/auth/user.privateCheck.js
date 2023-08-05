const userGet = async(req,res)=>{
    try {
        res.status(200).json({
            success : true ,
            message : "user with auth middleware request"
        })
    } catch (error) {
        res.status(400).json({
            success : false ,
            message : error.message
        })
    }
}

module.exports = userGet