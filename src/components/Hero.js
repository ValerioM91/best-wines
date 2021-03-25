import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { useProductsContext } from '../context/products_context';
import hero from '../assets/hero.jpg';
import { Loading, Card } from '../components';

const Hero = () => {
  const {
    products_loading: loading,
    products_error,
    featured_products,
  } = useProductsContext();

  const featuredHero = featured_products[0];

  if (loading)
    return (
      <Wrapper>
        <img src={hero} alt="hero" className="bg" />
        <section className="section-center loading-section">
          <Loading />
        </section>
      </Wrapper>
    );

  return (
    <Wrapper>
      <img src={hero} alt="hero" className="bg" />
      <section className="section-center hero-section">
        <article className="hero-content">
          <h1 className="hero-title">We can help you buy best wines</h1>
          <div className="underline"></div>
          <p>Best wines from Europe</p>
          <Link to="/products" className="btn">
            Discover wines
          </Link>
        </article>
        <article className={`card-container card-show`}>
          <Card
            product={featuredHero}
            loading={loading}
            error={products_error}
          />
        </article>
      </section>
    </Wrapper>
  );
};

export default Hero;

const Wrapper = styled.header`
  background: linear-gradient(
    to bottom right,
    rgba(0, 0, 0, 0.4),
    rgba(0, 0, 0, 0.3)
  );
  background-size: cover;
  background-position: left;
  min-height: 100vh;

  .bg {
    position: absolute;
    object-fit: cover;
    height: 100vh;
    width: 100%;
    z-index: -1;
  }

  .hero-section {
    min-height: 100vh;
    display: grid;
    place-items: center;
    align-items: center;
    grid-template-columns: 1fr auto;
    column-gap: 4rem;
    padding-top: 5rem;
  }
  .loading-section {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100vh;
  }

  @media (max-width: 700px) {
    .card-show {
      display: none;
    }
  }

  .card-container {
    position: relative;
    margin-top: 3rem;
  }

  .card-container:before {
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    top: 0;
    left: 50%;
    transform: translate(-50%, -50%);
    content: '%';
    color: var(--white);
    font-size: 1.7rem;
    background: radial-gradient(var(--primary) 50%, var(--white) 51%);
    height: 100px;
    width: 100px;
    border-radius: 50%;
  }

  .hero-content p {
    color: var(--grey-3);
    margin: 1.5rem 0;
  }
`;
