import React, { useState } from 'react';

import cn from 'classnames';
import css from './Pagination.module.scss';

interface PaginationProps {
  activePage: number;
  totalItems: number;
  perPage: number;
  withActions?: boolean;
  classes?: {
    btn?: string;
    activeBtn?: string;
  };
  onChangePage?: (newPage: number) => void;
}

const Pagination = ({
  activePage,
  totalItems,
  perPage,
  withActions,
  classes,
  onChangePage
}: PaginationProps) => {
  const pagesNumber = Math.ceil(totalItems / perPage);

  const [currentPage, setCurrentPage] = useState(activePage);
  return (
    <div className='pagination'>
      {Array.from({ length: pagesNumber }).map((item, index) => (
        <button
          className={cn(classes?.btn, css.btn, {
            [css.active]: currentPage === index + 1,
            [classes?.activeBtn || '']: currentPage === index + 1
          })}
          onClick={() => {
            onChangePage?.(index + 1);
            setCurrentPage(index + 1);
          }}
          key={index}
        >
          {index + 1}
        </button>
      ))}
    </div>
  );
};

export default Pagination;
