import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { Menu, X, Sun, Moon, Zap } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = ({ theme, toggleTheme }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', to: 'home' },
    { name: 'Problem', to: 'problem' },
    { name: 'Solutions', to: 'solutions' },
    { name: 'Products', to: 'products' },
    { name: 'Contact', to: 'contact' },
  ];

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300`}
      style={{
        backgroundColor: scrolled ? 'var(--nav-bg)' : 'transparent',
        padding: scrolled ? '1rem 0' : '1.5rem 0',
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        transition: 'all 0.3s ease',
        backdropFilter: scrolled ? 'blur(10px)' : 'none',
        borderBottom: scrolled ? '1px solid var(--card-border)' : 'none',
        boxShadow: scrolled ? '0 4px 20px rgba(0,0,0,0.1)' : 'none'
      }}
    >
      <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div className="logo cursor-pointer">
          <Link to="home" smooth={true} duration={500} style={{ display: 'flex', alignItems: 'center', gap: '15px', cursor: 'pointer' }}>
            <img src="/AMvertix.png" alt="AMvertix" style={{ height: '80px', filter: 'drop-shadow(0 0 10px rgba(14, 165, 233, 0.5))' }} />
            <span style={{ fontSize: '2rem', fontWeight: '800', color: 'var(--text-color)', letterSpacing: '-0.5px' }}>AMvertix</span>
          </Link>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex" style={{ display: 'flex', gap: '2rem', alignItems: 'center' }}>
          <ul style={{ display: 'flex', gap: '2rem', alignItems: 'center', margin: 0 }}>
            {navLinks.map((link) => (
              <li key={link.name}>
                <Link
                  to={link.to}
                  smooth={true}
                  duration={500}
                  style={{ cursor: 'pointer', fontSize: '1rem', fontWeight: '500', color: 'var(--text-color)' }}
                  activeClass="text-primary"
                  spy={true}
                  offset={-80}
                  onMouseEnter={(e) => e.target.style.color = 'var(--primary-color)'}
                  onMouseLeave={(e) => e.target.style.color = 'var(--text-color)'}
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>

          {/* Theme Toggle Button */}
          <button
            onClick={toggleTheme}
            style={{
              background: 'rgba(255,255,255,0.1)',
              border: '1px solid var(--card-border)',
              borderRadius: '50%',
              width: '40px',
              height: '40px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: theme === 'dark' ? '#fbbf24' : '#0ea5e9', // Yellow for sun, Blue for moon/inverter
              transition: 'all 0.3s ease'
            }}
            title="Toggle Theme"
          >
            {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden" style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
          {/* Mobile Theme Toggle */}
          <button
            onClick={toggleTheme}
            style={{
              background: 'transparent',
              border: 'none',
              color: theme === 'dark' ? '#fbbf24' : '#0ea5e9',
              display: 'flex',
              alignItems: 'center'
            }}
          >
            {theme === 'dark' ? <Sun size={24} /> : <Moon size={24} />}
          </button>

          <button
            className="mobile-toggle"
            onClick={() => setIsOpen(!isOpen)}
            style={{ background: 'none', border: 'none', color: 'var(--text-color)' }}
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="mobile-menu"
            style={{
              background: 'var(--nav-bg)',
              backdropFilter: 'blur(10px)',
              overflow: 'hidden',
              position: 'absolute',
              top: '100%',
              left: 0,
              right: 0,
              borderBottom: '1px solid var(--card-border)',
              boxShadow: '0 4px 20px rgba(0,0,0,0.1)'
            }}
          >
            <ul style={{ display: 'flex', flexDirection: 'column', padding: '2rem', gap: '1.5rem', alignItems: 'center' }}>
              {navLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.to}
                    smooth={true}
                    duration={500}
                    onClick={() => setIsOpen(false)}
                    style={{ fontSize: '1.2rem', color: 'var(--text-color)', cursor: 'pointer', fontWeight: '500' }}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
