import React from 'react';
import styled from 'styled-components';
import { useProductsContext } from '../context/products_context';
import { Loading, Sort, ProductList, Filters } from '../components';
import { useUserContext } from '../context/user_context';

const Products = () => {
  const { products_loading: productLoading } = useProductsContext();
  const { isLoading: userLoading } = useUserContext();

  if (productLoading || userLoading) {
    return (
      <Wrapper className=" section page-100">
        <Loading />
      </Wrapper>
    );
  }

  if (userLoading) {
    return (
      <Wrapper className=" section page-100">
        <Loading />
      </Wrapper>
    );
  }

  return (
    <Wrapper className=" section page-100">
      <h2 className="title">Our best wines</h2>
      <div className="underline title-underline"></div>
      <section className="section-center products">
        <Filters />
        <div>
          <Sort />
          <ProductList />
        </div>
      </section>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  padding-top: 10rem;
  .products {
    display: grid;
    grid-template-columns: 250px 1fr;

    @media (max-width: 760px) {
      grid-template-columns: auto;
    }
  }
`;
export default Products;
