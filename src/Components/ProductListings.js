import React from 'react';

const ProductListings = ({ products, onAddToCart }) => {
  return (
    <div className="row">
      {products.map((product) => (
        <div key={product.id} className="col-md-4 mb-4">
          <div className="card">
            <img src="product_image.jpg" className="card-img-top" alt="Product Image" />
            <div className="card-body">
              <h5 className="card-title">{product.name}</h5>
              <p className="card-text">{product.description}</p>
              <p className="card-text">${product.price}</p>
              <button className="btn btn-primary" onClick={() => onAddToCart(product)}>
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductListings;
