import React from 'react';

const Navbar = () => {
  return (
    <nav className="flex justify-between px-8 py-6 items-center">
      <div className="h-10  overflow-hidden flex items-center">
        <img
          src="/llogo.jpeg"
          alt="Logo"
          className="h-26 w-auto object-contain"
        />
      </div>
    </nav>
  );
};

export default Navbar;
