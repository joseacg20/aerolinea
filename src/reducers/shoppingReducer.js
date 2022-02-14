import {
  GET_PLACES,
  ADD_TO_CART,
  CLEAR_CART,
  REMOVE_ALL_FROM_CART,
  REMOVE_ONE_FROM_CART,
  TOTAL_CART,
} from "../types";

export const initialState = {
  places: [
    { id: 1, city: "Acapulco", state: "Guerrero", country: "México" },
    { id: 2, city: "Barcelona", state: "Cataluña", country: "España" },
    { id: 3, city: "Belin", state: "Berlin", country: "Alemania" },
    { id: 4, city: "Cali", state: "Valle de Cauca", country: "Colombia" },
    {
      id: 5,
      city: "Ciudad de México",
      state: "México D.F",
      country: "México",
    },
  ],
  fligths: [
    {
      id: 1,
      hourInitial: "10:30",
      hourFinal: "16:30",
      price: 5500,
      scales: false,
      fligth: "Vuelo A905",
    },
    {
      id: 2,
      hourInitial: "11:50",
      hourFinal: "23:49",
      price: 1500,
      scales: true,
      fligth: "Vuelo C435",
    },
    {
      id: 3,
      hourInitial: "13:30",
      hourFinal: "23:00",
      price: 2499,
      scales: false,
      fligth: "Vuelo L115",
    },
    {
      id: 4,
      hourInitial: "16:00",
      hourFinal: "01:55",
      price: 3250,
      scales: false,
      fligth: "Vuelo T825",
    },
    {
      id: 5,
      hourInitial: "23:45",
      hourFinal: "07:59",
      price: 4999,
      scales: true,
      fligth: "Vuelo P013",
    },
  ],
  cart: [],
  totalItem: 0,
  total: 0,
};

export function shoppingReducer(state = initialState, action) {
  switch (action.type) {
    case GET_PLACES: {
      return {
        ...state,
        places: [...state.places, action.payload],
      };
    }
    case ADD_TO_CART: {
      // Buscamos si existe el vuelo en nuestro state
      let newItem = state.fligths.find((item) => item.id === action.payload.id);
      // Si uno de los items del carrito coincide con el nuevo que agregamos
      let itemInCart = state.cart.find((item) => item.id === newItem.id);
      return itemInCart
        ? // Crea una copia del state y aumentamos la cantidad de boletos para ese vuelo
          {
            ...state,
            cart: state.cart.map((item) =>
              item.id === newItem.id
                ? {
                    ...item,
                    origin: action.payload.fligth.origin,
                    destination: action.payload.fligth.destination,
                    persons: action.payload.fligth.persons,
                    date: action.payload.fligth.date,
                    quantity: item.quantity + 1,
                  }
                : item
            ),
          }
        : // Si no entonces crea el iten en el state
          {
            ...state,
            cart: [
              ...state.cart,
              {
                ...newItem,
                origin: action.payload.fligth.origin,
                destination: action.payload.fligth.destination,
                persons: action.payload.fligth.persons,
                date: action.payload.fligth.date,
                quantity: 1,
              },
            ],
          };
    }
    case REMOVE_ONE_FROM_CART: {
      // Buscamos el item en el carrito
      let itemToDelete = state.cart.find((item) => item.id === action.payload);
      return itemToDelete.quantity > 1
        ? // Mientras la cantidad se mayor a 1
          {
            ...state,
            cart: state.cart.map((item) =>
              item.id === action.payload
                ? { ...item, quantity: item.quantity - 1 }
                : item
            ),
          }
        : // Filtramos y eliminamos del carrito el item
          {
            ...state,
            cart: state.cart.filter((item) => item.id !== action.payload),
          };
    }
    case REMOVE_ALL_FROM_CART: {
      return {
        ...state,
        cart: state.cart.filter((item) => item.id !== action.payload),
      };
    }
    case CLEAR_CART:
      return initialState;
    case TOTAL_CART: {
      let total = 0;
      let totalItem = 0;
      state.cart.forEach(function (item) {
        total += item.price * item.quantity;
        totalItem += item.quantity;
      });
      return {
        ...state,
        total: total,
        totalItem: totalItem,
      };
    }
    default:
      return state;
  }
}
