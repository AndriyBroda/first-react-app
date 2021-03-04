import React from 'react';
import './App.scss';
import Pagination from './components/Pagination';

function App() {
  return (
    <Pagination
      activePage={3}
      totalItems={11}
      perPage={3}
      withActions={true}
      classes={{ btn: 'pagination__btn' }}
      onChangePage={newPage => console.log(`Switched to page: #${newPage}`)}
    />
  );
}

export default App;
