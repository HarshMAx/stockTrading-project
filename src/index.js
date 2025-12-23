import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';
import HomePage from './landing_page/home/HomePage';
import Signup from './landing_page/signup/Signup';
import Product from './landing_page/product/ProductPage';
import PricingPage from './landing_page/pricing/PricingPage';
import Support from './landing_page/support/SupportPage';
import About from './landing_page/about/AboutPage';
import Navbar from './Navbar';
import Footer from './Footer';
import NotFoundPage from './NotFoundPage';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
  //   <div>
  //     <h1>
  //       <HomePage />
  //     </h1>
  //   </div>
  // </React.StrictMode>
  <BrowserRouter>
  <Navbar />
    <Routes>
      <Route path='/' element={<HomePage />}></Route>
      <Route path='/signup' element={<Signup />} />
      <Route path='/about' element={<About />} />
      <Route path='/product' element={<Product />} />
      <Route path='/pricing' element={<PricingPage />} />
      <Route path='/support' element={<Support />} />
      <Route path='/*' element={<NotFoundPage />} />
    </Routes>
    <Footer />
  </BrowserRouter>
);

