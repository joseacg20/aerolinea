import { Calendar, utils } from "@amir04lm26/react-modern-calendar-date-picker";
import "@amir04lm26/react-modern-calendar-date-picker/lib/DatePicker.css";
import "./Flights.css";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import getApiPlaces from "../../services/getApiPlaces"
import {
  getPlaces,
  setDate,
  setDestination,
  setOrigin,
  setPersons,
} from "../../actions/flightActions";

const Flights = () => {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();

  // useEffect(() => {
  //   getApiPlaces().then((response) => {
  //     response.forEach(element => {
  //       console.log(element)
  //       dispatch(getPlaces(element))
  //     });
  //   })
  // }, [dispatch]);

  const { places } = state.shopping;
  const navigate = useNavigate();

  const [form, setForm] = useState({});
  const [selectedDay, setSelectedDay] = useState(null);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(setOrigin(form.origin));
    dispatch(setDestination(form.destination));
    dispatch(setPersons(form.persons));
    dispatch(
      setDate(`${selectedDay.day}/${selectedDay.month}/${selectedDay.year}`)
    );
    navigate("/vuelos");
  };

  return (
    <div className="card">
      <form onSubmit={handleSubmit}>
        <div className="card-header">
          <h2>Buscar Vuelos</h2>
        </div>
        <div className="card-body">
          <div className="field">
            <div className="row-field">
              <label>
                <h4>Origen</h4>
              </label>
              <select name="origin" defaultValue={""} onChange={handleChange}>
                <option>Seleccione el origen</option>
                {places.map((place) => (
                  <option key={place.id}>
                    {place.city}, {place.state}, {place.country}
                  </option>
                ))}
              </select>
            </div>
            <div className="row-field">
              <label>
                <h4>Destino</h4>
              </label>
              <select
                name="destination"
                defaultValue={""}
                onChange={handleChange}
              >
                <option>Seleccione el destino</option>
                {places.map((place) => (
                  <option key={place.id}>
                    {place.city}, {place.state}, {place.country}
                  </option>
                ))}
              </select>
            </div>
            <div className="row-field">
              <label>
                <h4>Pasajeros</h4>
              </label>
              <input
                type="number"
                id="persons"
                name="persons"
                defaultValue={form.persons}
                onChange={handleChange}
              />
            </div>
            <div className="row-field">
              <label>
                <h4>Fecha</h4>
              </label>
              <div className="row-field-calendar">
                <Calendar
                  value={selectedDay}
                  colorPrimary="#5585b5"
                  colorPrimaryLight="rgba(75, 207, 250, 0.4)"
                  onChange={setSelectedDay}
                  minimumDate={utils().getToday()}
                  shouldHighlightWeekends
                />
              </div>
            </div>
          </div>
        </div>
        <div className="card-footer">
          <button className="button">Continuar</button>
        </div>
      </form>
    </div>
  );
};

export default Flights;
