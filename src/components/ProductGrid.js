import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { FaSearch } from 'react-icons/fa';

const ProductGrid = ({
  media = { source: '' },
  name,
  price = { formatted_with_symbol: '' },
  id,
}) => {
  return (
    <Wrapper>
      <div className="container">
        <Link to={`products/${id}`}>
          <img src={media.source} alt={name} />
          <div className="link">
            <FaSearch />
          </div>
        </Link>
      </div>
      <footer>
        <h5>{name}</h5>
        <p>{price.formatted_with_symbol}</p>
      </footer>
    </Wrapper>
  );
};

const Wrapper = styled.article`
  .container {
    position: relative;
    background: var(--black);
    border-radius: var(--radius);
  }
  img {
    width: 100%;
    display: block;
    object-fit: cover;
    border-radius: var(--radius);
    transition: var(--transition);
  }
  .link {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: var(--primary);
    display: flex;
    align-items: center;
    justify-content: center;
    width: 2.5rem;
    height: 2.5rem;
    border-radius: 50%;
    transition: var(--transition);
    opacity: 0;
    cursor: pointer;
    svg {
      font-size: 1.25rem;
      color: var(--white);
    }
  }
  .container:hover img {
    opacity: 0.5;
  }
  .container:hover .link {
    opacity: 1;
  }
  footer {
    margin-top: 1rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  footer h5,
  footer p {
    text-transform: capitalize;
    margin-bottom: 0;
    font-weight: 600;
  }

  footer p {
    color: var(--primary);
    letter-spacing: var(--spacing);
  }
`;
export default ProductGrid;
