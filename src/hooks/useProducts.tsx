import React, { useCallback, useMemo, useState } from 'react';

export interface IProduct {
  id: number;
  name: string;
  price: number;
}

export interface IFilterOptions {
  name?: string;
  priceMore?: number;
  priceLess: number;
}

export interface IUseProducts {
  products: IProduct[];
  perPage: number;
}

const useProducts = ({ products, perPage }: IUseProducts) => {
  const [productsList, setProductsList] = useState(products);
  const [filterOptions, setFilterOptions] = useState<IFilterOptions | null>(null);
  const [page, setPage] = useState(1);

  const currentProducts = useMemo(() => {
    if (!filterOptions) return productsList;

    const { priceLess, priceMore, name } = filterOptions;

    return productsList.filter(item => {
      let result = item.price < priceLess;

      if (result && name) result = item.name === name;
      if (result && priceMore) result = item.price > priceMore;

      return result;
    });
  }, [productsList, filterOptions]);

  const currentPageProducts = useMemo(() => currentProducts.slice((page - 1) * perPage, page * perPage), [
    currentProducts,
    page,
    perPage
  ]);

  const totalPages = useMemo(() => Math.ceil(currentProducts.length / perPage), [currentProducts, perPage]);

  const changePage = useCallback(
    newPage => {
      if (totalPages >= newPage && newPage >= 1) {
        setPage(newPage);
      } else {
        console.error(`Page #${newPage} doesn't exist! Total pages: ${totalPages}`);
      }
    },
    [setPage, totalPages]
  );

  const addProduct = (product: Omit<IProduct, 'id'>) => {
    setProductsList(prevProducts => {
      const lastID = Math.max(...prevProducts.map(item => item.id));

      return [...prevProducts, { id: lastID + 1, ...product }];
    });
  };

  const editProduct = (product: IProduct) => {
    setProductsList(prevProducts => prevProducts.map(item => (item.id === product.id ? product : item)));
  };

  const deleteProduct = (id: number) => {
    setProductsList(prevProducts => prevProducts.filter(item => item.id !== id));
  };

  const applyFilter = useCallback(
    (options: IFilterOptions | null) => {
      setFilterOptions(options);
    },
    [setFilterOptions]
  );

  return {
    products: currentPageProducts,
    page,
    total: totalPages,
    changePage,
    applyFilter,
    editProduct,
    deleteProduct,
    addProduct
  };
};

export default useProducts;
