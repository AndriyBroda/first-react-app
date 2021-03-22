import { Product } from '../pages/Products';

export interface Cart {
  cart: CartItem[];
  addToCart: (cart: CartItem[], newItem: Product) => void;
  removeFromCart: (id: number) => void;
}

export interface CartItem extends Product {
  quantity: number;
}

export interface CartContextProviderProps {
  children: React.ReactNode;
}
