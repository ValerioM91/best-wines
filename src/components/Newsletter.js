import React from 'react';
import styled from 'styled-components';
import { AiOutlineMail } from 'react-icons/ai';

const Newsletter = () => {
  return (
    <Wrapper>
      <div className="newsletter section-center">
        <h5 className="newsletter-title">Newsletter</h5>
        <form
          className="form"
          onSubmit={e => {
            e.preventDefault();
          }}
        >
          <input
            type="email"
            className="form-input"
            placeholder="Enter you e-mail"
            required
          />
          <button className="submit-btn" type="submit">
            <AiOutlineMail />
          </button>
        </form>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  padding: 3rem 0;
  .newsletter-title {
    text-transform: uppercase;
    padding: 0.5rem 0;
    color: var(--grey-2);
    align-self: center;
  }

  .newsletter {
    width: 90vw;
    max-width: 500px;
    display: grid;
    grid-template-columns: 1fr auto;
  }

  .form {
    display: flex;
    align-items: center;
  }

  .form-input {
    font-size: 1.2rem;
    padding: 0.5rem 1.2rem;
    border: none;
    outline: none;
  }
  .form-input {
    color: var(--grey-2);
    background: var(--grey-1);
    border-top-left-radius: var(--radius);
    border-bottom-left-radius: var(--radius);
  }
  .form-input::placeholder {
    color: var(--grey-1);
    text-transform: capitalize;
  }
  .submit-btn {
    background: var(--grey-1);
    display: flex;
    align-items: center;
    justify-content: center;
    border: none;
    border-top-right-radius: var(--radius);
    border-bottom-right-radius: var(--radius);
    text-transform: capitalize;
    letter-spacing: var(--spacing);
    cursor: pointer;
    transition: var(--transition);
    color: var(--grey-3);
    padding: 0 1rem;
    font-size: 2rem;
    height: 100%;
    outline: none;
    vertical-align: middle;
  }
  @media (max-width: 500px) {
    .newsletter {
      grid-template-columns: 1fr;
      justify-items: center;
    }
  }
`;

export default Newsletter;
