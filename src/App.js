import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Cart from './pages/Cart';
import Error from './pages/Error';
import SingleProduct from './pages/SingleProduct';
import Products from './pages/Products';
import { Navbar, Footer, Sidebar, Seo } from './components';

const App = () => {
  return (
    <Router>
      <Seo title="Best Wines" />
      <Navbar />
      <Sidebar />
      <Switch>
        <Route exact path="/">
          <Seo title="Home" />
          <Home />
        </Route>
        <Route exact path="/about">
          <Seo title="About Us" />
          <About />
        </Route>
        <Route exact path="/products">
          <Seo title="All Our Products" />
          <Products />
        </Route>
        <Route exact path="/cart">
          <Seo title="Cart" />
          <Cart />
        </Route>
        <Route exact path="/products/:id">
          <SingleProduct />
        </Route>
        <Route path="*">
          <Seo title="404" />
          <Error />
        </Route>
      </Switch>
      <Footer />
    </Router>
  );
};

export default App;
