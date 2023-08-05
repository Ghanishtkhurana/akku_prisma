const jwt = require("jsonwebtoken")

const authMiddleware = (req,res,next)=>{
    try {
        let token = req?.cookie?.token || req.headers.token 
        // console.log("token in auth",token)
        if(!token){
            return res.status(400).json({
                success : false ,
                message : "Please login first"
            })
        }
        else{
            const decode = jwt.verify(token,process.env.JWT_SECRET)
            console.log("decode",decode)
            if(decode.userid )
            next()
        }
    } catch (error) {
        res.status(400).json({
            success : false ,
            message : error.message
        })
    }
}

module.exports = authMiddleware