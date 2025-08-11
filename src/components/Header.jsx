import React from 'react';

const Header = () => {
  return (
    <header className="border-b">
      {/* Upper part with back icon, brand and icons */}
      <div className="flex items-center justify-between px-6 py-3">
        <button className="text-lg">←</button>
        <h1 className="text-xl font-medium">Axion</h1>
        <div className="flex gap-4 text-lg">
          <span role="img" aria-label="cart">🛒</span>
          <span role="img" aria-label="user">👤</span>
        </div>
      </div>

      {/* Navigation Menu */}
      <nav className="flex justify-center gap-6 text-sm text-gray-600 py-2">
        <a href="#">Pots/pans</a>
        <a href="#">Dinnerware</a>
        <a href="#">Tables</a>
        <a href="#">Chairs</a>
        <a href="#">Cookers</a>
        <a href="#">Tableware</a>
        <a href="#">Cutlery</a>
      </nav>
    </header>
  );
};

export default Header;
