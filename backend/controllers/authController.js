import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import User from '../models/User.js'
import {validationResult} from "express-validator";

class authController {
    async registration(req,res) {
        try {
            const errors = validationResult(req)
            if(!errors.isEmpty()) return res.json({message:'Error register validation', errors})

            const {fio,login,password} = req.body
            const hashedPassword = await bcrypt.hash(password,8)
            const user = new User({fio,login,password:hashedPassword})
            await user.save()
            console.log('User registered')
            res.status(201).json({ message: 'User registered successfully' });
        } catch (e) {
            console.log(e)
            res.status(501).json({message:'User register error'})
        }
    }
    async login(req,res) {
         try {
             const {login,password} = req.body
             const user = await User.findOne({ login })
             if(!user) return res.status(404).json({message:`User ${login} not found`})
             const validPassword = await bcrypt.compare(password,user.password)
             if (!validPassword) return res.status(401).json({ message: 'Invalid password' });

             const token = jwt.sign({id:user._id},process.env.secret, {expiresIn: '24h'})
             res.json({token})
        } catch (e) {
    console.log(e)
}
    }
    async getUsers(req, res) {
        try {
            const users = await User.find()
            res.json(users)
        } catch (e) {
    console.log(e)
}
    }
}

export default new authController()