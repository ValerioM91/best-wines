import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { FaSearch } from 'react-icons/fa';

const ListView = ({ products }) => {
  return (
    <Wrapper>
      {products.map(product => {
        const {
          id,
          name,
          media: { source: image },
          description,
          price: { formatted_with_symbol },
        } = product;
        return (
          <article key={id} className="prod">
            <Link to={`products/${id}`}>
              <div className="prod-link">
                <img src={image} alt={name} className="prod-img" />
                <div className="icon">
                  <FaSearch />
                </div>
              </div>
            </Link>
            <div>
              <h4 className="name">{name}</h4>
              <h5 className="price">{formatted_with_symbol}</h5>
              <p
                className="desc"
                dangerouslySetInnerHTML={{
                  __html: `${description.substring(0, 150)}...`,
                }}
              ></p>
              <Link to={`/products/${id}`} className="btn btn-small">
                Details
              </Link>
            </div>
          </article>
        );
      })}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  .prod {
    margin-bottom: 3rem;
    display: grid;
    grid-template-columns: auto 1fr;
    column-gap: 2rem;
    align-items: center;
  }
  .prod-img {
    width: 100%;
    display: block;
    width: 250px;
    height: 250px;
    object-fit: cover;
    border-radius: var(--radius);
    position: relative;
    /* margin-bottom: 2rem; */
  }

  .prod-link {
    display: inline-block;
    position: relative;
  }
  .icon {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: var(--primary);
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    padding: 0.5rem;
    opacity: 0;
    transition: var(--transition);
    svg {
      font-size: 1.25rem;
      color: var(--white);
    }
  }
  .desc {
    margin-bottom: 1.25rem;
  }

  .prod-link:hover .prod-img {
    filter: brightness(0.6);
  }
  .prod-link:hover .icon {
    opacity: 1;
  }

  .name {
    margin-bottom: 1.25rem;
  }

  .price {
    color: var(--primary);
    margin-bottom: 1.25rem;
  }

  @media (max-width: 950px) {
    .prod {
      grid-template-columns: auto;

      .prod-img {
        margin-bottom: 1rem;
      }
    }
  }
`;

export default ListView;
