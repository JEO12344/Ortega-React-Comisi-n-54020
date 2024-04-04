// CarritoContext.js
import React, { createContext, useContext, useReducer } from 'react';

const CarritoContext = createContext();

export const useCarrito = () => {
  return useContext(CarritoContext);
};

const carritoReducer = (state, action) => {
  switch (action.type) {
    case 'AGREGAR_AL_CARRITO':
      return {
        ...state,
        carrito: [...state.carrito, action.payload],
      };
    case 'LIMPIAR_CARRITO':
      return {
        ...state,
        carrito: [],
      };
    default:
      return state;
  }
};

export const CarritoProvider = ({ children }) => {
  const [state, dispatch] = useReducer(carritoReducer, { carrito: [] });

  return (
    <CarritoContext.Provider value={{ state, dispatch }}>
      {children}
    </CarritoContext.Provider>
  );
};
