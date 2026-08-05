// src/components/Header.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/petrus-logo.png'; // Certifique-se de ter a imagem do logo em src/assets


const Header = () => {
  return (
    <header className="header" style={{ backgroundColor: '#FFD700', padding: '15px 0', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
      <div className="logo-container" style={{ marginLeft: '50px' }}>
        <Link to="/">
          <img src={logo} alt="Petrus Consultoria" style={{ height: '50px' }} />
        </Link>
      </div>
      <nav className="nav-menu" style={{ marginRight: '50px' }}>
        <ul style={{ listStyle: 'none', margin: 0, padding: 0, display: 'flex' }}>
          <li style={{ marginLeft: '30px' }}><Link to="/" style={{ color: '#333', textDecoration: 'none', fontWeight: 'bold' }}>Início</Link></li>
          <li style={{ marginLeft: '30px' }}><Link to="/sobre" style={{ color: '#333', textDecoration: 'none', fontWeight: 'bold' }}>Sobre</Link></li>
          <li style={{ marginLeft: '30px' }}><Link to="/servicos" style={{ color: '#333', textDecoration: 'none', fontWeight: 'bold' }}>Serviços</Link></li>
          <li style={{ marginLeft: '30px' }}><Link to="/contato" style={{ color: '#333', textDecoration: 'none', fontWeight: 'bold' }}>Contato</Link></li>
          <li style={{ marginLeft: '30px' }}><Link to="/cliente" style={{ color: '#007BFF', textDecoration: 'none', fontWeight: 'bold' }}>Área do Cliente</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;