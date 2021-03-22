import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext, removeFromCart } from '../../contexts/cartContext';
import { CartItem } from '../../contexts/cartContext.types';

import css from './Cart.module.scss';

export const Cart = () => {
  const { state, dispatch } = useContext(CartContext);
  console.log(state);

  let total = 0; // We can use reduce here, but I guess it will be better to count total in one loop.

  return (
    <>
      <Link to='/products'>To Products</Link>

      <table className={css.table}>
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Subtotal</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {state.cart.map(({ name, price, quantity, id }: CartItem) => {
            total += price * quantity;

            return (
              <tr key={id}>
                <td>{name}</td>
                <td>{price}$</td>
                <td>{quantity}</td>
                <td>{price * quantity}$</td>
                <td>
                  <button onClick={() => dispatch(removeFromCart(id))}>Remove</button>
                </td>
              </tr>
            );
          })}
        </tbody>
        <tfoot>
          <tr>
            <td colSpan={5} className={css.total}>
              Total: {total}$
            </td>
          </tr>
        </tfoot>
      </table>
    </>
  );
};
