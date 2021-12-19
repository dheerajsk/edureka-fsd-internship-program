
import { TextMessage } from "./text-message.mjs";
import { MessageSender } from "./message-sender.mjs";

// User Group
class User{
    
    constructor(_id, _name, _profilePic, _bio, _status){
        this.id = _id;
        this.name = _name;
        this.profilePic = _profilePic
        this.bio = _bio;
        this.status = _status;
    }

    sendMessage(){
        // 1. Creating message
        var message = new TextMessage("Test Message", 1, 2, new Date());
        // 2. Creating message sender
        var sender = new MessageSender();
        // 3. Sends message
        sender.sendMessage(message);
        console.log("Message sent");
    }
}

// Creating object (1 instance of group)
var user = new User();
user.sendMessage();