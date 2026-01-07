import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Problem from './components/Problem';
import Solutions from './components/Solutions';
import WhyUs from './components/WhyUs';
import Products from './components/Products';
import Contact from './components/Contact';
import Footer from './components/Footer';
import EnergyBackground from './components/EnergyBackground';

function App() {
  const [theme, setTheme] = useState('dark');

  // Theme Toggle Logic
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));
  };

  return (
    <div className="App">
      <EnergyBackground theme={theme} />
      <Navbar theme={theme} toggleTheme={toggleTheme} />
      <Hero />
      <Problem />
      <Solutions />
      <WhyUs />
      <Products />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
