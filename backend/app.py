import os
from datetime import datetime
from flask import Flask, jsonify, request
from flask_cors import CORS
from flask_sqlalchemy import SQLAlchemy

app = Flask(__name__)
CORS(app, supports_credentials=True)

# Utiliza a URL do banco configurada em variável de ambiente ou cai de volta para SQLite local
db_url = os.environ.get('DATABASE_URL', 'sqlite:///leads.db')
if db_url.startswith("postgres://"):
    db_url = db_url.replace("postgres://", "postgresql://", 1)

app.config['SQLALCHEMY_DATABASE_URI'] = db_url
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

db = SQLAlchemy(app)

# --- Modelo do Banco de Dados ---
class Lead(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    nome = db.Column(db.String(120), nullable=False)
    empresa = db.Column(db.String(120), nullable=True)
    email = db.Column(db.String(120), nullable=False)
    telefone = db.Column(db.String(40), nullable=False)
    servico = db.Column(db.String(120), nullable=False)
    mensagem = db.Column(db.Text, nullable=False)
    origem = db.Column(db.String(50), default="site-contato")
    criado_em = db.Column(db.DateTime, default=datetime.utcnow)

    def to_dict(self):
        return {
            "id": self.id,
            "nome": self.nome,
            "empresa": self.empresa,
            "email": self.email,
            "telefone": self.telefone,
            "servico": self.servico,
            "mensagem": self.mensagem,
            "origem": self.origem,
            "criado_em": self.criado_em.isoformat()
        }

# Cria a tabela de leads automaticamente se não existir ao iniciar
with app.app_context():
    db.create_all()

# --- Rotas da API ---

@app.route('/api/leads', methods=['POST'])
def receive_lead():
    data = request.json
    
    if not data or not data.get('email') or not data.get('nome'):
        return jsonify({"detail": "Nome e E-mail são campos obrigatórios."}), 400

    novo_lead = Lead(
        nome=data.get('nome'),
        empresa=data.get('empresa'),
        email=data.get('email'),
        telefone=data.get('telefone'),
        servico=data.get('servico'),
        mensagem=data.get('mensagem'),
        origem=data.get('origem', 'site-contato')
    )

    db.session.add(novo_lead)
    db.session.commit()

    return jsonify({"message": "Lead gravado com sucesso!", "data": novo_lead.to_dict()}), 201

@app.route('/api/leads', methods=['GET'])
def get_leads():
    leads = Lead.query.order_by(Lead.criado_em.desc()).all()
    return jsonify([lead.to_dict() for lead in leads]), 200

if __name__ == '__main__':
    app.run(host='0.0.0.0', debug=True, port=5000)