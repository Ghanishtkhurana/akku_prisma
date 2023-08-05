const cookieParser = require("cookie-parser")
const express = require("express")
require("dotenv").config()
const app = express()
const userRoute = require("./routes/user/user.router")
const cors = require("cors")
// middlewares
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended : true}))
//cookie
app.use(cookieParser())
//route handler
app.use("/user",userRoute)

app.get("/",(req,res)=>{
    res.send("Homepage")
})

app.listen(8080,()=>{
    console.log("server is running on port 8080")
})