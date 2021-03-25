import React from 'react';
import styled from 'styled-components';
import { FaShoppingCart, FaUser } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { useCartContext } from '../context/cart_context';
import { useUserContext } from '../context/user_context';

const UserButtons = () => {
  const {
    cart: { total_items },
    deleteCart,
  } = useCartContext();
  const { loginWithRedirect, loggedUser, logoutUser } = useUserContext();
  return (
    <Wrapper>
      {loggedUser ? (
        <div className="user">
          <img
            src={loggedUser.picture}
            alt={loggedUser.name}
            className="user-img"
          />
          <button
            className="user-btn"
            onClick={() => {
              logoutUser();
            }}
          >
            Logout <FaUser />
          </button>
        </div>
      ) : (
        <button
          className="user-btn"
          onClick={() => {
            loginWithRedirect();
          }}
        >
          Login <FaUser />
        </button>
      )}
      <Link className="cart-btn" to="/cart">
        <FaShoppingCart />
        <span className={`cart-value ${total_items === 0 && 'hide'}`}>
          {total_items}
        </span>
      </Link>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 8rem 3rem;
  margin-right: 1rem;
  text-transform: uppercase;
  justify-items: end;
  align-items: center;
  svg {
    height: 1.6rem;
    fill: var(--white);
    margin-left: 5px;
  }

  .user-btn {
    color: var(--white);
    display: flex;
    align-items: center;
    background: transparent;
    border: none;
    outline: none;
    text-transform: uppercase;
    cursor: pointer;
  }

  .cart-btn {
    position: relative;
    width: 2.6rem;
    display: flex;
    align-items: center;
    justify-content: flex-end;
  }
  .cart-value {
    position: absolute;
    top: -10px;
    right: -16px;
    height: 16px;
    width: 16px;
    border-radius: 50%;
    background: var(--primary);
    color: var(--white);
    padding: 12px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 0.75rem;
  }
  .hide {
    display: none;
  }

  .user {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
  }

  .user-img {
    border-radius: 50%;
    height: 2.5rem;
    width: 2.5rem;
  }
`;

export default UserButtons;
