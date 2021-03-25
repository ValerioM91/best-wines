import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Loading } from '../components';
import { useCartContext } from '../context/cart_context';

const Card = ({ product, loading, error }) => {
  const { addToCart } = useCartContext();

  if (loading)
    return (
      <Wrapper>
        <div className="content-loading">
          <Loading />
        </div>
      </Wrapper>
    );

  if (error)
    return (
      <Wrapper>
        <div className="content-loading text-center">
          <h5>There was an error</h5>
        </div>
      </Wrapper>
    );

  return (
    <Wrapper>
      <div className="content">
        <Link to={`/products/${product.id}`}>
          <img
            src={product.media.source}
            alt="featured wine"
            className="card-img"
          />
        </Link>
        <div className="card-info">
          <div>
            <h5 className="card-title">{product.name}</h5>
            <p className="description">
              {product.variant_groups[0].options[0].name}
            </p>
          </div>
          <h5 className="card-price">{product.price.formatted_with_symbol}</h5>
        </div>
        <div className="buttons">
          <button
            className="btn-trsp"
            onClick={() => {
              addToCart(product, 1);
            }}
          >
            add to cart
          </button>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: var(--card-width);
  min-height: 30rem;
  background: var(--white);
  box-shadow: 0px 2px 10px 5px rgba(0, 0, 0, 0.05);
  padding: 1.5rem;

  .content-loading {
    margin-top: 6rem;
  }

  .card-img {
    width: 100%;
    height: 290px;
    display: block;
    object-fit: cover;
  }

  .card-title {
    text-transform: uppercase;
  }

  .card-info {
    margin-top: 1rem;
    margin-bottom: 1rem;
    height: 60px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .card-price {
    color: var(--primary);
    margin-left: 5px;
    font-size: 1.2rem;
    font-weight: 600;
  }

  .description {
    text-transform: capitalize;
    font-weight: 500;
  }
`;

export default Card;
