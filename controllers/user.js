const USER = require("../models/user")
const bcrypt = require('bcrypt');

const register = async (req, res) => {
    try {
        const { name, email, password } = req.body;
        if(!email || !password || !name){
    return res.status(400).json({
        success : false,
        message:"all fields required"
    })
}
        // Check if the user already exists
        let user = await USER.findOne({ email });
        if (user) {
            return res.status(408).json({
                success: false,
                message: "User already exists"
            });
        }
        // Hash the password
        const hashedPassword = await bcrypt.hash(password, 10);
        // Create a new user
        user = await USER.create({
            name,
            email,
            password: hashedPassword
        });
        res.status(200).json({
            success: true,
            message: "Registered Successfully."
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Registration failed',
            error: error.message,
        });
    }
};

module.exports = {
    register
}
