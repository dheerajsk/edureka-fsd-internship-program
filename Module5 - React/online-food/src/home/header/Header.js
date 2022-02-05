
import "./Header.css";

function Header(){
    return(
        <div className="header">
            <div className="d-flex header-form">
            <select class="form-select" aria-label="Default select example">
                <option selected>Select Location</option>
                <option value="1">Mumbai</option>
                <option value="2">Delhi</option>
                <option value="3">Banglore</option>
            </select>
            <input type="text" placeholder="Enter name...." class="form-control" id="inputName"></input>
            </div>
        </div>
    );
}

export default Header;