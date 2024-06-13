import jwt from 'jsonwebtoken'


const authenticate = (req,res,next) => {
    if(req.method === 'OPTIONS') {
        next()
    }
    // 'Bearer someToken'
    try {
        const token = req.headers.authorization?.split(' ')[1]
        if(!token) res.status(401).json({message:'No token provided'})
        req.user = jwt.verify(token, process.env.secret)
        next()
    } catch (e) {
        console.log(e)
        res.status(403).json({message: 'No token provided'})
    }
}

export default authenticate;