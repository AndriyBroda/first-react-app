import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../../contexts/cartContext';
import css from './Products.module.scss';

export interface Product {
  id: number;
  name: string;
  price: number;
}

const products: Product[] = [
  {
    id: 1,
    name: 'apple',
    price: 10
  },
  {
    id: 2,
    name: 'tomato',
    price: 15
  },
  {
    id: 3,
    name: 'cherry',
    price: 20
  },
  {
    id: 4,
    name: 'cucumber',
    price: 4
  },
  {
    id: 5,
    name: 'kiwi',
    price: 9
  },
  {
    id: 6,
    name: 'guava',
    price: 8
  },
  {
    id: 7,
    name: 'lemon',
    price: 10
  },
  {
    id: 8,
    name: 'grape',
    price: 16
  },
  {
    id: 9,
    name: 'fig',
    price: 12
  }
];

export const Products = () => {
  const { cart, addToCart } = useContext(CartContext);

  return (
    <div className={css.layout}>
      <ul className={css.productsList}>
        {products.map(product => (
          <li key={product.id}>
            <h3>{product.name}</h3>
            <span>{product.price}$</span>
            <button onClick={() => addToCart(cart, product)}>Add to cart</button>
          </li>
        ))}
      </ul>

      <table className={css.cartTable}>
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
            <th>Quantity</th>
          </tr>
        </thead>
        <tbody>
          {cart.map(item => (
            <tr key={item.id}>
              <td>{item.name}</td>
              <td>{item.price}</td>
              <td>{item.quantity}</td>
            </tr>
          ))}
        </tbody>
        <tfoot>
          <tr>
            <td>
              <Link to='/cart'>To cart</Link>
            </td>
          </tr>
        </tfoot>
      </table>
    </div>
  );
};
