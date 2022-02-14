import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setTickets } from "../../actions/ticketsActions";

const Data = () => {
  const state = useSelector((state) => state);
  const { cart } = state.shopping;
  // const { fligth } = state.fligth;
 
  const dispatch = useDispatch();

  const [form, setForm] = useState({});
  const navigate = useNavigate();
  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(cart);
    const { origin, destination, persons, date} = fligth;
    const { id, hourInitial, hourFinal, price, scales, fligth, quantity } = cart

    // cart.map((item) => (
    //   const { id, hourInitial, hourFinal, price, scales, fligth, quantity } = item

    // ))
    
    // dispatch(setTickets(cart))
    // navigate("/boletos");
    // dispatch(setOrigin(form.origin));
    // dispatch(setDestination(form.destination));
    // dispatch(setPersons(form.persons));
    // dispatch(
    //   setDate(`${selectedDay.day}/${selectedDay.month}/${selectedDay.year}`)
    // );
    // navigate("/vuelos");
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
              <h4>Nombre</h4>
            </label>
            <input
              type="text"
              id="name"
              name="name"
              defaultValue={form.name}
              onChange={handleChange}
            />
          </div>
          <div className="row-field">
            <label>
              <h4>Apellido</h4>
            </label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              defaultValue={form.lastName}
              onChange={handleChange}
            />
          </div>
          <div className="row-field">
            <label>
              <h4>Direccion</h4>
            </label>
            <input
              type="text"
              id="address"
              name="address"
              defaultValue={form.address}
              onChange={handleChange}
            />
          </div>
          <div className="row-field">
            <label>
              <h4>Correo electronico</h4>
            </label>
            <input
              type="email"
              id="email"
              name="email"
              defaultValue={form.email}
              onChange={handleChange}
            />
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

export default Data;
