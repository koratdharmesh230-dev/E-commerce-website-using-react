import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar.jsx';
import Home from './pages/Home.jsx';
import ProductDetails from './pages/ProductDetails.jsx';

function App() {
  return (
    <Router>
      <Navbar />
      
      {/* This container will hold our pages later */}
      <div style={{ padding: '20px', maxWidth: '1200px', margin: '0 auto' }}>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/login" element={<h1>Login Page</h1>} />
          <Route path="/cart" element={<h1>Shopping Cart</h1>} />
          <Route path="/product/:id" element={<ProductDetails />} />
        </Routes>
      </div>
      
    </Router>
  );
}

export default App;