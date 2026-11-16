import random
from datetime import datetime, timedelta
from app import app, db, Lead

# Dados fictícios para simulação
nomes = ["Fernanda", "Rosa", "Douglas", "Carlos", "Ana", "Roberto", "Mariana", "Julio", "Amanda", "Lucas"]
sobrenomes = ["Ferreira", "Silva", "Alves", "Costa", "Nascimento", "Almeida", "Lima", "Souza", "Gomes", "Martins"]
empresas = [
    "Odessa Vôlei", "Univôlei", "Villares Metals", "Quiosque do Thyrso", 
    "Interiorano Comedy", "89ºC Coffee Station", "DG Assessoria Esportiva", 
    "Tech Solutions", "Logística Express", "Construtora ABC"
]
servicos = [
    "Treinamento - Primeiros Socorros", "Consultoria - PGR", "Laudo LTCAT", 
    "Treinamento - Brigada de Incêndio", "Gestão Ambiental", "Terceirização de SESMT"
]
origens = ["site-contato", "google-ads", "instagram", "linkedin", "whatsapp"]
status_list = ["novo", "em_contato", "convertido", "descartado"]

with app.app_context():
    for i in range(100):
        nome_completo = f"{random.choice(nomes)} {random.choice(sobrenomes)}"
        # Espalha os leads aleatoriamente ao longo dos últimos 45 dias
        dias_atras = random.randint(0, 45) 
        
        novo_lead = Lead(
            nome=nome_completo,
            empresa=random.choice(empresas),
            email=f"{nome_completo.split()[0].lower()}.{random.randint(100,999)}@teste.com",
            telefone=f"(19) 9{random.randint(1000,9999)}-{random.randint(1000,9999)}",
            servico=random.choice(servicos),
            mensagem="Lead gerado automaticamente pelo seed.py para simular as métricas no painel administrativo.",
            origem=random.choice(origens),
            status=random.choice(status_list),
            criado_em=datetime.utcnow() - timedelta(days=dias_atras) # Simula o passado
        )
        db.session.add(novo_lead)
    
    db.session.commit()
    print("✅ 100 leads gerados com sucesso com histórico de datas retroativas!")