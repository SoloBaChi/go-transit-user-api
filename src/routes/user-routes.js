const express = require("express")
const {signup, login, userDetails} =require("../controllers/user-controllers")

const router = express.Router()

router.get("/signup",userDetails)
router.post('/signup', signup)
router.post('/login', login)

module.exports =  router;