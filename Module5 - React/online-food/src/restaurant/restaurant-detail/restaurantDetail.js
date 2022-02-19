import "./restaurantDetail.css";

import {useParams} from "react-router-dom";
import { useEffect } from "react";

function RestaurantDetail(){

    const {id} = useParams();


    useEffect(()=>{

    }, [])

    return (
        
        <div className="container">
            
            <div className="banner"></div>

            <h3 className="name">Name</h3>
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

        Address

    </div>
    <div role="tabpanel" className="tab-pane" id="contact">
        Website
        Phone
    </div>
  </div>
        </div>

    );
}

export default RestaurantDetail;