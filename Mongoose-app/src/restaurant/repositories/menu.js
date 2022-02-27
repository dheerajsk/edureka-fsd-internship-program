const Menu = require("../models/menu");


exports.add = async (menu)=>{
    try{
       const result = Menu.create(menu);
       return result;
    }catch(err){
        console.log(err);
    }
}