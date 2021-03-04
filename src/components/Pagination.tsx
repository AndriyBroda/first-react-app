import React, { useEffect, useState } from 'react';

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

  useEffect(() => {
    // I'm using it to display info after changing the page
    onChangePage?.(currentPage);
  }, [onChangePage, currentPage]);

  return (
    <div className={cn(css.pagination)}>
      {withActions && (
        <button
          className={cn(css.btn, css.actionBtn)}
          onClick={() => setCurrentPage(currentPage - 1)}
          disabled={currentPage - 1 <= 0}
        >
          Previous
        </button>
      )}

      {[...Array(pagesNumber)].map((page, index) => {
        const pageNumber = index + 1;

        return (
          <button
            className={cn(css.btn, classes?.btn, {
              [css.active]: currentPage === pageNumber,
              [classes?.activeBtn || '']: currentPage === pageNumber
            })}
            onClick={() => {
              setCurrentPage(pageNumber);
            }}
            key={pageNumber}
          >
            {pageNumber}
          </button>
        );
      })}

      {withActions && (
        <button
          className={cn(css.btn, css.actionBtn)}
          onClick={() => setCurrentPage(currentPage + 1)}
          disabled={currentPage + 1 > pagesNumber}
        >
          Next
        </button>
      )}
    </div>
  );
};

export default Pagination;
