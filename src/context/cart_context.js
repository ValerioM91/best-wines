import React, { createContext, useContext, useEffect, useState } from 'react';
import Commerce from '@chec/commerce.js';

const commerce = new Commerce(process.env.REACT_APP_COMMERCE);

const CartContext = createContext();
const CartProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [cart, setCart] = useState({});

  const fetchCart = async () => {
    setIsLoading(true);
    const newCart = await commerce.cart.retrieve();
    setCart(newCart);
    setIsLoading(false);
  };

  const addToCart = async (product, quantity) => {
    setIsLoading(true);
    const id = product.id;
    let stock = product.inventory.available;
    const productAlreadyInCart = cart.line_items.find(
      item => item.product_id === id
    );
    if (productAlreadyInCart) stock = stock - productAlreadyInCart.quantity;
    if (stock < 1) return;
    await commerce.cart.add(id, quantity);
    await fetchCart();
    setIsLoading(false);
  };

  const removeItem = async id => {
    setIsLoading(true);
    await commerce.cart.remove(id);
    await fetchCart();
    setIsLoading(false);
  };

  const deleteCart = async () => {
    setIsLoading(true);
    await commerce.cart.empty();
    await fetchCart();
    setIsLoading(false);
  };

  useEffect(() => {
    fetchCart();
  }, []);

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        isLoading,
        removeItem,
        deleteCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCartContext = () => {
  return useContext(CartContext);
};

export { CartProvider };
