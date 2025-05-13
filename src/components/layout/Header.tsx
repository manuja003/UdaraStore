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
    <header className="bg-background sticky top-0 z-30 border-b shadow-sm">
      <div className="container-custom">
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <Link to="/" className="font-heading text-2xl font-bold">
            UDARA STORE
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/" className="font-medium hover:text-primary transition-colors">
              Home
            </Link>
            <Link to="/shop" className="font-medium hover:text-primary transition-colors">
              Shop
            </Link>
            <Link to="/about" className="font-medium hover:text-primary transition-colors">
              About
            </Link>
            <Link to="/contact" className="font-medium hover:text-primary transition-colors">
              Contact
            </Link>
            <Link to="/faq" className="font-medium hover:text-primary transition-colors">
              Customer Service
            </Link>
          </nav>

          {/* Icons */}
          <div className="hidden md:flex items-center space-x-4">
            <button aria-label="Search" className="hover:text-primary transition-colors">
              <Search size={20} />
            </button>
            <Link to="/cart" aria-label="Shopping Cart" className="hover:text-primary transition-colors relative">
              <ShoppingCart size={20} />
              <span className="absolute -top-2 -right-2 bg-accent text-accent-foreground text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                0
              </span>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button onClick={toggleMenu} className="md:hidden">
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-background shadow-lg animate-slide-in">
          <div className="container-custom py-4">
            <nav className="flex flex-col space-y-4">
              <Link 
                to="/" 
                className="font-medium py-2 hover:text-primary transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link 
                to="/shop" 
                className="font-medium py-2 hover:text-primary transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Shop
              </Link>
              <Link 
                to="/about" 
                className="font-medium py-2 hover:text-primary transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </Link>
              <Link 
                to="/contact" 
                className="font-medium py-2 hover:text-primary transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>
              <Link 
                to="/faq" 
                className="font-medium py-2 hover:text-primary transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Customer Service
              </Link>

              {/* Mobile Icons */}
              <div className="flex items-center space-x-4 py-2">
                <button aria-label="Search" className="hover:text-primary transition-colors">
                  <Search size={20} />
                </button>
                <Link to="/cart" aria-label="Shopping Cart" className="hover:text-primary transition-colors relative">
                  <ShoppingCart size={20} />
                  <span className="absolute -top-2 -right-2 bg-accent text-accent-foreground text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                    0
                  </span>
                </Link>
              </div>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
