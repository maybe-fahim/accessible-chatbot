import React from "react";

const BurgerMenu = ({ onClick }) => {
  return (
    <button
      onClick={onClick}
      className="p-2 bg-gray-700 hover:bg-gray-800 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
      aria-label="Toggle control centre (A)"
    >
      <span className="text-xl">☰</span>
    </button>
  );
};

export default BurgerMenu;
