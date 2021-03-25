import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import { ProductsProvider } from './context/products_context';
import { SidebarProvider } from './context/sidebar_context';
import { FilterProvider } from './context/filter_context';
import { CartProvider } from './context/cart_context';
import { UserProvider } from './context/user_context';
import { Auth0Provider } from '@auth0/auth0-react';

ReactDOM.render(
  <Auth0Provider
    domain={process.env.REACT_APP_AUTH_DOMAIN}
    clientId={process.env.REACT_APP_AUTH_CLIENT_ID}
    redirectUri={window.location.origin}
  >
    <SidebarProvider>
      <ProductsProvider>
        <FilterProvider>
          <CartProvider>
            <UserProvider>
              <App />
            </UserProvider>
          </CartProvider>
        </FilterProvider>
      </ProductsProvider>
    </SidebarProvider>
  </Auth0Provider>,
  document.querySelector('#root')
);
