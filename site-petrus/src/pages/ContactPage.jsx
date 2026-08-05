// src/pages/ContactPage.jsx
import React from 'react';
import '../styles/ContactPage.css'; 

const ContactPage = () => {
  return (
    <div className="contact-page">
      <section className="hero-contact">
        <h1>Entre em Contato</h1>
        <p>Estamos prontos para atender às suas necessidades em segurança do trabalho. Envie-nos uma mensagem ou utilize nossos canais de contato direto.</p>
      </section>

      <section className="contact-form-section">
        <h2>Envie-nos uma Mensagem</h2>
        <form className="contact-form">
          <div className="form-group">
            <label htmlFor="name">Nome:</label>
            <input type="text" id="name" name="name" required />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" required />
          </div>
          <div className="form-group">
            <label htmlFor="subject">Assunto:</label>
            <input type="text" id="subject" name="subject" />
          </div>
          <div className="form-group">
            <label htmlFor="message">Mensagem:</label>
            <textarea id="message" name="message" rows="5" required></textarea>
          </div>
          <button type="submit" className="submit-button">Enviar Mensagem</button>
        </form>
      </section>

      <section className="contact-info-section">
        <h2>Nossos Contatos</h2>
        <div className="contact-details">
          <p><strong>Telefone:</strong> (XX) XXXX-XXXX</p>
          <p><strong>Email:</strong> contato@petrusconsultoria.com.br</p>
          <p><strong>Endereço:</strong> Rua Exemplo, 123 - Centro, Cidade - Estado, CEP: XXXXX-XXX</p>
          <p><strong>Horário de Atendimento:</strong> Seg-Sex, 8h-18h</p>
        </div>
        {/* Você pode adicionar um mapa aqui, como um iframe do Google Maps */}
        {/* <div className="map-container">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3675.296043441991!2d-47.06013628503889!3d-22.90992038501254!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94c8c7ef3c4e0b0b%3A0x123456789abcdef!2sSeu%20Endere%C3%A7o%20Aqui!5e0!3m2!1spt-BR!2sbr!4v1678901234567!5m2!1spt-BR!2sbr"
            width="600"
            height="450"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Localização Petrus Consultoria"
          ></iframe>
        </div> */}
      </section>

    </div>
  );
};

export default ContactPage;