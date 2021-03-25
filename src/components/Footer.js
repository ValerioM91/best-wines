import React from 'react';
import styled from 'styled-components';
import Newsletter from './Newsletter';

const Footer = () => {
  return (
    <Wrapper>
      <Newsletter />
      <hr />
      <div className="footer-content">
        <h5>
          &copy; {new Date().getFullYear()}
          <span> Best wines</span>
        </h5>
        <h5>All rights reserved</h5>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.footer`
  background: var(--bg-black);

  .footer-content {
    display: flex;
    padding: 1rem;
    justify-content: center;
    align-items: center;
  }
  span {
    color: var(--primary);
    text-transform: uppercase;
    margin-right: 0.3rem;
  }
  h5 {
    color: var(--grey-2);
    font-weight: 400;
    text-transform: none;
    line-height: 1.25;
  }

  hr {
    border-top: 1px solid var(--grey-1);
  }
`;

export default Footer;
