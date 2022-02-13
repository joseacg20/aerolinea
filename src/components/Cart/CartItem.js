import { useSelector } from "react-redux";
import "./Styles.css";

const CartItem = ({
  data,
  deleteOneFromCart,
  deleteAllFromCart,
  disabledButton,
}) => {
  const state = useSelector((state) => state);

  const { origin, destination, persons, date } = state.flight;
  let { id, hourInitial, hourFinal, price, scales, quantity, fligth } = data;

  return (
    <div className="flight">
      <div className="flight-header">
        <div>
          <h4>Origen</h4>
          <p>{origin}</p>
        </div>
        <div className="flight-hour">
          <h4>Destino</h4>
          <p>{destination}</p>
        </div>
      </div>
      <div className="flight-body">
        <div>
          <h4>Salida</h4>
          <p>{hourInitial}</p>
        </div>
        <div className="flight-date">
          <h4>Fecha</h4>
          <p>{date}</p>
        </div>
        <div className="flight-hour">
          <h4>Llegada</h4>
          <p>{hourFinal}</p>
        </div>
      </div>
      <div className="flight-footer">
        <p>{fligth}</p>
        <p>{scales === false ? "Sin escalas" : "Con escalas"}</p>
        <p className="price">${price} MXN</p>
      </div>
      <div className="flight-footer">
        <h4>Pasajeros: {persons}</h4>
        <h4>
          ${price}.00 x {quantity} = ${price * quantity}.00
        </h4>
      </div>
      {disabledButton ? (
        ""
      ) : (
        <div className="flight-footer">
          <button className="button" onClick={() => deleteOneFromCart(id)}>
            Eliminar una reservacion
          </button>
          <button
            className="button"
            onClick={() => {
              deleteAllFromCart(id, true);
            }}
          >
            Eliminar todas las reservaciones
          </button>
        </div>
      )}
    </div>
  );
};

export default CartItem;
