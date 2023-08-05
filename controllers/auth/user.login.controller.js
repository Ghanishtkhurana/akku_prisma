const prisma = require("../../prisma/index")
const cookieToken = require("../../utils/cookieToken")


const userLogin = async(req,res)=>{
    try {
        const {email,password} = req.body
        if(!email || !password){
            return res.status(400).json({
                success : false ,
                message : "Please provide required fields"
            })
        }
        else{
            const findUser = await prisma.user.findUnique({
                where : {
                    email
                }
            })
            if(!findUser){
                return res.status(400).json({
                    success : false ,
                    message : "User not found this email"
                })
            }
            else if(findUser.password !== password){
                return res.status(400).json({
                    success : false ,
                    message : "Incorrect password",
                })
            }
            else if(findUser.password == password){
                cookieToken(findUser,res)
                // res.send("login success")
            }
        }
    } catch (error) {
        res.status(400).json({
            success : false ,
            message : error.message
        })       
    }
}

module.exports = userLogin