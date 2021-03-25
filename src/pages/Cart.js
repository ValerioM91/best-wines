import React from 'react';
import styled from 'styled-components';
import { useCartContext } from '../context/cart_context';
import { Link } from 'react-router-dom';
import { Loading, CartItem } from '../components';
import { useUserContext } from '../context/user_context';

const Cart = () => {
  const {
    cart: { subtotal, line_items },
    isLoading: cartLoading,
    deleteCart,
  } = useCartContext();
  const {
    loggedUser,
    loginWithRedirect,
    isLoading: userLoading,
  } = useUserContext();

  if (cartLoading || userLoading)
    return (
      <Wrapper className="section page-100">
        <Loading />
      </Wrapper>
    );

  if (userLoading)
    return (
      <Wrapper className="section page-100">
        <Loading />
      </Wrapper>
    );

  if (line_items.length < 1) {
    return (
      <Wrapper className="section page-100">
        <h2 className="title">Your cart is empty</h2>
        <Link to="/products" className="btn center">
          Go to our products
        </Link>
      </Wrapper>
    );
  }

  return (
    <Wrapper className="section page-100">
      <div className="section-center">
        <h2 className="title">Cart</h2>
        <div className="underline title-underline"></div>
        <div className="columns">
          <h5 className="hide-small">Item</h5>
          <h5 className="hide">Price</h5>
          <h5 className="hide">Quantity</h5>
          <h5 className="hide-small">Subtotal</h5>
        </div>
        {line_items.map(item => (
          <CartItem key={item.id} item={item} />
        ))}
        <div className="buttons">
          <button className="btn btn-small clear-btn" onClick={deleteCart}>
            Clear cart
          </button>
          <Link className="btn btn-small" to="/products">
            Continue shopping
          </Link>
        </div>
        <hr />
        <div className="buttons">
          <h3>Total: {subtotal.formatted_with_symbol}</h3>
          {loggedUser ? (
            <button className="btn" disabled>
              Go to checkout
            </button>
          ) : (
            <button className="btn" onClick={() => loginWithRedirect()}>
              Login to checkout
            </button>
          )}
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  padding-top: 10rem;

  .columns {
    display: grid;
    grid-template-columns: 300px 1fr 1fr 1fr 3rem;
    justify-items: center;
    margin-bottom: 1rem;
  }

  .center {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 3rem auto;
    max-width: 15rem;
  }

  .buttons {
    margin-top: 4rem;
    margin-bottom: 2rem;
    display: flex;
    justify-content: space-between;
  }

  .clear-btn {
    background: var(--grey-1);
  }
  @media screen and (max-width: 700px) {
    .hide {
      display: none;
    }
    .columns {
      grid-template-columns: 300px 1fr 3rem;
    }
  }
  @media screen and (max-width: 500px) {
    .hide-small {
      display: none;
    }
  }
`;

export default Cart;
