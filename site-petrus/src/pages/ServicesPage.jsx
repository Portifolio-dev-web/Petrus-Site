// src/pages/ServicesPage.jsx
import React from 'react';
import ServiceCard from '../components/ServiceCard'; // Importe seu componente ServiceCard
import '../styles/ServicesPage.css';

// Importar ícones de uma biblioteca como React Icons (exemplo, se você instalar)
// import { FaPlus, FaPersonHiking, FaFireAlt, FaHardHat } from 'react-icons/fa';

const ServicesPage = () => {
  // Por enquanto, usando placeholders para os ícones.
  // Se instalar react-icons, pode substituir por <FaPlus />, etc.
  const PlusIcon = () => <span style={{ fontFamily: 'Arial, sans-serif' }}>+</span>;
  const PersonIcon = () => <span style={{ fontFamily: 'Arial, sans-serif' }}>🚶‍♂️</span>; // Unicode emoji
  const FireIcon = () => <span style={{ fontFamily: 'Arial, sans-serif' }}>🔥</span>;   // Unicode emoji
  const HardHatIcon = () => <span style={{ fontFamily: 'Arial, sans-serif' }}>👷</span>; // Unicode emoji


  const services = [
    {
      icon: <PlusIcon />, // Ou <FaPlus /> se usando React Icons
      title: 'CIPA',
      description: 'Consultoria para a formação e treinamento da CIPA'
    },
    {
      icon: <PersonIcon />, // Ou <FaPersonHiking />
      title: 'TRABALHO EM ALTURA',
      description: 'Assessoria em segurança para trabalhos em altura'
    },
    {
      icon: <FireIcon />, // Ou <FaFireAlt />
      title: 'BRIGADA DE INCÊNDIO',
      description: 'Treinamento e capacitação de brigadistas de incêndio'
    },
    {
      icon: <HardHatIcon />, // Ou <FaHardHat />
      title: 'ESPAÇO CONFINADO',
      description: 'Orientação sobre segurança em espaços confinados'
    },
    // Adicione mais serviços aqui se tiver
  ];

  return (
    <div className="services-page">
      <section className="hero-services">
        <h1>Nossos Serviços</h1>
        <p>Oferecemos uma gama completa de serviços para garantir a segurança e conformidade de sua empresa.</p>
      </section>

      <section className="services-grid">
        {services.map((service, index) => (
          <ServiceCard
            key={index}
            icon={service.icon}
            title={service.title}
            description={service.description}
          />
        ))}
      </section>

      {/* Adicione outras seções se houver mais informações sobre os serviços */}
    </div>
  );
};

export default ServicesPage;