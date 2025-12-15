import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './ProductDetails.css';

const ProductDetails = () => {
  const { id } = useParams(); // Grabs "1" from the URL "/product/1"
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProduct = async () => {
        try {
            const response = await fetch(`http://localhost:3001/products/${id}`);
            const data = await response.json();
            setProduct(data);
            setLoading(false);
        } catch (error) {
            console.error("Error fetching product:", error);
            setLoading(false);
        }
    };

    fetchProduct();
  }, [id]); // Run this whenever the ID changes

  if (loading) return <div className="loading">Loading...</div>;
  if (!product) return <div className="loading">Product not found</div>;

  return (
    <div className="details-container">
      {/* Left Column: Image */}
      <div className="details-image">
        <img src={product.imageUrl || product.image_url} alt={product.name} />
      </div>

      {/* Right Column: Info */}
      <div className="details-info">
        <h1 className="details-title">{product.name}</h1>
        <p className="details-price">${product.price}</p>
        <p className="details-desc">{product.description}</p>
        
        <p className="details-stock">
            Status: {product.stock > 0 ? "In Stock" : "Out of Stock"}
        </p>

        <button className="add-cart-btn">
            Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductDetails;