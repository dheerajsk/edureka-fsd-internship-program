import "./restaurantDetail.css";

import {useParams} from "react-router-dom";
import { useEffect, useState } from "react";

function RestaurantDetail(){

    var [restaurant, setRestaurant] = useState();
    const {id} = useParams();


    useEffect(()=>{
      fetch("http://localhost:3100/api/Restaurant/"+id)
          .then(res=> res.json())
          .then(
              (result)=>{
                setRestaurant(result);
              }
          );
  }, []);

    return (
        
        <div className="container">
            
            <div className="banner"></div>

            <h3 className="name">{restaurant ? restaurant.name : ''}</h3>
            <button className="btn btn-danger float-end">Place Online Order</button>

 <ul className="nav nav-tabs">
  <li className="nav-item">
    <a className="nav-link tab-name" data-bs-toggle="tab" href="#overview">Overview</a>
  </li>
  <li className="nav-item">
    <a className="nav-link tab-name" data-bs-toggle="tab"  href="#contact">Contact</a>
  </li>
</ul>

<div className="tab-content">
    <div role="tabpanel" className="tab-pane active" id="overview">

    <p>Location/Address: {restaurant ? restaurant.location : ''}</p>

    </div>
    <div role="tabpanel" className="tab-pane" id="contact">
    <p>Website: {restaurant ? restaurant.website : ''}</p>
    <p>Contact: {restaurant ? restaurant.contact : ''}</p>
    </div>
  </div>
        </div>
    );
}

export default RestaurantDetail;