
const mongodb = require("../../config/mongodb");

exports.add = (item, callback)=>{
    // Step 2: Get the collection.
    const collection = mongodb.getCollection("Restaurant");
    // Step 3: Add your data to collection.
    collection.insertOne({name:item.name, contact:item.contact, 
        website: item.website, location:item.location})
        .then(()=>{
            callback();
        })
        .catch(err=>{console.log(err)});
}
