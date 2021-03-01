import React from 'react';
import './App.scss';
import Pagination from './components/Pagination';

function App() {
  return (
    <Pagination
      activePage={1}
      totalItems={10}
      perPage={3}
      classes={{ btn: 'pagination__btn' }}
      onChangePage={newPage => console.log('Page: ' + newPage)}
    />
  );
}

export default App;
