import React from 'react';
import styled from 'styled-components';
import { useFilterContext } from '../context/filter_context';
import { AiOutlineUnorderedList } from 'react-icons/ai';
import { HiViewGrid } from 'react-icons/hi';

const Sort = () => {
  const {
    setGridView,
    setListView,
    filtered_products: products,
    grid_view,
    sort,
    updateSort,
  } = useFilterContext();

  return (
    <Wrapper>
      <div className="sort">
        <div className="btn-container">
          <button className={`${grid_view && 'active'}`} onClick={setGridView}>
            <HiViewGrid />
          </button>
          <button className={`${!grid_view && 'active'}`} onClick={setListView}>
            <AiOutlineUnorderedList />
          </button>
        </div>
        <p>
          <span>{products.length}</span> products found
        </p>
        <hr />
        <form>
          <label htmlFor="sort">Sort By</label>
          <select value={sort} name="sort" id="sort" onChange={updateSort}>
            <option value="price-lowest">price (lowest)</option>
            <option value="price-highest">price (highest)</option>
            <option value="name-a">name a-z</option>
            <option value="name-z">name z-a</option>
          </select>
        </form>
      </div>
    </Wrapper>
  );
};
const Wrapper = styled.section`
  .sort {
    display: grid;
    grid-template-columns: auto auto 1fr auto;
    align-items: center;
    margin-bottom: 1rem;
  }
  @media (max-width: 500px) {
    .sort {
      grid-template-columns: auto;
    }
  }
  .btn-container {
    display: grid;
    grid-template-columns: 1fr 1fr;
    width: 4rem;
    margin-right: 0.5rem;
    margin-bottom: 0.5rem;
    button {
      background: transparent;
      display: flex;
      align-items: center;
      justify-content: center;
      width: 1.5rem;
      height: 1.5rem;
      border-radius: var(--radius);
      border: 1px solid;
      outline: none;
    }
    .active {
      background: var(--black);
      color: var(--white);
    }
  }
  p {
    text-transform: capitalize;
    margin-right: 1rem;
    margin-bottom: 0.5rem;
    span {
      vertical-align: text-bottom;
    }
  }
  hr {
    margin-bottom: 0.5rem;
    margin-right: 1rem;
  }
  form {
    margin-bottom: 0.5rem;
    label {
      margin-right: 0.5rem;
    }
    select {
      outline: none;
      border: none;
      text-transform: capitalize;
      background: transparent;
      color: var(--grey-1);
      font-family: inherit;
      font-size: inherit;
    }
    option {
    }
  }
`;
export default Sort;
