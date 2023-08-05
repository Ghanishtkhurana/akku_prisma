const prisma = require("../../prisma/index")
const cookieToken = require("../../utils/cookieToken")

const userSignIn = async(req,res)=>{
    try {
        const {name,email,password} = req.body
        if(!name || !email || !password)
        {
            return res.status(400).json({
                success : false ,
                message : "Please provide all fields"
            })
        }
        else{
            const user = await prisma.user.create({
                data : {
                    name ,
                    email,
                    password
                }
            })
            //cookieToken(user,res)
            res.status(200).json({
                success : true ,
                message : "user created successfully"
            })
        }
    } catch (error) {
        res.status(404).json({
            success : false ,
            message : error.message
        })
    }
}

module.exports = userSignIn