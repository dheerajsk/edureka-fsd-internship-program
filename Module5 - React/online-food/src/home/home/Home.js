import "./Home.css"
import {useEffect, useState} from "react";
import Header from "../header/Header";
import RestaurantCard from "../restaurant-card/Restaurant";

function Home(){
// Maintaing statees in component.
var [restaurants, setRestaurants]= useState([]);

    // Lifecycle hook get executed when component is ready.
    useEffect(()=>{
        fetch("http://localhost:3100/api/Restaurant")
            .then(res=> res.json())
            .then(
                (result)=>{
                    result=result.filter(r=> r.name);
                    setRestaurants(result);
                }
            );
    }, []);

    return(
        <div>
            <Header />
            <div className="row">
                <div className="col-md-3 filter"></div>
                <div className="col-md-9 result-container">
                    {/* This is possible because of JSX */}
                    {
                        restaurants.length>0 &&
                        restaurants.map(r=>
                            <RestaurantCard item={r} />
                            )
                    }
                </div>
            </div>
        </div>
    )
}

export default Home;