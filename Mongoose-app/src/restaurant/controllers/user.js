const repo = require("../repositories/user");
const jwt = require("jsonwebtoken");

exports.login = async (req, res)=>{
    console.log(req.body.username);
    const user = await repo.getUser(req.body.username);
    console.log(req.body.password);
    console.log(user);
    console.log(user.password);
    if(!user){
        console.log("no user");
        return res.send("Invalid Creds");
    }else if(user.password!=req.body.password){

        console.log("incorrect password");
        return res.send("Invalid Creds");
    }else{
        const token = jwt.sign({
            username: user.username
        },
        "MYPRIVATEKEY",
        {
            expiresIn: '2h'
        }
        );
        const authResponse = {
            username: user.username,
            token: token
        }
        res.status(200).send(authResponse)
    }
    
}