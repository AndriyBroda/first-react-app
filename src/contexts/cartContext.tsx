import React, { useReducer } from 'react';
import { Product } from '../pages/Products';

import { Cart, CartContextProviderProps, CartItem } from './cartContext.types';

const CartContext = React.createContext<any>({});

const { Provider, Consumer } = CartContext;

const INITIAL_STATE: Cart = {
  cart: []
};

// Reducer

const reducer = (state: Cart, action: any) => {
  switch (action.type) {
    case 'ADD_TO_CART':
      return { cart: [...state.cart, { ...action.payload, quantity: 1 }] };

    case 'INCREMENT_PRODUCT_QUANTITY':
      return {
        cart: state.cart.map(item =>
          item.id === action.payload ? { ...item, quantity: item.quantity + 1 } : item
        )
      };

    case 'REMOVE_FROM_CART':
      return { cart: state.cart.filter(item => item.id !== action.payload) };

    default:
      return state;
  }
};

// Actions

export const addToCart = (cart: CartItem[], product: Product) => {
  return cart.find(item => item.id === product.id)
    ? {
        type: 'INCREMENT_PRODUCT_QUANTITY',
        payload: product.id
      }
    : {
        type: 'ADD_TO_CART',
        payload: product
      };
};

export const removeFromCart = (id: number) => ({
  type: 'REMOVE_FROM_CART',
  payload: id
});

export const incrementProductQuantity = (id: number) => ({
  type: 'INCREMENT_PRODUCT_QUANTITY',
  payload: id
});

const CartContextProvider = ({ children }: CartContextProviderProps) => {
  const [state, dispatch] = useReducer(reducer, INITIAL_STATE);

  return <Provider value={{ state, dispatch }}>{children}</Provider>;
};

export { CartContext, CartContextProvider, Consumer as CartContextConsumer };
