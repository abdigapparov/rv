import React, { useState } from 'react';
import { Mail } from 'lucide-react';

const SignupPage = () => {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) {
      setIsSubmitted(true);
      setTimeout(() => {
        setIsSubmitted(false);
        setEmail('');
      }, 2000);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-stone-100 to-stone-200">
      <div className="flex min-h-screen">
        {/* Left side - Image */}
        <div className="flex-1 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-stone-300 to-stone-400">
            <div className="flex items-center justify-center h-full">
              <div className="bg-white/20 backdrop-blur-sm rounded-lg p-8 mx-8">
                <div className="w-80 h-48 bg-stone-600 rounded-lg relative shadow-2xl">
                  <div className="absolute top-4 left-4 w-16 h-32 bg-stone-800 rounded"></div>
                  <div className="absolute bottom-4 left-4 right-4 h-4 bg-amber-700 rounded"></div>
                  <div className="absolute top-6 right-6 w-2 h-24 bg-stone-900 rounded-full"></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right side - Form */}
        <div className="flex-1 flex items-center justify-center p-8">
          <div className="max-w-md w-full">
            <div className="text-center mb-8">
              <h1 className="text-4xl font-light text-gray-900 mb-4">
                Join the club and get the benefits
              </h1>
              <p className="text-gray-600 leading-relaxed">
                Sign up for our newsletter and receive exclusive offers on new
                arrivals, sales, pop-up stores and more
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email address"
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 text-gray-900 placeholder-gray-500"
                  required
                />
              </div>

              <button
                type="submit"
                disabled={!email || isSubmitted}
                className="w-full bg-gray-900 text-white py-3 px-6 rounded-lg font-medium hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitted ? 'Thank you!' : 'Sign up'}
              </button>
            </form>

            {isSubmitted && (
              <div className="mt-4 p-4 bg-green-50 border border-green-200 rounded-lg">
                <p className="text-green-800 text-sm text-center">
                  Successfully subscribed! Check your email for confirmation.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignupPage;