import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import CartItem from "../Cart/CartItem";

const Tickets = () => {
  const state = useSelector((state) => state);

  const navigate = useNavigate();
  const { ticket } = state.ticket;
  return (
    <div className="card-flight">
      <h2>Mis boletos</h2>
      <article className="box grid-responsive">
        {ticket.length ? (
          ticket.map((item, index) => (
            <CartItem key={index} data={item} disabledButton={true} />
          ))
        ) : (
          <div>
            <h4>No tienes boletos!</h4>
            <button className="button" onClick={() => navigate("/")}>
              Explorar
            </button>
          </div>
        )}
      </article>
    </div>
  );
};

export default Tickets;
