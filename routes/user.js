const express = require("express")
const { register } = require("../controllers/user")
const router = express.Router()

//  routes...
router.post("/register", register)


module.exports = router