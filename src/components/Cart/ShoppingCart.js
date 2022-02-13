import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { clearCart, deleteFromCart } from "../../actions/shoppingActions";
import CartItem from "./CartItem";
import "./Styles.css";

const ShoppingCart = () => {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();

  const navigate = useNavigate();
  const { cart, total, totalItem } = state.shopping;

  return (
    <div className="card-flight">
      <h2>Mis reservaciones</h2>
      {totalItem > 0 ? (
        <div className="flight-header">
          <div className="button-clear-cart">
            <button className="button" onClick={() => dispatch(clearCart())}>
              Limpiar carrito
            </button>
          </div>
          <p>{totalItem} vuelos reservados</p>
          <p>Total: {total}</p>
          <div className="button-pay">
            <button className="button" onClick={() => navigate("/pagar")}>
              Pagar reservaciones
            </button>
          </div>
        </div>
      ) : (
        ""
      )}
      <article className="box grid-responsive">
        {cart.length ? (
          cart.map((item, index) => (
            <CartItem
              key={index}
              data={item}
              deleteOneFromCart={() => dispatch(deleteFromCart(item.id))}
              deleteAllFromCart={() => dispatch(deleteFromCart(item.id, true))}
              disabledButton={false}
            />
          ))
        ) : (
          <div>
            <h4>No tienes reservaciones!</h4>
            <button className="button" onClick={() => navigate("/")}>
              Explorar
            </button>
          </div>
        )}
      </article>
    </div>
  );
};
export default ShoppingCart;
