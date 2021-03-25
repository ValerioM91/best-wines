import React from 'react';
import styled from 'styled-components';
import { useProductsContext } from '../context/products_context';
import Card from './Card';

const Featured = () => {
  const {
    featured_products: featured,
    products_loading: loading,
    products_error,
  } = useProductsContext();

  if (loading) {
    return <div className="loading"></div>;
  }

  if (products_error)
    return (
      <Wrapper className="section">
        <div className="section-center text-center">
          <h5>There was an error</h5>
        </div>
      </Wrapper>
    );

  return (
    <Wrapper className="section">
      <div className="section-center">
        <h2 className="title">raccomended for you</h2>
        <div className="underline title-underline"></div>
        <div className="featured">
          {featured.map(prod => {
            return (
              <Card
                key={prod.id}
                product={prod}
                loading={loading}
                className="card"
              />
            );
          })}
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .featured {
    display: grid;
    margin: 3rem auto;
    justify-content: center;
    justify-items: center;
    align-items: center;
    gap: 2.5rem;
  }

  .card {
  }

  @media (min-width: 630px) {
    .featured {
      grid-template-columns: repeat(2, var(--card-width));
    }
  }

  @media (min-width: 960px) {
    .featured {
      grid-template-columns: repeat(3, var(--card-width));
    }
  }

  @media (min-width: 1290px) {
    .featured {
      grid-template-columns: repeat(4, var(--card-width));
    }
  }
`;

export default Featured;
