import React, { useState } from 'react';
import { ShoppingCart, User, Package } from 'lucide-react';

// Компоненты из первого App
import SignupPage from './components/SignupPage';
import ProductCatalog from './components/ProductCatalog';
import ShoppingCartPage from './components/ShoppingCartPage';

// Компоненты из второго App
import Header from './components/Header';
import HomePage from './components/HomePage';
import HomePag from './components/HomePag';
import Footer from './components/Footer';

function App() {
  const [currentPage, setCurrentPage] = useState('signup');
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product) => {
    setCartItems(prev => {
      const existingItem = prev.find(item => item.id === product.id);
      if (existingItem) {
        return prev.map(item =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prev, { ...product, quantity: 1 }];
    });
  };

  const removeFromCart = (id) => {
    setCartItems(prev => prev.filter(item => item.id !== id));
  };

  const updateQuantity = (id, quantity) => {
    if (quantity === 0) {
      removeFromCart(id);
      return;
    }
    setCartItems(prev =>
      prev.map(item =>
        item.id === id ? { ...item, quantity } : item
      )
    );
  };

  const getTotalItems = () => {
    return cartItems.reduce((total, item) => total + item.quantity, 0);
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {/* Header из второго App */}
      <Header />

      {/* Навигация из первого App */}
      <nav className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center space-x-8">
              <div className="flex-shrink-0">
                <h1 className="text-xl font-semibold text-gray-900">FurnitureShop</h1>
              </div>
              <div className="flex space-x-4">
                <button
                  onClick={() => setCurrentPage('signup')}
                  className={`inline-flex items-center px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                    currentPage === 'signup'
                      ? 'text-blue-600 bg-blue-50'
                      : 'text-gray-500 hover:text-gray-700'
                  }`}
                >
                  <User className="w-4 h-4 mr-2" />
                  Sign Up
                </button>
                <button
                  onClick={() => setCurrentPage('catalog')}
                  className={`inline-flex items-center px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                    currentPage === 'catalog'
                      ? 'text-blue-600 bg-blue-50'
                      : 'text-gray-500 hover:text-gray-700'
                  }`}
                >
                  <Package className="w-4 h-4 mr-2" />
                  Catalog
                </button>
                <button
                  onClick={() => setCurrentPage('home')}
                  className={`inline-flex items-center px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                    currentPage === 'home'
                      ? 'text-blue-600 bg-blue-50'
                      : 'text-gray-500 hover:text-gray-700'
                  }`}
                >
                  Home
                </button>
              </div>
            </div>
            <div className="flex items-center">
              <button
                onClick={() => setCurrentPage('cart')}
                className={`inline-flex items-center px-3 py-2 rounded-md text-sm font-medium transition-colors relative ${
                  currentPage === 'cart'
                    ? 'text-blue-600 bg-blue-50'
                    : 'text-gray-500 hover:text-gray-700'
                }`}
              >
                <ShoppingCart className="w-4 h-4 mr-2" />
                Cart
                {getTotalItems() > 0 && (
                  <span className="absolute -top-1 -right-1 bg-blue-600 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                    {getTotalItems()}
                  </span>
                )}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Основное содержимое */}
      <main className="flex-1">
        {currentPage === 'signup' && <SignupPage />}
        {currentPage === 'catalog' && (
          <ProductCatalog 
            onAddToCart={addToCart}
            onGoToCart={() => setCurrentPage('cart')}
          />
        )}
        {currentPage === 'cart' && (
          <ShoppingCartPage
            cartItems={cartItems}
            onRemoveItem={removeFromCart}
            onUpdateQuantity={updateQuantity}
          />
        )}
        {currentPage === 'home' && (
          <>
            <HomePage />
            <HomePag />
          </>
        )}
      </main>

      {/* Footer из второго App */}
      <Footer />
    </div>
  );
}

export default App;
