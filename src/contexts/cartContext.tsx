import React, { useReducer } from 'react';

import { Cart, CartContextProviderProps } from './cartContext.types';

const CartContext = React.createContext<any>({});

const initialState: Cart = {
  cart: []
};

const reducer = (state: Cart, action: any) => {
  switch (action.type) {
    case 'addToCart': {
      let isProductInCart = false;

      const newCart = state.cart.map(item => {
        if (item.id === action.payload.id) {
          isProductInCart = true;

          return { ...item, quantity: item.quantity + 1 };
        }

        return item;
      });

      if (!isProductInCart) newCart.push({ ...action.payload, quantity: 1 });

      return { cart: newCart };
    }

    case 'removeFromCart': {
      return { cart: state.cart.filter(item => item.id !== action.payload) };
    }

    default:
      return state;
  }
};

const { Provider, Consumer } = CartContext;

const CartContextProvider = ({ children }: CartContextProviderProps) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return <Provider value={{ state, dispatch }}>{children}</Provider>;
};

export { CartContext, CartContextProvider, Consumer as CartContextConsumer };
