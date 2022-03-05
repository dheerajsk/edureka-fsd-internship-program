
const User = require("../models/user");


exports.getUser = async (_username)=>{
    const user = await User.findOne({username: _username});
    return user;
}