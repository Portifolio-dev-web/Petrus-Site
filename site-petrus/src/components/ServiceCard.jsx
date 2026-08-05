// src/components/ServiceCard.jsx
import React from 'react';
import '../styles/ServiceCard.css'; // <--- Importe o arquivo CSS aqui

const ServiceCard = ({ icon, title, description }) => {
  return (
    <div className="service-card"> {/* Adiciona a classe 'service-card' */}
      <div className="service-card-icon"> {/* Adiciona a classe 'service-card-icon' */}
        {icon}
      </div>
      <h3 className="service-card-title">{title}</h3> {/* Opcional: Adicionar classe para o h3 */}
      <p className="service-card-description">{description}</p> {/* Opcional: Adicionar classe para o p */}
    </div>
  );
};

export default ServiceCard;