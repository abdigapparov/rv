import React from 'react';
import { Minus, Plus, X } from 'lucide-react';

const ShoppingCartPage = ({ cartItems, onRemoveItem, onUpdateQuantity }) => {
  const subtotal = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  const taxRate = 0.1; // 10% tax
  const tax = subtotal * taxRate;
  const total = subtotal + tax;

  if (cartItems.length === 0) {
    return (
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
        <div className="bg-white rounded-lg shadow-sm p-12">
          <h1 className="text-2xl font-light text-gray-900 mb-4">Your shopping cart is empty</h1>
          <p className="text-gray-600 mb-8">Add some products from our catalog to get started!</p>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="bg-white rounded-lg shadow-sm overflow-hidden">
        <div className="px-6 py-8">
          <h1 className="text-3xl font-light text-gray-900 mb-8">Your shopping cart</h1>

          {/* Header */}
          <div className="hidden md:grid grid-cols-12 gap-4 pb-4 border-b border-gray-200 text-sm font-medium text-gray-500">
            <div className="col-span-6">Product</div>
            <div className="col-span-2 text-center">Quantity</div>
            <div className="col-span-2 text-center">Price</div>
            <div className="col-span-2 text-right">Total</div>
          </div>

          {/* Cart Items */}
          <div className="divide-y divide-gray-200">
            {cartItems.map((item) => (
              <div key={item.id} className="py-6">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-center">
                  {/* Product Info */}
                  <div className="md:col-span-6 flex items-center space-x-4">
                    <div className="w-20 h-20 bg-gray-100 rounded-lg overflow-hidden flex-shrink-0">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-medium text-gray-900">{item.name}</h3>
                      <p className="text-sm text-gray-600 mt-1">{item.description}</p>
                      <p className="text-sm font-medium text-gray-900 mt-2 md:hidden">
                        £{item.price}
                      </p>
                    </div>
                    <button
                      onClick={() => onRemoveItem(item.id)}
                      className="md:hidden p-2 text-gray-400 hover:text-gray-600 transition-colors"
                    >
                      <X className="w-5 h-5" />
                    </button>
                  </div>

                  {/* Quantity */}
                  <div className="md:col-span-2 flex justify-center">
                    <div className="flex items-center border border-gray-300 rounded-lg">
                      <button
                        onClick={() => onUpdateQuantity(item.id, item.quantity - 1)}
                        className="p-2 text-gray-400 hover:text-gray-600 transition-colors"
                      >
                        <Minus className="w-4 h-4" />
                      </button>
                      <span className="px-4 py-2 text-center min-w-[3rem]">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
                        className="p-2 text-gray-400 hover:text-gray-600 transition-colors"
                      >
                        <Plus className="w-4 h-4" />
                      </button>
                    </div>
                  </div>

                  {/* Price */}
                  <div className="md:col-span-2 text-center">
                    <span className="hidden md:inline text-gray-900">£{item.price}</span>
                  </div>

                  {/* Total */}
                  <div className="md:col-span-2 flex justify-between md:justify-end items-center">
                    <span className="font-medium text-gray-900">
                      £{(item.price * item.quantity).toFixed(0)}
                    </span>
                    <button
                      onClick={() => onRemoveItem(item.id)}
                      className="hidden md:block ml-4 p-1 text-gray-400 hover:text-gray-600 transition-colors"
                    >
                      <X className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Totals */}
          <div className="border-t border-gray-200 pt-6 mt-6">
            <div className="flex flex-col items-end space-y-2">
              <div className="flex justify-between w-full max-w-xs">
                <span className="text-gray-600">Subtotal</span>
                <span className="font-medium">£{subtotal.toFixed(0)}</span>
              </div>
              <div className="flex justify-between w-full max-w-xs text-sm text-gray-600">
                <span>Taxes and shipping are calculated at checkout</span>
              </div>
            </div>

            <div className="flex justify-end mt-6">
              <button className="bg-gray-900 text-white px-8 py-3 rounded-lg font-medium hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 transition-all duration-200">
                Go to checkout
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShoppingCartPage;