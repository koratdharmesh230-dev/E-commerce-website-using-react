import express from 'express';
import bcrypt from 'bcrypt';
import db from '../models/index.js';
import jwt from 'jsonwebtoken';
import { where } from 'sequelize';

const router = express.Router();
const User = db.User;

// Register Route

router.post('/register', async(req , res) => {
    try {
        const {name , email , password } = req.body;

        // Check if user exists 
        const userExists = await User.findOne({ where: {email}});
        if (userExists) {
            return res.status(400).json({error: "Email Already Exist"});
        }
        
        const hashedPassword = await bcrypt.hash(password, 10);

        // create user
        const newUser = User.create({
            name,
            email,
            password_hash: hashedPassword
        });

        res.json({message: "User registered successfully!", user:{id: newUser.id, name: newUser.name}});
    }

    catch(err) {
        console.error("Error in register:", err);
        res.status(500).json({error: "server error"});
    }
});

router.post('/Login', async(req, res) => {
    try {
        const {email , password} = req.body;

        // find the user
        const user = await User.findOne({where: {email}});
        if (!user) {
            return res.status(400).json({error: "User does not exist"});
        }

        // check the password
        const validPassword = await bcrypt.compare(password, user.password_hash);
        if (!validPassword) {
            return res.status(400).json({error: "Wrong password"});
        }

        // Generate a token
        const token = jwt.sign(
            {id: user.id , email: user.email},
            "Super_secret_key_123",
            {expiresIn: "1h"}
        );

        // Send back the token
        res.json({
            message: "Login successful",
            token: token,
            user: {id: user.id, name: user.name}
        });
    }
    catch(err) {
        console.error("Error in logic", err);
        res.status(500).json({error: "Server error"});
    }
});

export default router;