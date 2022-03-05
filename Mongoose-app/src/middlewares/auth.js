const jwt = require("jsonwebtoken");

const verifyToken = (req, res, next)=>{
    //1. Read token.
    const token = req.headers["authorization"];
    console.log(token);
    //2. Check if valid.
    if(!token){
        return res.status(401).send();
    }
    try{
        const tokenPayLoad = jwt.verify(token, "MYPRIVATEKEY");
        req.payload = tokenPayLoad;
    }catch(err){
        console.log(err);
        return res.status(401).send("Invalid Token");
    }

    //3. Call next middleware in pipeline
    next();

}

module.exports = verifyToken;