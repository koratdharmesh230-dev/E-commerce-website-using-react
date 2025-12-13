import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar.jsx';

function App() {
  return (
    <Router>
      <Navbar />
      
      {/* This container will hold our pages later */}
      <div style={{ padding: '20px', maxWidth: '1200px', margin: '0 auto' }}>
        <Routes>
          <Route path="/" element={<h1>Home Page (Products go here)</h1>} />
          <Route path="/login" element={<h1>Login Page</h1>} />
          <Route path="/cart" element={<h1>Shopping Cart</h1>} />
        </Routes>
      </div>
      
    </Router>
  );
}

export default App;