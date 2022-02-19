import logo from './logo.svg';
import './App.css';
import {Routes, Route} from "react-router-dom";
import Home from "./home/home/Home";
import RestaurantDetail from './restaurant/restaurant-detail/restaurantDetail';

// JSX - JavaScript Extentsion (Another react feature)
function App() {
  return (
    <div>
      <Routes>
      <Route path="" element={<Home />}></Route>
      <Route path="restaurant/:id" element={<RestaurantDetail />}></Route>
      </Routes>
    </div>
  );
}

export default App;
