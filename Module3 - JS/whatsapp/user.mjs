
import { TextMessage } from "./text-message.mjs";
import { MessageSender } from "./message-sender.mjs";

// User Group
class User{
    
    constructor(_id, _name, _profilePic, _bio, _address){
        this.id = _id;
        this.name = _name;
        this.profilePic = _profilePic
        this.bio = _bio;
        this.address = _address;
    }


    // To send a message using MessageSender
    sendMessage(){
        // 1. Creating message
        var message = new TextMessage("Test Message", 1, 2, new Date());
        // 2. Creating message sender
        var sender = new MessageSender();
        // 3. Sends message
        
        sender.send(message);
        console.log(message.body);
        console.log("Message sent");
    }
}

// Creating object (1 instance of group)
var user = new User(1, "Dheeraj", "pic.jpg", "Test", "India");
user.sendMessage();

