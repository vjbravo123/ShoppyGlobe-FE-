import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import { lazy, Suspense } from 'react';

const ProductList = lazy(() => import('./components/ProductList'));
const ProductDetail = lazy(() => import('./components/ProductDetail'));
const Cart = lazy(() => import('./components/Cart'));
const Checkout = lazy(() => import('./components/Checkout'));
const NotFound = lazy(() => import('./components/NotFound'));
const Footer = lazy(() => import('./components/Footer'));

const App = () => {
  return (
      <BrowserRouter>
        <Header />
         <Suspense>
          <Routes>
            <Route path="/" element={<ProductList />} />
            <Route path="/product/:id" element={<ProductDetail />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
          </Suspense>
        <Footer/>
      </BrowserRouter>

  );
};

export default App;
