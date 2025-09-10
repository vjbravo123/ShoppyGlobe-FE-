import { Link } from "react-router-dom";

const Header = () => {
 

  return (
    <header className="bg-blue-600 text-white shadow-md sticky top-0 z-50">
      <div className="max-w-6xl mx-auto flex justify-between items-center p-4">
        {/* Logo  with emoji*/}
        <div className="text-2xl font-bold">
          <Link to="/" className="hover:text-gray-200 transition">
            🛍️ ShoppyGlobe
          </Link>
        </div>

      
        <nav className="flex gap-6 text-lg font-medium">
          <Link to="/" className="hover:text-gray-200 transition">
            Home
          </Link>
          <Link to="/cart" className="hover:text-gray-200 transition">
            Cart <span className="bg-white text-blue-600 px-2 py-0.5 rounded-full text-sm font-bold">0</span>
          </Link>
          <Link to="/checkout" className="hover:text-gray-200 transition">
            Checkout
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
