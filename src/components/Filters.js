import React from 'react';
import styled from 'styled-components';
import { useFilterContext } from '../context/filter_context';

const Filters = () => {
  const {
    updateFilters,
    filters: { text, category, price, max_price, min_price },
    all_products,
    clearFilters,
  } = useFilterContext();

  const categories = [
    'all',
    ...new Set(
      all_products
        .map(prod =>
          prod.categories.map(cat => {
            return cat.name;
          })
        )
        .flat()
    ),
  ];

  const brands = ['all', ...new Set(all_products.map(prod => prod.name))];

  return (
    <Wrapper>
      <form
        onSubmit={e => {
          e.preventDefault();
        }}
      >
        <div className="form-control">
          <input
            type="text"
            name="text"
            value={text}
            onChange={updateFilters}
            placeholder="Search"
            className="search-input"
          />
        </div>
        <div className="form-control">
          <h5>Category</h5>
          {categories.map((cat, index) => {
            return (
              <button
                key={index}
                name="category"
                className={`category ${category === cat && 'active'}`}
                value={cat}
                onClick={updateFilters}
              >
                {cat}
              </button>
            );
          })}
        </div>
        <div className="form-control">
          <h5>Brands</h5>
          <select name="brand" onChange={updateFilters}>
            {brands.map(b => (
              <option value={b} key={b}>
                {b}
              </option>
            ))}
          </select>
        </div>
        <div className="form-control">
          <h5>Price</h5>
          <p>£{price}</p>
          <input
            type="range"
            name="price"
            step="0.01"
            min={min_price}
            max={max_price}
            value={price}
            onChange={updateFilters}
          />
        </div>
      </form>
      <button onClick={clearFilters} className="btn btn-small">
        clear filters
      </button>
    </Wrapper>
  );
};
const Wrapper = styled.section`
  margin-bottom: 3rem;
  .form-control {
    margin-bottom: 1.25rem;
  }
  .search-input {
    padding: 0.5rem;
    border: none;
    outline: none;
    border-radius: var(--radius);
  }

  .category {
    border: none;
    background: transparent;
    text-transform: capitalize;
    outline: none;
    display: block;
    font-size: 1rem;
    padding: 0.3rem 0;
    color: var(--grey-2);
    border-bottom: 1px solid transparent;
  }

  .active {
    border-bottom: 1px solid var(--primary);
    color: var(--primary);
  }

  select {
    margin-top: 0.5rem;
    text-transform: capitalize;
    padding: 0.3rem 0.6rem;
    border: none;
    outline: none;
    border-radius: var(--radius);
  }
`;
export default Filters;
