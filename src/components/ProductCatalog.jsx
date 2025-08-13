import React, { useState } from 'react';
import { ChevronDown, Plus, ShoppingCart } from 'lucide-react';

const ProductCatalog = ({ onAddToCart, onGoToCart }) => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedPriceRange, setSelectedPriceRange] = useState('all');
  const [addedItems, setAddedItems] = useState(new Set());

  const products = [
    {
      id: 1,
      name: 'The Dandy chair',
      price: 250,
      image: 'https://images.pexels.com/photos/586881/pexels-photo-586881.jpeg?auto=compress&cs=tinysrgb&w=400',
      category: 'chairs',
      description: 'Modern dining chair with wooden legs'
    },
    {
      id: 2,
      name: 'Rustic Vase Set',
      price: 155,
      image: 'https://images.pexels.com/photos/1030945/pexels-photo-1030945.jpeg?auto=compress&cs=tinysrgb&w=400',
      category: 'decorative',
      description: 'Handcrafted ceramic vases'
    },
    {
      id: 3,
      name: 'The Silky Vase',
      price: 125,
      image: 'https://images.pexels.com/photos/1166643/pexels-photo-1166643.jpeg?auto=compress&cs=tinysrgb&w=400',
      category: 'decorative',
      description: 'Elegant ceramic vase in grey'
    },
    {
      id: 4,
      name: 'The Lucy Lamp',
      price: 399,
      image: 'https://images.pexels.com/photos/943150/pexels-photo-943150.jpeg?auto=compress&cs=tinysrgb&w=400',
      category: 'lighting',
      description: 'Modern pendant lighting fixture'
    },
    {
      id: 5,
      name: 'The Dandy chair',
      price: 250,
      image: 'https://images.pexels.com/photos/586881/pexels-photo-586881.jpeg?auto=compress&cs=tinysrgb&w=400',
      category: 'chairs',
      description: 'Modern dining chair with wooden legs'
    },
    {
      id: 6,
      name: 'Rustic Vase Set',
      price: 155,
      image: 'https://images.pexels.com/photos/1030945/pexels-photo-1030945.jpeg?auto=compress&cs=tinysrgb&w=400',
      category: 'decorative',
      description: 'Handcrafted ceramic vases'
    },
    {
      id: 7,
      name: 'The Silky Vase',
      price: 125,
      image: 'https://images.pexels.com/photos/1166643/pexels-photo-1166643.jpeg?auto=compress&cs=tinysrgb&w=400',
      category: 'decorative',
      description: 'Elegant ceramic vase in grey'
    },
    {
      id: 8,
      name: 'The Lucy Lamp',
      price: 399,
      image: 'https://images.pexels.com/photos/943150/pexels-photo-943150.jpeg?auto=compress&cs=tinysrgb&w=400',
      category: 'lighting',
      description: 'Modern pendant lighting fixture'
    },
    {
      id: 9,
      name: 'The Dandy chair',
      price: 250,
      image: 'https://images.pexels.com/photos/586881/pexels-photo-586881.jpeg?auto=compress&cs=tinysrgb&w=400',
      category: 'chairs',
      description: 'Modern dining chair with wooden legs'
    },
    {
      id: 10,
      name: 'Rustic Vase Set',
      price: 155,
      image: 'https://images.pexels.com/photos/1030945/pexels-photo-1030945.jpeg?auto=compress&cs=tinysrgb&w=400',
      category: 'decorative',
      description: 'Handcrafted ceramic vases'
    },
    {
      id: 11,
      name: 'The Silky Vase',
      price: 125,
      image: 'https://images.pexels.com/photos/1166643/pexels-photo-1166643.jpeg?auto=compress&cs=tinysrgb&w=400',
      category: 'decorative',
      description: 'Elegant ceramic vase in grey'
    },
    {
      id: 12,
      name: 'The Lucy Lamp',
      price: 399,
      image: 'https://images.pexels.com/photos/943150/pexels-photo-943150.jpeg?auto=compress&cs=tinysrgb&w=400',
      category: 'lighting',
      description: 'Modern pendant lighting fixture'
    }
  ];

  const filteredProducts = products.filter(product => {
    const categoryMatch = selectedCategory === 'all' || product.category === selectedCategory;
    const priceMatch = selectedPriceRange === 'all' || 
      (selectedPriceRange === 'low' && product.price < 200) ||
      (selectedPriceRange === 'medium' && product.price >= 200 && product.price < 300) ||
      (selectedPriceRange === 'high' && product.price >= 300);
    
    return categoryMatch && priceMatch;
  });

  const handleAddToCart = (product) => {
    onAddToCart(product);
    setAddedItems(prev => new Set([...prev, product.id]));
    setTimeout(() => {
      setAddedItems(prev => {
        const newSet = new Set(prev);
        newSet.delete(product.id);
        return newSet;
      });
    }, 1000);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Header */}
      <div className="text-center mb-8">
        <h1 className="text-4xl font-light text-gray-900 mb-2">View all products</h1>
      </div>

      {/* Filters */}
      <div className="flex flex-wrap items-center justify-between mb-8 gap-4">
        <div className="flex flex-wrap items-center gap-4">
          <div className="relative">
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="appearance-none bg-white border border-gray-300 rounded-md py-2 pl-3 pr-10 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              <option value="all">Category</option>
              <option value="chairs">Chairs</option>
              <option value="decorative">Decorative</option>
              <option value="lighting">Lighting</option>
            </select>
            <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
          </div>

          <div className="relative">
            <select
              className="appearance-none bg-white border border-gray-300 rounded-md py-2 pl-3 pr-10 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              <option>Product type</option>
            </select>
            <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
          </div>

          <div className="relative">
            <select
              value={selectedPriceRange}
              onChange={(e) => setSelectedPriceRange(e.target.value)}
              className="appearance-none bg-white border border-gray-300 rounded-md py-2 pl-3 pr-10 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              <option value="all">Price</option>
              <option value="low">Under £200</option>
              <option value="medium">£200 - £300</option>
              <option value="high">Over £300</option>
            </select>
            <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
          </div>

          <div className="relative">
            <select
              className="appearance-none bg-white border border-gray-300 rounded-md py-2 pl-3 pr-10 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              <option>Brand</option>
            </select>
            <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
          </div>
        </div>

        <div className="flex items-center gap-4">
          <span className="text-sm text-gray-600">Sorting by</span>
          <div className="relative">
            <select
              className="appearance-none bg-white border border-gray-300 rounded-md py-2 pl-3 pr-10 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              <option>Date added</option>
              <option>Price: Low to High</option>
              <option>Price: High to Low</option>
              <option>Name</option>
            </select>
            <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
          </div>
        </div>
      </div>

      {/* Products Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {filteredProducts.map((product) => (
          <div
            key={product.id}
            className="group bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300"
          >
            <div className="aspect-square relative overflow-hidden bg-gray-50">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <button
                onClick={() => handleAddToCart(product)}
                className={`absolute top-3 right-3 w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 ${
                  addedItems.has(product.id)
                    ? 'bg-green-500 text-white'
                    : 'bg-white/90 text-gray-700 hover:bg-white hover:shadow-md'
                }`}
              >
                {addedItems.has(product.id) ? (
                  <ShoppingCart className="w-4 h-4" />
                ) : (
                  <Plus className="w-4 h-4" />
                )}
              </button>
            </div>
            <div className="p-4">
              <h3 className="font-medium text-gray-900 mb-1">{product.name}</h3>
              <p className="text-lg font-semibold text-gray-900">£{product.price}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Fixed Cart Button */}
      <button
        onClick={onGoToCart}
        className="fixed bottom-6 right-6 bg-blue-600 text-white px-6 py-3 rounded-full shadow-lg hover:bg-blue-700 transition-all duration-200 flex items-center gap-2"
      >
        <ShoppingCart className="w-5 h-5" />
        View Cart
      </button>
    </div>
  );
};

export default ProductCatalog;