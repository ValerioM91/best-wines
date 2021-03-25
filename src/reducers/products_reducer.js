import {
  LOAD_PRODUCTS,
  GET_PRODUCTS_BEGIN,
  GET_PRODUCTS_ERROR,
  LOAD_SINGLE_PRODUCTS,
  GET_SINGLE_PRODUCTS_BEGIN,
  GET_SINGLE_PRODUCTS_ERROR,
} from '../actions';

const products_reducer = (state, action) => {
  if (action.type === GET_PRODUCTS_BEGIN) {
    return { ...state, products_loading: true };
  }
  if (action.type === LOAD_PRODUCTS) {
    const featuredProducts = action.payload.productsData.filter(product =>
      product.categories.some(cat => cat.name === 'featured')
    );
    const categoriesArr = action.payload.categoriesData.map(cat => cat.name);
    return {
      ...state,
      products: action.payload.productsData,
      categories: categoriesArr,
      products_loading: false,
      featured_products: featuredProducts,
    };
  }

  if (action.type === GET_PRODUCTS_ERROR) {
    return {
      ...state,
      products_loading: false,
      products_error: true,
    };
  }

  if (action.type === GET_SINGLE_PRODUCTS_BEGIN) {
    return {
      ...state,
      single_product_loading: true,
    };
  }

  if (action.type === GET_SINGLE_PRODUCTS_ERROR) {
    return {
      ...state,
      single_product_loading: false,
      single_product_error: true,
    };
  }

  if (action.type === LOAD_SINGLE_PRODUCTS) {
    return {
      ...state,
      single_product_loading: false,
      single_product: action.payload,
    };
  }

  return state;
};

export default products_reducer;
