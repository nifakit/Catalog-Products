import React, { Suspense, lazy } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar.jsx'
import Product from './Product.jsx'
import Footer from './components/Footer.jsx'

const Products = lazy(() => import('./Products.jsx'));
const About = lazy(() => import('./About.jsx'));

const Spinner = () => (
  <div className="flex justify-center items-center h-[600px]">
    <div className="w-20 h-20 border-4 border-gray-300 border-t-blue-500 rounded-full animate-spin"></div>
  </div>
);

function App() {
  return (
    <BrowserRouter>
    
      <div className="flex flex-col min-h-screen bg-[#121212] text-white">
        <Navbar />
        <main className="flex-grow">
          <Suspense fallback={<Spinner />}>
          <Routes>
            <Route path="/" element={<About />} />
            <Route path="/products" element={<Products />} />
            <Route path="/about" element={<About />} />
            <Route path="/products/:id" element={<Product />} />
          </Routes>
          </Suspense>
        </main>

        <Footer />
      </div>
    
    </BrowserRouter>
  );
}


export default App
