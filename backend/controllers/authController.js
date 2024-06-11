import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import User from '../models/User.js'


class authController {
    async registration(req,res) {
        try {
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

        } catch (e) {
    console.log(e)
}
    }
    async getUsers(req, res) {
        try {

            res.json('server work')
        } catch (e) {
    console.log(e)
}
    }
}

export default new authController()