import { Product } from '../pages/Products';

export interface Cart {
  cart: CartItem[];
}

export interface CartItem extends Product {
  quantity: number;
}

export interface CartContextProviderProps {
  children: React.ReactNode;
}
