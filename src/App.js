import { Provider } from "react-redux";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import store from "./store";
import Flights from "./components/Flights";
import ShoppingCart from "./components/Cart/ShoppingCart";
import Navbar from "./components/Navbar";
import FligthItem from "./components/Cart/FligthItem";
import Data from "./components/Data";
import Tickets from "./components/Tickets";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Navbar />
        <div className="App">
          <Routes>
            <Route path="/" element={<Flights />} />
            <Route path="/reservaciones" element={<ShoppingCart />} />
            <Route path="/vuelos" element={<FligthItem />} />
            <Route path="/pagar" element={<Data />} />
            <Route path="/boletos" element={<Tickets />} />
          </Routes>
        </div>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
