import "./Home.css"
import Header from "../header/Header";

function Home(){
    return(
        <div>
            <Header />
            <div className="row">
                <div className="col-md-3 filter"></div>
                <div className="col-md-9 result-container">
                    
                </div>
            </div>
        </div>
    )
}

export default Home;