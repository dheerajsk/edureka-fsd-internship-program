import "./Home.css"
import {useEffect, useState} from "react";
import Header from "../header/Header";
import RestaurantCard from "../restaurant-card/Restaurant";

function Home(){
// Maintaing statees in component.
var [restaurants, setRestaurants]= useState([]);
var [location, setLocation]=useState([]);

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

    function filterRestaurant(event){
        location = event.target.value;
        setLocation(location);
        fetch("http://localhost:3100/api/Restaurant/Filter?location="+location)
        .then(res=> res.json())
        .then(
            (result)=>{
                result=result.filter(r=> r.name);
                setRestaurants(result);
            }
        );
    }

    function filterRestaurantWithName(event){
        const name = event.target.value;
        console.log(name);
        console.log(location);
        fetch("http://localhost:3100/api/Restaurant/Filter?name="+name+"&location="+location)
        .then(res=> res.json())
        .then(
            (result)=>{
                result=result.filter(r=> r.name);
                setRestaurants(result);
            }
        );
    }

    return(
        <div>
            <Header change={(event)=>filterRestaurant(event)} nameInput={(event)=>filterRestaurantWithName(event)} />
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