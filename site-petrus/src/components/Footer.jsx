// src/components/Footer.jsx
import React from 'react';
import '../styles/Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section about">
          <h3>Petrus Consultoria</h3>
          <p>
            Consultoria especializada em segurança do trabalho e engenharia,
            comprometida com a excelência e a proteção da vida.
          </p>
          {/* Você pode adicionar ícones de redes sociais aqui */}
          <div className="social-links">
            {/* Exemplo: <a href="#"><i className="fab fa-facebook"></i></a> */}
            {/* Exemplo: <a href="#"><i className="fab fa-linkedin"></i></a> */}
          </div>
        </div>

        <div className="footer-section links">
          <h3>Links Rápidos</h3>
          <ul>
            <li><a href="/">Início</a></li>
            <li><a href="/sobre">Sobre Nós</a></li>
            <li><a href="/servicos">Serviços</a></li>
            <li><a href="/contato">Contato</a></li>
            {/* <li><a href="/cliente">Área do Cliente</a></li> */}
          </ul>
        </div>

        <div className="footer-section contact-info">
          <h3>Contato</h3>
          <p><i className="fas fa-phone"></i> Telefone: (XX) XXXX-XXXX</p>
          <p><i className="fas fa-envelope"></i> Email: contato@petrusconsultoria.com.br</p>
          <p><i className="fas fa-map-marker-alt"></i> Endereço: Rua Exemplo, 123 - Cidade, Estado</p>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Petrus Consultoria. Todos os direitos reservados.</p>
      </div>
    </footer>
  );
};

export default Footer;