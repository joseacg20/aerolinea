import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setTickets } from "../../actions/ticketsActions";
import { clearCart } from "../../actions/shoppingActions";
import { useForm } from "../../hooks/useForm";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const initialForm = {
  name: "",
  lastName: "",
  address: "",
  email: "",
};

const validationsForm = (form) => {
  let errors = {};
  if (!form.name.trim()) {
    errors.name = "El campo 'Nombre' es requerido";
  } else if (!form.lastName.trim()) {
    errors.lastName = "El campo 'Apellido' es requerido";
  } else if (!form.address.trim()) {
    errors.address = "El campo 'Direccion' es requerido";
  } else if (!form.email.trim()) {
    errors.email = "El campo 'Correo electronico' es requerido";
  }
  return errors;
};

const UserForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const state = useSelector((state) => state);
  const { cart } = state.shopping;

  const MySwal = withReactContent(Swal);

  const { form, error, handleChange, handleBlur } = useForm(
    initialForm,
    validationsForm
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    e.preventDefault();
    validationsForm(form);
    if (Object.keys(error).length === 0) {
      cart.forEach((element) => {
        dispatch(setTickets(element));
      });
      dispatch(clearCart());
      MySwal.fire({
        title: <p>¡Boleto comprado, viaja a la aventura!</p>,
        icon: "success",
        timer: 2000,
        showConfirmButton: false,
      }).then(() => {
        navigate("/boletos");
      });
    } else {
      return MySwal.fire({
        title: <p>¡Revise que todos los campos esten completos!</p>,
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
                <h4>Nombre</h4>
              </label>
              <input
                id="name"
                type="text"
                name="name"
                onBlur={handleBlur}
                onChange={handleChange}
                defaultValue={form.name}
                required
              />
              {error.name && <p className="error">{error.name}</p>}
            </div>
            <div className="row-field">
              <label>
                <h4>Apellido</h4>
              </label>
              <input
                id="lastName"
                type="text"
                name="lastName"
                onBlur={handleBlur}
                onChange={handleChange}
                defaultValue={form.lastName}
                required
              />
              {error.lastName && <p className="error">{error.lastName}</p>}
            </div>
            <div className="row-field">
              <label>
                <h4>Direccion</h4>
              </label>
              <input
                id="address"
                type="text"
                name="address"
                onBlur={handleBlur}
                onChange={handleChange}
                defaultValue={form.address}
              />
              {error.address && <p className="error">{error.address}</p>}
            </div>
            <div className="row-field">
              <label>
                <h4>Correo electronico</h4>
              </label>
              <input
                id="email"
                type="email"
                name="email"
                onBlur={handleBlur}
                onChange={handleChange}
                defaultValue={form.email}
                required
              />
              {error.email && <p className="error">{error.email}</p>}
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

export default UserForm;
