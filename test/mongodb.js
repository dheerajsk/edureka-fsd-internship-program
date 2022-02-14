
// Import Mongodb
const mongodb = require("mongodb");

const url = "mongodb+srv://test:test@cluster0.fapqz.mongodb.net/restaurantDB?retryWrites=true&w=majority"

const mongodbClient = mongodb.MongoClient;

var connectedClient;

exports.connect = ()=>{
    mongodbClient.connect(url)
        .then((client)=>{
            connectedClient=client;
            console.log("DB Connected");
        })
        .catch(err=>{console.log(err)});
}

exports.getCollection = (nameOfCollection)=>{
    return connectedClient.db('restaurantDB').collection(nameOfCollection);
}
