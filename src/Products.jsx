import React, { useState, useEffect } from "react";

function Products() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(res => res.json())
      .then(data => {
        console.log("Fetched products:", data);
        setProducts(data);
        setLoading(false);
      })
      .catch(err => {
        console.error('Error fetching products:', err);
        setLoading(false);
      });
  }, []);

  if (loading) return <div>Loading products...</div>;
  if (!products.length) return <div>No products found</div>;

  return (
    <>
    <h1 className="text-3xl font-bold text-center">Product Catalog</h1>
    <div className="p-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map(product => (
          <div key={product.id} className="bg-[#1d1d1d] p-4 rounded-lg text-center shadow-md hover:shadow-xl  transition">
            <img src={product.image} alt={product.title} className="h-48 w-full object-contain mb-4" />
            <h2 className="text-lg font-semibold mb-2 line-clamp-1">{product.title}</h2>
            <p className="text-sm mb-4 line-clamp-1">{product.description}</p>
            <p className="text-xl font-bold">${product.price}</p>
            <button className="border-2 border-blue-500 text-blue-500 mt-2 px-4 py-2 rounded hover:bg-blue-500 hover:text-white transition">Details</button>
          </div>
        ))}
      </div>
    </div>
  </>
  )
}

export default Products;
