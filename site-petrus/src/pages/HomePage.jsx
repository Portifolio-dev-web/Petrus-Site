// src/pages/HomePage.jsx
import React from 'react';
import ServiceCard from '../components/ServiceCard';
import '../styles/HomePage.css'; // Importe o novo arquivo CSS

const HomePage = () => {
  const services = [
    { icon: '+', title: 'CIPA', description: 'Consultoria para a formação e treinamento da CIPA' },
    { icon: '🚶‍♂️', title: 'TRABALHO EM ALTURA', description: 'Assessoria em segurança para trabalhos em altura' },
    { icon: '🔥', title: 'BRIGADA DE INCÊNDIO', description: 'Treinamento e capacitação de brigadistas de incêndio' },
    { icon: '👷‍♂️', title: 'ESPAÇO CONFINADO', description: 'Orientação sobre segurança em espaços confinados' },
  ];

  return (
    <div>
      {/* Seção Principal Amarela */}
      <section className="hero-section"> {/* Remove estilos inline */}
        <h1>CONSULTORIA EM SEGURANÇA DO TRABALHO</h1>
        <p>Consultoria especializada na implementação das normas de segurança do trabalho</p>
        <button>Saiba mais</button>
      </section>

      {/* Seção Nossos Serviços */}
      <section className="services-section"> {/* Remove estilos inline */}
        <h2>Nossos Serviços</h2>
        <div className="services-grid-home"> {/* Adiciona classe para grid da home */}
          {services.map((service, index) => (
            <ServiceCard key={index} icon={service.icon} title={service.title} description={service.description} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default HomePage;