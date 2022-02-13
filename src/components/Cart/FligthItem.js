import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addToCart, totalCart } from "../../actions/shoppingActions";
import "./Styles.css";

const FligthItem = () => {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { fligths } = state.shopping;
  const { origin, destination, date } = state.flight;

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addToCart(parseInt(e.target.id)))
    dispatch(totalCart())
    navigate("/reservaciones");
  };
  return (
    <div className="card-flight">
      <h2>Vuelos disponibles</h2>
      <article className="box grid-responsive">
        {fligths.map((fligth) => (
          <div key={fligth.id} className="flight">
            <form onSubmit={handleSubmit} id={fligth.id}>
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
                  <p>{fligth.hourInitial}</p>
                </div>
                <div className="flight-date">
                  <h4>Fecha</h4>
                  <p>{date}</p>
                </div>
                <div className="flight-hour">
                  <h4>Llegada</h4>
                  <p>{fligth.hourFinal}</p>
                </div>
              </div>
              <div className="flight-footer">
                <p>{fligth.fligth}</p>
                <p>{fligth.scales === false ? "Sin escalas" : "Con escalas"}</p>
                <p className="price">${fligth.price} MXN</p>
              </div>
              <button className="button">Reservar</button>
              {/* <button
                className="button"
                onClick={() => dispatch(addToCart(fligth.id))}
              >
                Reservar
              </button> */}
            </form>
          </div>
        ))}
      </article>
    </div>
  );
};
export default FligthItem;
