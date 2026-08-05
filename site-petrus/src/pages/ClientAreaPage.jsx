// src/pages/ClientAreaPage.jsx
import React, { useState, useEffect } from 'react';

const ClientAreaPage = () => {
  const [budgetData, setBudgetData] = useState({ client: '', service: '', details: '' });
  const [reports, setReports] = useState([]);
  const [loadingReports, setLoadingReports] = useState(false);
  const [error, setError] = useState(null);

  const handleBudgetChange = (e) => {
    setBudgetData({ ...budgetData, [e.target.name]: e.target.value });
  };

  const handleSubmitBudget = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:5000/api/client/budget', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(budgetData),
      });
      const data = await response.json();
      if (response.ok) {
        alert(data.message);
        setBudgetData({ client: '', service: '', details: '' }); // Limpa o formulário
      } else {
        alert(`Erro: ${data.message}`);
      }
    } catch (err) {
      console.error("Erro ao enviar orçamento:", err);
      alert("Erro ao enviar orçamento. Tente novamente.");
    }
  };

  const fetchReports = async () => {
    setLoadingReports(true);
    setError(null);
    try {
      const response = await fetch('http://localhost:5000/api/client/reports');
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      setReports(data);
    } catch (err) {
      console.error("Erro ao buscar relatórios:", err);
      setError("Não foi possível carregar os relatórios.");
    } finally {
      setLoadingReports(false);
    }
  };

  useEffect(() => {
    fetchReports(); // Carrega os relatórios ao montar o componente
  }, []);

  return (
    <div style={{ padding: '40px', maxWidth: '800px', margin: '0 auto' }}>
      <h1 style={{ textAlign: 'center', marginBottom: '40px', color: '#333' }}>Área do Cliente</h1>

      <section style={{ marginBottom: '60px', border: '1px solid #ddd', padding: '30px', borderRadius: '8px' }}>
        <h2 style={{ marginBottom: '30px', color: '#555' }}>Solicitar Orçamento</h2>
        <form onSubmit={handleSubmitBudget}>
          <div style={{ marginBottom: '20px' }}>
            <label htmlFor="client" style={{ display: 'block', marginBottom: '8px', fontWeight: 'bold' }}>Seu Nome/Empresa:</label>
            <input
              type="text"
              id="client"
              name="client"
              value={budgetData.client}
              onChange={handleBudgetChange}
              required
              style={{ width: '100%', padding: '10px', borderRadius: '5px', border: '1px solid #ccc' }}
            />
          </div>
          <div style={{ marginBottom: '20px' }}>
            <label htmlFor="service" style={{ display: 'block', marginBottom: '8px', fontWeight: 'bold' }}>Serviço Desejado:</label>
            <input
              type="text"
              id="service"
              name="service"
              value={budgetData.service}
              onChange={handleBudgetChange}
              required
              style={{ width: '100%', padding: '10px', borderRadius: '5px', border: '1px solid #ccc' }}
            />
          </div>
          <div style={{ marginBottom: '30px' }}>
            <label htmlFor="details" style={{ display: 'block', marginBottom: '8px', fontWeight: 'bold' }}>Detalhes Adicionais:</label>
            <textarea
              id="details"
              name="details"
              value={budgetData.details}
              onChange={handleBudgetChange}
              rows="5"
              style={{ width: '100%', padding: '10px', borderRadius: '5px', border: '1px solid #ccc' }}
            ></textarea>
          </div>
          <button type="submit" style={{ backgroundColor: '#007BFF', color: '#fff', padding: '12px 25px', border: 'none', borderRadius: '5px', cursor: 'pointer', fontSize: '1.1em' }}>
            Enviar Orçamento
          </button>
        </form>
      </section>

      <section style={{ border: '1px solid #ddd', padding: '30px', borderRadius: '8px' }}>
        <h2 style={{ marginBottom: '30px', color: '#555' }}>Meus Relatórios</h2>
        {loadingReports && <p>Carregando relatórios...</p>}
        {error && <p style={{ color: 'red' }}>{error}</p>}
        {!loadingReports && !error && (
          reports.length > 0 ? (
            <ul style={{ listStyle: 'none', padding: 0 }}>
              {reports.map(report => (
                <li key={report.id} style={{ marginBottom: '15px', paddingBottom: '15px', borderBottom: '1px dashed #eee' }}>
                  <h3 style={{ margin: '0 0 5px 0', fontSize: '1.2em' }}>{report.name}</h3>
                  <p style={{ margin: 0, color: '#666' }}>Data: {report.date}</p>
                  {/* Adicionar link para download ou visualização do relatório aqui */}
                  <button style={{ backgroundColor: '#28a745', color: '#fff', padding: '8px 15px', border: 'none', borderRadius: '5px', cursor: 'pointer', marginTop: '10px' }}>
                    Ver/Baixar
                  </button>
                </li>
              ))}
            </ul>
          ) : (
            <p>Nenhum relatório disponível no momento.</p>
          )
        )}
      </section>
    </div>
  );
};

export default ClientAreaPage;