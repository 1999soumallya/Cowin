const jwt = require('jsonwebtoken');
JWT_SERECT = 'sanchariiseverythingforme'

const fatchuser = (req, res, next)=>{
    const token = req.header('auth-token');
    if(!token){
        res.status(401).send({error: "Please authenticate using valid token"})
    }
    try {
        const data = jwt.verify(token,JWT_SERECT);
        req.user = data.user;
        next();
    } catch (error) {
        res.status(401).send({error: "Please authenticate using valid token"})
    }
}

module.exports = fatchuser;