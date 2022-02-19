import "./Restaurant.css";

import { useNavigate } from "react-router-dom";

function RestaurantCard(props){

    // access item properties passed into componenet
    // and store in a constant.
    const restaurant = props.item;
    const navigate = useNavigate();

    const redirectToDetail=(event)=>{
        navigate("restaurant/"+event)
    }
    // restaurant/id
    return (
        <a href="" onClick={()=>redirectToDetail(restaurant._id)}>
        <div className="card">
            <div className="row">
                <div className="col-md-3">
                <img className="rounded" src="https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg"></img>
                </div>
                <div className="col-md-9">
                    <p>{restaurant.name}</p>
                    <p>Location : {restaurant.location}</p>
                    <p>{restaurant.website}</p>
                </div>
            </div>
        </div>
        </a>
    )
}

export default RestaurantCard;