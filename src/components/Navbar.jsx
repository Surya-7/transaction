import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-gray-600 p-3 flex  items-center shadow-lg"> 
      
      <div className="text-white text-lg font-bold font-sans ml-20 cursor-pointer">
         {/* Wrap the text with Link */}
         <Link to="/">Payment Application</Link>
      </div>
      <div className="text-white text-lg font-bold font-sans ml-20 cursor-pointer">
        <Link to="/findtransaction" >Find Transaction</Link>
      </div>
      <div className="text-white text-lg font-bold font-sans ml-20 cursor-pointer">
        New Transaction
      </div>
    </nav>
  );
};

export default Navbar;
