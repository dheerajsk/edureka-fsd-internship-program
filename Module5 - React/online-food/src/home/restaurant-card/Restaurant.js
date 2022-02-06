import "./Restaurant.css";


function RestaurantCard(){
    return (
        <div className="card">
            <div className="row">
                <div className="col-md-3">
                <img className="rounded" src="https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg"></img>
                </div>
                <div className="col-md-9">
                    <p>Name</p>
                    <p>Location</p>
                    <p>Website</p>
                </div>
            </div>
        </div>
    )
}

export default RestaurantCard;