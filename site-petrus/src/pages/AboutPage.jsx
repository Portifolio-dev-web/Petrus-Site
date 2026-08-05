// src/pages/AboutPage.jsx
import React from 'react';
//import '../styles/AboutPage.css'; 

const AboutPage = () => {
  return (
    <div className="about-page">
      <section className="hero-about">
        <h1>Sobre a Petrus Consultoria</h1>
        <p>
          Desde [Ano de Fundação], a Petrus Consultoria tem sido um pilar em segurança do trabalho e engenharia,
          oferecendo soluções inovadoras e personalizadas para empresas de todos os portes.
        </p>
      </section>

      <section className="mission-vision">
        <h2>Nossa Missão</h2>
        <p>
          Promover ambientes de trabalho seguros e saudáveis, garantindo a conformidade com as normas regulamentadoras
          e contribuindo para o bem-estar e a produtividade de nossos clientes.
        </p>
        <h2>Nossa Visão</h2>
        <p>
          Ser referência nacional em consultoria de segurança do trabalho e engenharia, reconhecida pela excelência,
          inovação e compromisso com a vida.
        </p>
        <h2>Nossos Valores</h2>
        <ul>
          <li>Integridade e Ética</li>
          <li>Excelência e Qualidade</li>
          <li>Comprometimento com o Cliente</li>
          <li>Inovação e Melhoria Contínua</li>
          <li>Respeito à Vida e ao Meio Ambiente</li>
        </ul>
      </section>

      <section className="team-section">
        <h2>Nossa Equipe</h2>
        <p>
          Contamos com uma equipe multidisciplinar de engenheiros, técnicos de segurança e especialistas,
          altamente qualificados e experientes, prontos para atender às suas necessidades.
        </p>
        {/* Você pode adicionar cards de membros da equipe aqui */}
      </section>

      {/* Adicione mais seções conforme necessário */}
    </div>
  );
};

export default AboutPage;