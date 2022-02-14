import { useDispatch } from "react-redux";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Tickets from "./components/Tickets";
import UserForm from "./components/UserForm";
import FlightForm from "./components/FlightForm";
import ShoppingCart from "./components/Cart/ShoppingCart";
import FligthItem from "./components/Cart/FligthItem";
import { useEffect } from "react";
import { getPlaces } from "./actions/shoppingActions";
import getApiPlaces from "./services/getApiPlaces";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    getApiPlaces().then((results) => {
      dispatch(getPlaces(results));
    });
  }, [dispatch]);

  return (
    <BrowserRouter>
      <Navbar />
      <div className="App">
        <Routes>
          <Route path="/" element={<FlightForm />} />
          <Route path="/reservaciones" element={<ShoppingCart />} />
          <Route path="/vuelos" element={<FligthItem />} />
          <Route path="/pagar" element={<UserForm />} />
          <Route path="/boletos" element={<Tickets />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
