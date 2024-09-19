const express = require('express');
const app = express();
const db = require('./data/database');
const taskrouter = require('./routes/taskRoute')
const userregister = require("./routes/user")
// middleware
app.use(express.json());

// routes
app.get("/",(req,res)=>{
    res.send("hello,Welcome to Application")
})
app.use("/task", taskrouter)
app.use("/user", userregister )

app.listen(5000, () => {
    console.log("Server running on port 5000");
});
