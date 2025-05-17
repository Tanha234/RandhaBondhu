import { Link } from 'react-router-dom';
import hero from '../../images/hero.png'

const Navbar = () => {
  return (
    <nav className="bg-secondary text-primary shadow-md pt-1">
      <div className=" mx-auto py-3 flex justify-between items-center md:px-40">
        {/* Logo */}
        <Link to="/" className="flex items-center space-x-2 text-2xl font-bold">
  <img src={hero} alt="RannaBondhu Logo" className="w-16 h-16" />
  <span>RannaBondhu</span>
</Link>


        {/* Menu */}
        <div className="space-x-4 hidden md:flex">
          <Link to="/" className="hover:text-secondary">Home</Link>
          <Link to="/recipes" className="hover:text-secondary">Recipes</Link>
          <Link to="/blog" className="hover:text-secondary">Blog</Link>
          <Link to="/about" className="hover:text-secondary">About</Link>
        </div>

        {/* Mobile Menu Button (optional future feature) */}
        <div className="md:hidden">
          <button>
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
