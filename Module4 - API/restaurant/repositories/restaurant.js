
const { ObjectId } = require("mongodb");
const mongodb = require("../../config/mongodb");

exports.add = (item)=>{
    // Step 2: Get the collection.
    const collection = mongodb.getCollection("Restaurant");
    // Step 3: Add your data to collection.
    return collection.insertOne({name:item.name, contact:item.contact, 
        website: item.website, location:item.location})
}

exports.getAll = (callback)=>{
    const collection = mongodb.getCollection("Restaurant");
    collection.find().toArray().then(
        (restaurants)=>{
            callback(restaurants);
        },
        err=>{
            console.log(err);
        }
    )
}

exports.getByID = (id, callback)=>{
    const collection = mongodb.getCollection("Restaurant");
    collection.findOne({_id:ObjectId(id)}).then(
        (restaurants)=>{
            callback(restaurants);
        },
        err=>{
            console.log(err);
        }
    )
}

exports.getByLocation = (location, callback)=>{
    const collection = mongodb.getCollection("Restaurant");
    collection.find({location:location}).toArray().then(
        (restaurants)=>{
            callback(restaurants);
        },
        err=>{
            console.log(err);
        }
    )
}

exports.search = (key, callback)=>{
    const collection = mongodb.getCollection("Restaurant");
    collection.find({name: {$regex:key}}).toArray().then(
        (restaurants)=>{
            callback(restaurants);
        },
        err=>{
            console.log(err);
        }
    )
}

exports.updateRestaurant = (restaurant, callback)=>{
    const collection = mongodb.getCollection("Restaurant");
    const filter = {_id: ObjectId(restaurant.id)};
    const update = { $set: {name: restaurant.name, location: restaurant.location, website: restaurant.website}};
    collection.findOneAndUpdate(filter, update).then(
        ()=>{
            callback();
        },
        err=>{console.log(err);}
    )
}

exports.deleteRestaurant = (id, callback)=>{
    const collection = mongodb.getCollection("Restaurant");
    collection.findOneAndDelete({_id: ObjectId(id)})
        .then(
            ()=>{callback()},
            err=>{console.log(err)}
        )
}

exports.filterRestaurant = (city, name, callback)=>{
    const collection = mongodb.getCollection("Restaurant");
    collection.find({$and: [
        {name: {$regex:name}},
        {location: city}
        ]}).toArray().then(
        (restaurants)=>{
            callback(restaurants);
        },
        err=>{
            console.log(err);
        }
    )
}