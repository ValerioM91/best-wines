import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Link, useHistory } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { useProductsContext } from '../context/products_context';
import { useCartContext } from '../context/cart_context';
import { useUserContext } from '../context/user_context';
import { AmountButtons, Loading } from '../components';

const SingleProduct = () => {
  const { id } = useParams();
  const history = useHistory();
  const {
    fetchSingleProducts,
    single_product_loading: productLoading,
    single_product_error: error,
    single_product: product,
  } = useProductsContext();
  const { addToCart, cart, isLoading: cartLoading } = useCartContext();
  const { isLoading: userLoading } = useUserContext();
  const [amount, setAmount] = useState(1);

  useEffect(() => {
    fetchSingleProducts(id);
  }, []);

  useEffect(() => {
    if (error) {
      setTimeout(() => {
        history.push('/');
      }, 3000);
    }
  }, [error]);

  if (productLoading || cartLoading || userLoading)
    return (
      <Wrapper className="section page-100">
        <Loading />
      </Wrapper>
    );

  if (error)
    return (
      <Wrapper className="section page-100">
        <div className="section-center text-center">
          <h2 className="title">There was an error</h2>
          <div className="underline title-underline"></div>
          <h3>You are being redirected to the home page</h3>
        </div>
      </Wrapper>
    );

  const {
    id: productId,
    media: { source: image },
    name,
    description,
    price: { formatted_with_symbol: price },
    inventory: { available },
    variant_groups,
  } = product;

  const itemInCart = cart.line_items.find(
    prod => prod.product_id === productId
  );
  let stock = available;
  if (itemInCart) stock -= itemInCart.quantity;

  const subname = variant_groups[0].options[0].name;

  const increase = () => {
    const newAmount = amount + 1;
    if (newAmount > stock) return;
    setAmount(newAmount);
  };

  const decrease = () => {
    const newAmount = amount - 1;
    if (newAmount < 1) return;
    setAmount(newAmount);
  };

  return (
    <Wrapper className="section page-100">
      <div className="section-center">
        <Link to="/products" className="btn btn-small">
          Back to all products
        </Link>
        <article className="product">
          <img src={image} alt={name} className="image" />
          <div className="product-info">
            <h3 className="product-title">{name}</h3>
            <h5 className="product-subtitle">{subname}</h5>
            <p
              className="product-description"
              dangerouslySetInnerHTML={{ __html: description }}
            ></p>
            <div className="infos">
              <p className="info">
                <span>available: </span> {stock || 'Out of stock'}
              </p>
              <p className="info">
                <span>price: </span>
                <span className="price">{price}</span>
              </p>
              {stock > 0 && (
                <>
                  <AmountButtons
                    amount={amount}
                    setAmount={setAmount}
                    increase={increase}
                    decrease={decrease}
                  />
                  <Link
                    to="/cart"
                    className="btn add-btn"
                    onClick={() => {
                      addToCart(product, amount);
                    }}
                  >
                    Add to cart
                  </Link>
                </>
              )}
            </div>
          </div>
        </article>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  padding-top: 10rem;

  .load-flex {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .product {
    margin-top: 2rem;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 5rem;
    img {
      height: 600px;
      width: 100%;
      display: block;
      object-fit: cover;
    }
    &-info {
      padding: 2rem;
    }

    &-title {
      color: var(--primary);
    }
    &-subtitle {
      text-transform: capitalize;
      margin-bottom: 2rem;
    }
    p {
      line-height: 2;
      margin-bottom: 1.3rem;
    }

    .infos {
      display: grid;
      grid-template-columns: 1fr 1fr;
    }
    .info {
      display: grid;
      grid-template-columns: 90px auto;
      align-items: center;
      span {
        text-transform: capitalize;
        font-weight: 700;
      }
      .price {
        color: var(--primary);
      }
    }
    .add-btn {
      max-width: 11rem;
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }
  @media (max-width: 1000px) {
    .product {
      grid-template-columns: 1fr;
    }
  }
  @media (max-width: 550px) {
    .infos {
      grid-template-columns: 1fr !important;

      .add-btn {
        margin-top: 1rem;
      }
    }
  }
`;

export default SingleProduct;
