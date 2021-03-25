import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { useCartContext } from '../context/cart_context';
import { MdRemoveShoppingCart } from 'react-icons/md';

const CartItem = ({ item }) => {
  const {
    id,
    product_id,
    name,
    sku,
    quantity,
    price,
    line_total,
    media: { source },
  } = item;

  const { removeItem } = useCartContext();

  return (
    <Wrapper>
      <Link to={`/products/${product_id}`} className="cart-product">
        <img src={source} alt={name} />
        <div className="product-title">
          <h5 className="primary">{name}</h5>
          <p>{sku}</p>
          <p className="price primary">{price.formatted_with_symbol}</p>
          <p className="quantity"> quantity: {quantity}</p>
        </div>
      </Link>
      <h5 className="info info-hide">{price.formatted_with_symbol}</h5>
      <h5 className="info info-hide">{quantity}</h5>
      <h5 className="info info-hide-small">
        {line_total.formatted_with_symbol}
      </h5>
      <button onClick={() => removeItem(id)} className="remove-btn">
        <MdRemoveShoppingCart />
      </button>
    </Wrapper>
  );
};

const Wrapper = styled.article`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 3rem;
  align-items: center;
  justify-items: center;
  grid-template-rows: 125px;
  margin-bottom: 3rem;

  .cart-product {
    height: 100%;
    display: grid;
    grid-template-columns: 100px 200px;
    align-items: center;
    justify-self: left;

    img {
      height: 100%;
      width: 100%;
      display: block;
      object-fit: cover;
      border-radius: var(--radius);
    }
    .product-title {
      margin-left: 1rem;
      text-transform: capitalize;
    }
  }

  .info {
    font-size: 1.2rem;
  }
  .price,
  .quantity {
    display: none;
  }

  .remove-btn {
    background: var(--primary);
    color: var(--white);
    border: none;
    outline: none;
    border-radius: var(--radius);
    padding: 0.4rem 0.6rem;
    font-size: 1.2rem;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
  }

  @media screen and (max-width: 700px) {
    grid-template-columns: 300px 1fr 3rem;

    .info-hide {
      display: none;
    }
    .price,
    .quantity {
      display: block;
    }
  }
  @media screen and (max-width: 500px) {
    grid-template-columns: 1fr 3rem;
    .info-hide-small {
      display: none;
    }
    .cart-product {
      grid-template-columns: 100px 150px;
    }
  }
`;

export default CartItem;
