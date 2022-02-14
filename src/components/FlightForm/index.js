import DatePicker, {
  utils,
} from "@amir04lm26/react-modern-calendar-date-picker";
import "@amir04lm26/react-modern-calendar-date-picker/lib/DatePicker.css";
import "./Flights.css";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import {
  setDate,
  setDestination,
  setOrigin,
  setPersons,
} from "../../actions/flightActions";
import { useForm } from "../../hooks/useForm";

const initialForm = {
  origin: "",
  destination: "",
  persons: "",
};

const validationsForm = (form) => {
  let errors = {};
  if (!form.origin.trim()) {
    errors.origin = "El campo 'Origen' es requerido";
  } else if (!form.destination.trim()) {
    errors.destination = "El campo 'Destino' es requerido";
  } else if (!form.persons.trim()) {
    errors.persons = "El campo 'Pasajeros' es requerido";
  } else {
    if (form.origin.trim() === form.destination.trim()) {
      errors.origin =
        "El 'Origen' es igual al 'Destino' seleccione uno diferente";
      errors.destination =
        "El 'Destino' es igual al 'Origen' seleccione uno diferente";
    }
  }
  return errors;
};

const FlightForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const state = useSelector((state) => state);
  const { places } = state.shopping;

  const MySwal = withReactContent(Swal);

  const [selectedDay, setSelectedDay] = useState(null);

  const { form, error, handleChange, handleBlur } = useForm(
    initialForm,
    validationsForm
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    validationsForm(form);
    if (Object.keys(error).length === 0 && selectedDay !== null) {
      dispatch(setOrigin(form.origin));
      dispatch(setDestination(form.destination));
      dispatch(setPersons(form.persons));
      dispatch(
        setDate(`${selectedDay.day}/${selectedDay.month}/${selectedDay.year}`)
      );
      navigate("/vuelos");
    } else {
      return MySwal.fire({
        title: <p>Revise que todos los campos esten completos</p>,
        icon: "error",
      });
    }
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
              <select
                id="origin"
                name="origin"
                defaultValue={form.origin}
                onBlur={handleBlur}
                onChange={handleChange}
                required
              >
                <option></option>
                {places.map((place) => (
                  <option key={place.id}>
                    {place.city}, {place.state}, {place.country}
                  </option>
                ))}
              </select>
              {error.origin && <p className="error">{error.origin}</p>}
            </div>
            <div className="row-field">
              <label>
                <h4>Destino</h4>
              </label>
              <select
                id="destination"
                name="destination"
                defaultValue={form.destination}
                onBlur={handleBlur}
                onChange={handleChange}
                required
              >
                <option></option>
                {places.map((place) => (
                  <option key={place.id}>
                    {place.city}, {place.state}, {place.country}
                  </option>
                ))}
              </select>
              {error.destination && (
                <p className="error">{error.destination}</p>
              )}
            </div>
            <div className="row-field">
              <label>
                <h4>Pasajeros</h4>
              </label>
              <input
                id="persons"
                type="number"
                name="persons"
                placeholder="Ejemplo: 2"
                onBlur={handleBlur}
                onChange={handleChange}
                defaultValue={form.persons}
                required
              ></input>
              {error.persons && <p className="error">{error.persons}</p>}
            </div>
            <div className="row-field">
              <label>
                <h4>Fecha</h4>
              </label>
              <DatePicker
                value={selectedDay}
                colorPrimary="#5585b5"
                colorPrimaryLight="rgba(75, 207, 250, 0.4)"
                onChange={setSelectedDay}
                minimumDate={utils().getToday()}
                inputPlaceholder="Seleccione la fecha"
                wrapperClassName="date"
                calendarClassName="responsive-calendar"
                shouldHighlightWeekends
              />
            </div>
          </div>
        </div>
        <div className="card-footer">
          <button
            className="button"
            disabled={Object.keys(error).length === 0 ? false : true}
          >
            Continuar
          </button>
        </div>
      </form>
    </div>
  );
};

export default FlightForm;
