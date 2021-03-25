import Commerce from '@chec/commerce.js';
import React, { useContext, createContext, useEffect, useReducer } from 'react';
import reducer from '../reducers/products_reducer';
import {
  LOAD_PRODUCTS,
  GET_PRODUCTS_BEGIN,
  GET_PRODUCTS_ERROR,
  LOAD_SINGLE_PRODUCTS,
  GET_SINGLE_PRODUCTS_BEGIN,
  GET_SINGLE_PRODUCTS_ERROR,
} from '../actions';

const initialState = {
  products_loading: true,
  products_error: false,
  products: [],
  categories: [],
  featured_products: [],
  single_product_loading: true,
  single_product_error: false,
  single_product: {},
};

const commerce = new Commerce(process.env.REACT_APP_COMMERCE);

const ProductsContext = createContext();

const ProductsProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const fetchProducts = async () => {
    dispatch({ type: GET_PRODUCTS_BEGIN });
    try {
      const { data: productsData } = await commerce.products.list();
      const { data: categoriesData } = await commerce.categories.list();
      dispatch({
        type: LOAD_PRODUCTS,
        payload: { productsData, categoriesData },
      });
    } catch (err) {
      dispatch({ type: GET_PRODUCTS_ERROR });
      console.log(err);
    }
  };

  const fetchSingleProducts = async id => {
    dispatch({ type: GET_SINGLE_PRODUCTS_BEGIN });
    try {
      const data = await commerce.products.retrieve(`${id}`);
      dispatch({ type: LOAD_SINGLE_PRODUCTS, payload: data });
    } catch (err) {
      dispatch({ type: GET_SINGLE_PRODUCTS_ERROR });
      console.log(err);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <ProductsContext.Provider value={{ ...state, fetchSingleProducts }}>
      {children}
    </ProductsContext.Provider>
  );
};

export const useProductsContext = () => {
  return useContext(ProductsContext);
};

export { ProductsProvider };
