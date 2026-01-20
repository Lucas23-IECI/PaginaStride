import React, { useEffect } from 'react';
import { HashRouter, Routes, Route, useLocation } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Profile from './pages/Profile';
import Alliances from './pages/Alliances';
import FAQ from './pages/FAQ';
import Contact from './pages/Contact';
import Trips from './pages/Trips';
import Training from './pages/Training';

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const App: React.FC = () => {
  return (
    <HashRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/nosotros" element={<About />} />
        <Route path="/perfil" element={<Profile />} />
        <Route path="/aliados" element={<Alliances />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/contacto" element={<Contact />} />
        <Route path="/viajes" element={<Trips />} />
        <Route path="/entrenamiento" element={<Training />} />
      </Routes>
    </HashRouter>
  );
};

export default App;