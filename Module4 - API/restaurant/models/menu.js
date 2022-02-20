

module.exports = class Menu{

    constructor(name, price, type, restaurantID, detail, imageURL, isVeg){
        this.name=name;
        this.price = price;
        this.type = type;
        this.restaurantID = restaurantID;
        this.detail = detail;
        this.imageURL= imageURL;
        this.isVeg = isVeg;
    }
}