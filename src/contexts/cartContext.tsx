import React, { useState } from 'react';
import { Product } from '../pages/Products';

import { Cart, CartItem, CartContextProviderProps } from './cartContext.types';

const CartContext = React.createContext<Cart>({
  cart: [],
  addToCart: () => {},
  removeFromCart: () => {}
});

const { Provider, Consumer } = CartContext;

const CartContextProvider = ({ children }: CartContextProviderProps) => {
  const [cart, setCart] = useState<CartItem[]>([]);

  const addToCart = (cart: CartItem[], product: Product) => {
    cart.find(item => item.id === product.id)
      ? incrementProductQuantity(product.id)
      : setCart(prevCart => [...prevCart, { ...product, quantity: 1 }]);
  };

  const incrementProductQuantity = (id: number) => {
    setCart(prevCart =>
      prevCart.map(item => (item.id === id ? { ...item, quantity: item.quantity + 1 } : item))
    );
  };

  const removeFromCart = (id: number) => {
    setCart(prevCart => prevCart.filter(item => item.id !== id));
  };

  return <Provider value={{ cart, addToCart, removeFromCart }}>{children}</Provider>;
};

export { CartContext, CartContextProvider, Consumer as CartContextConsumer };
