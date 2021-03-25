import React from 'react';
import styled from 'styled-components';
import ProductGrid from './ProductGrid';

const GridList = ({ products }) => {
  return (
    <Wrapper>
      <div className="products-container">
        {products.map(product => {
          return <ProductGrid key={product.id} {...product} />;
        })}
      </div>
    </Wrapper>
  );
};
const Wrapper = styled.section`
  img {
    height: 290px;
  }

  .products-container {
    display: grid;
    gap: 2rem 1.5rem;
  }

  @media (min-width: 600px) {
    .products-container {
      grid-template-columns: repeat(2, 1fr);
    }
  }
  @media (min-width: 1100px) {
    .products-container {
      grid-template-columns: repeat(3, 1fr);
    }
  }
`;
export default GridList;
