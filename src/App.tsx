import React, { useEffect } from 'react';
import useProducts from './hooks/useProducts';
import { IProduct } from './hooks/useProducts';

function App() {
  const productsArray: IProduct[] = [
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

  const {
    products,
    page,
    total,
    changePage,
    applyFilter,
    editProduct,
    deleteProduct,
    addProduct
  } = useProducts({
    products: productsArray,
    perPage: 5
  });

  useEffect(() => {
    applyFilter({ priceLess: 15, priceMore: 9 });
    applyFilter(null); // I'm not sure about null here, but I decided to use it as filter reset.
  }, []);

  return (
    <div className='App'>
      <p>Current page: {page}</p>
      <p>Total pages: {total}</p>

      <table width='500px' style={{ tableLayout: 'fixed', textAlign: 'left' }}>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {products.map(product => (
            <tr key={product.id}>
              <td>{product.id} </td>
              <td>{product.name} </td>
              <td>{product.price} </td>
            </tr>
          ))}
        </tbody>
      </table>

      <div>
        <button onClick={() => changePage(page - 1)}>Prev</button>
        <button onClick={() => changePage(page + 1)}>Next</button>
      </div>

      <button
        onClick={() => {
          addProduct({ name: 'Some new product', price: Math.round(Math.random() * 100) });
        }}
      >
        Add new product
      </button>
    </div>
  );
}

export default App;
