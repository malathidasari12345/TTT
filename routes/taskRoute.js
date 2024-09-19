const express = require("express")
const { newtask, gettasks, updatetask, deletetask } = require("../controllers/task")
const router = express.Router()

//  routes...
router.post("/new", newtask)
router.get("/all", gettasks)
router.put("/:id", updatetask)
router.delete("/:id",deletetask)

module.exports = router