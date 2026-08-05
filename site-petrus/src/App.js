// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ServicesPage from './pages/ServicesPage';
import ContactPage from './pages/ContactPage';
import ClientAreaPage from './pages/ClientAreaPage';
import Header from './components/Header';
import Footer from './components/Footer';
import './styles/App.css'; 

function App() {
  return (
    <Router>
      <Header /> {/* Componente de Cabeçalho */}
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/sobre" element={<AboutPage />} />
          <Route path="/servicos" element={<ServicesPage />} />
          <Route path="/contato" element={<ContactPage />} />
          <Route path="/cliente" element={<ClientAreaPage />} />
        </Routes>
      </main>
      <Footer /> {/* Componente de Rodapé */}
    </Router>
  );
}

export default App;