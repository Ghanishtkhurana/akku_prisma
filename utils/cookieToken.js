const getJwtToken = require("../helpers/getJwtToken")

const cookieToken = (user,res)=>{
    const token = getJwtToken(user.id)

    const options = {
        expires : new Date(
            Date.now() + 3 * 24 * 24 * 60 * 1000
        ) ,
        httpOnly : true
    }
    user.password = undefined
    res.status(200).cookie("token",token,options).json({
        success : true ,
        message : "Login success" ,
        token : token ,
        user : user
    })
}

module.exports = cookieToken