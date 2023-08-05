const express = require("express")
const app = express.Router()
const userController = require("../../controllers/auth/userSignInController")
const userLogin = require("../../controllers/auth/user.login.controller")
const userLogout = require("../../controllers/auth/user.logout.controller")
const authMiddleware = require("../../middlewares/auth.middleware")
const userGet = require("../../controllers/auth/user.privateCheck")

app.post("/signin",userController)
app.post("/login",userLogin)
app.post("/logout",userLogout)
app.get("/user-auth",authMiddleware,userGet)

module.exports = app
