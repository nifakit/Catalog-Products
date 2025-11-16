import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar.jsx'
import Products from './Products.jsx'
import About from './About.jsx'
import Product from './Product.jsx'
import Footer from './components/Footer.jsx'


function App() {
  return (
    <BrowserRouter>
      <div className="flex flex-col min-h-screen bg-[#121212] text-white">
        <Navbar />
        
        <main className="flex-grow">
          <Routes>
            <Route path="/products" element={<Products />} />
            <Route path="/about" element={<About />} />
            <Route path="/products/:id" element={<Product />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </BrowserRouter>
  );
}


export default App
