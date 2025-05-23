import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, ShoppingCart, Search } from 'lucide-react';
import { Button } from "@/components/ui/button";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-black bg-gradient-to-t from-black via-neutral-900 to-black sticky top-0 z-30 border-b border-secondary-foreground/10">
      <div className="container-custom">
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <Link to="/" className="font-heading text-2xl font-bold text-white">
            UDARA STORE
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/" className="font-medium text-white/80 hover:text-primary transition-colors">
              Home
            </Link>
            <Link to="/shop" className="font-medium text-white/80 hover:text-primary transition-colors">
              Shop
            </Link>
            <Link to="/about" className="font-medium text-white/80 hover:text-primary transition-colors">
              About
            </Link>
            <Link to="/contact" className="font-medium text-white/80 hover:text-primary transition-colors">
              Contact
            </Link>
            <Link to="/faq" className="font-medium text-white/80 hover:text-primary transition-colors">
              Customer Service
            </Link>
          </nav>

          {/* Icons */}
          <div className="hidden md:flex items-center space-x-4">
            {/* Removed search and cart icons */}
          </div>

          {/* Mobile Menu Button */}
          <button onClick={toggleMenu} className="md:hidden text-white">
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-black bg-gradient-to-t from-black via-neutral-900 to-black shadow-lg animate-slide-in">
          <div className="container-custom py-4">
            <nav className="flex flex-col space-y-4">
              <Link 
                to="/" 
                className="font-medium py-2 text-white/80 hover:text-primary transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link 
                to="/shop" 
                className="font-medium py-2 text-white/80 hover:text-primary transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Shop
              </Link>
              <Link 
                to="/about" 
                className="font-medium py-2 text-white/80 hover:text-primary transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </Link>
              <Link 
                to="/contact" 
                className="font-medium py-2 text-white/80 hover:text-primary transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>
              <Link 
                to="/faq" 
                className="font-medium py-2 text-white/80 hover:text-primary transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Customer Service
              </Link>

              {/* Mobile Icons */}
              <div className="flex items-center space-x-4 py-2">
                {/* Removed search and cart icons */}
              </div>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
