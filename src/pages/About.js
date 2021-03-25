import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <Wrapper className="section">
      <div className="navbar-bg">
        <h1 className="text-center">We care about our customers</h1>
      </div>
      <div className="section">
        <div className="section-center">
          <h2 className="title">We care about our customers</h2>
          <div className="underline title-underline"></div>
          <p className="about-p">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem
            quia placeat facere reiciendis repellendus veritatis minus. Neque
            deleniti earum fugit tempora sint maxime quis saepe pariatur
            dolorum, aliquid dolorem in voluptatem voluptatum reiciendis
            obcaecati doloremque tenetur alias dolor repellendus ipsum
            consectetur! Quam autem error veniam quaerat unde adipisci, omnis
            reprehenderit?
          </p>

          <h2 className="title">Why choose our wines</h2>
          <div className="underline  title-underline"></div>
          <p className="about-p">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem
            quia placeat facere reiciendis repellendus veritatis minus. Neque
            deleniti earum fugit tempora sint maxime quis saepe pariatur
            dolorum, aliquid dolorem in voluptatem voluptatum reiciendis
            obcaecati doloremque tenetur alias dolor repellendus ipsum
            consectetur! Quam autem error veniam quaerat unde adipisci, omnis
            reprehenderit?
          </p>
          <Link to="/products" className="btn link-btn">
            Our Wines
          </Link>
        </div>
      </div>
    </Wrapper>
  );
};
const Wrapper = styled.div`
  padding-bottom: 0rem;
  .navbar-bg {
    background: linear-gradient(
        to bottom right,
        rgba(0, 0, 0, 0.6),
        rgba(0, 0, 0, 0.4)
      ),
      url('https://images.unsplash.com/photo-1506377247377-2a5b3b417ebb?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80');
    background-size: cover;
    background-position: left;
    height: 30rem;
    display: flex;
    padding: 5rem;
    justify-content: center;
    align-items: center;
  }

  .about-p {
    max-width: 50rem;
    margin: 2rem auto 4rem;
  }

  .link-btn {
    margin: 0 auto;
    text-align: center;
    display: block;
    width: 10rem;
  }
`;
export default About;
