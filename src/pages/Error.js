import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Error = () => {
  return (
    <Wrapper className="section page">
      <div className="navbar-bg">
        <h1 className="text-center">404</h1>
      </div>

      <div className="section-center">
        <h2 className="title">Sorry, this page cannot be found</h2>
        <div className="underline title-underline"></div>
        <Link to="/" className="btn ">
          Back home
        </Link>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  justify-content: center;

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
    margin-bottom: 5rem;
  }
`;

export default Error;
