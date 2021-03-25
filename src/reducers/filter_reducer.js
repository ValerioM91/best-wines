import {
  LOAD_PRODUCTS,
  SET_GRID_VIEW,
  SET_LIST_VIEW,
  SORT_PRODUCTS,
  UPDATE_SORT,
  UPDATE_FILTERS,
  FILTER_PRODUCTS,
  CLEAR_FILTERS,
} from '../actions';

const reducer = (state, action) => {
  if (action.type === LOAD_PRODUCTS) {
    let prices = action.payload.map(p => p.price.raw);
    const maxPrice = Math.max(...prices);
    const minPrice = Math.min(...prices);
    return {
      ...state,
      all_products: [...action.payload],
      filtered_products: [...action.payload],
      filters: {
        ...state.filters,
        price: maxPrice,
        max_price: maxPrice,
        min_price: minPrice,
      },
    };
  }
  if (action.type === SET_GRID_VIEW) {
    return {
      ...state,
      grid_view: true,
    };
  }
  if (action.type === SET_LIST_VIEW) {
    return {
      ...state,
      grid_view: false,
    };
  }

  if (action.type === UPDATE_SORT) {
    const value = action.payload;
    return { ...state, sort: value };
  }

  if (action.type === SORT_PRODUCTS) {
    const { sort, filtered_products } = state;
    let tempProducts = [...filtered_products];
    if (sort === 'price-lowest') {
      tempProducts = filtered_products.sort(
        (a, b) => a.price.raw - b.price.raw
      );
      return { ...state, filtered_products: tempProducts };
    }
    if (sort === 'price-highest') {
      tempProducts = filtered_products.sort(
        (a, b) => b.price.raw - a.price.raw
      );
      return { ...state, filtered_products: tempProducts };
    }
    if (sort === 'name-a') {
      tempProducts = filtered_products.sort((a, b) =>
        a.name.localeCompare(b.name)
      );
      return { ...state, filtered_products: tempProducts };
    }
    if (sort === 'name-z') {
      tempProducts = filtered_products.sort((a, b) =>
        b.name.localeCompare(a.name)
      );
      return { ...state, filtered_products: tempProducts };
    }
    return {
      ...state,
    };
  }

  if (action.type === UPDATE_FILTERS) {
    const { name, value } = action.payload;
    const tempFilters = { ...state.filters, [name]: value };
    return { ...state, filters: tempFilters };
  }

  if (action.type === FILTER_PRODUCTS) {
    const {
      all_products,
      filters: { text, category, brand, price },
    } = state;
    let tempFilteredProducts = [...all_products];

    // TEXT
    if (text) {
      tempFilteredProducts = tempFilteredProducts.filter(prod =>
        prod.name.toLowerCase().startsWith(text)
      );
    }

    if (category !== 'all') {
      tempFilteredProducts = tempFilteredProducts.filter(prod =>
        prod.categories.some(cat => cat.name === category)
      );
    }

    if (brand !== 'all') {
      tempFilteredProducts = tempFilteredProducts.filter(
        prod => prod.name === brand
      );
    }

    tempFilteredProducts = tempFilteredProducts.filter(
      prod => prod.price.raw <= price
    );

    return { ...state, filtered_products: tempFilteredProducts };
  }

  if (action.type === CLEAR_FILTERS) {
    return {
      ...state,
      filters: {
        ...state.filters,
        text: '',
        category: 'all',
        brand: 'all',
        price: state.filters.max_price,
      },
    };
  }
};
export default reducer;
