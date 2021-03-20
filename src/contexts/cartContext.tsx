import React, { useCallback, useState } from 'react';

import { Cart, CartItem, CartContextProviderProps } from './cartContext.types';

const CartContext = React.createContext<Cart>({
  cart: [],
  addToCart: () => {},
  removeFromCart: () => {}
});

const { Provider, Consumer } = CartContext;

const CartContextProvider = ({ children }: CartContextProviderProps) => {
  const [cart, setCart] = useState<CartItem[]>([]);

  const addToCart = useCallback(product => {
    setCart(prevCart => {
      let isProductInCart = false;

      const newCart = prevCart.map(item => {
        if (item.id === product.id) {
          isProductInCart = true;

          return { ...item, quantity: item.quantity + 1 };
        }

        return item;
      });

      if (!isProductInCart) newCart.push({ ...product, quantity: 1 });

      return newCart;
    });
  }, []);

  const removeFromCart = useCallback(id => {
    setCart(prevCart => prevCart.filter(item => item.id !== id));
  }, []);

  return <Provider value={{ cart, addToCart, removeFromCart }}>{children}</Provider>;
};

export { CartContext, CartContextProvider, Consumer as CartContextConsumer };
