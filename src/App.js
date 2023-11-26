// src/App.js
import React, { useState, useEffect } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import ProductSearch from './components/ProductSearch';
import CategoryFilter from './components/CategoryFilter';
import ProductListings from './components/ProductListings';
import ShoppingCart from './components/ShoppingCart';
import OrderProcessing from './components/OrderProcessing';

function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [cartItems, setCartItems] = useState([]);
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    // Fetch products from the backend when the component mounts
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const response = await fetch('http://localhost:5000/api/products');
      const data = await response.json();
      setProducts(data);
      setFilteredProducts(data);
    } catch (error) {
      console.error('Error fetching products:', error);
    }
  };

  const handleSearch = (term) => {
    setSearchTerm(term);
    // Filter products based on the search term
    const filteredProducts = products.filter((product) =>
      product.name.toLowerCase().includes(term.toLowerCase())
    );
    setFilteredProducts(filteredProducts);
  };

  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
    // Filter products based on the selected category
    const filteredProducts = products.filter((product) =>
      category ? product.category === category : true
    );
    setFilteredProducts(filteredProducts);
  };

  const handleAddToCart = (product) => {
    setCartItems([...cartItems, product]);
  };

  const handleSubmitOrder = () => {
    // Add logic to submit the order (e.g., send a request to the backend)
    console.log('Order submitted:', cartItems);
    setCartItems([]);
  };

  return (
    <Router>
      <div className="container">
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <Link className="navbar-brand" to="/">
            Fashion Recommender
          </Link>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link className="nav-link" to="/login">
                  Login
                </Link>
              </li>
            </ul>
          </div>
        </nav>

        <Switch>
          <Route path="/login">
            {/* Add login route component if needed */}
          </Route>
          <Route path="/">
            <ProductSearch onSearch={handleSearch} />
            <CategoryFilter
              categories={['Category 1', 'Category 2']}
              onSelectCategory={handleCategorySelect}
            />
            <ProductListings products={filteredProducts} onAddToCart={handleAddToCart} />
            <ShoppingCart cartItems={cartItems} />
            <OrderProcessing cartItems={cartItems} onSubmitOrder={handleSubmitOrder} />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
