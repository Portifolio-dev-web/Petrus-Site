import os
from datetime import datetime
from flask import Flask, jsonify, request, session
from flask_cors import CORS
from flask_sqlalchemy import SQLAlchemy
from werkzeug.security import generate_password_hash, check_password_hash

app = Flask(__name__)
# Chave de segurança obrigatória para usar Sessões no Flask
app.secret_key = os.environ.get('SECRET_KEY', 'chave-super-secreta-petrus-2026')

# ==========================================
# CONFIGURAÇÕES DINÂMICAS DE AMBIENTE E CORS
# ==========================================
# Identifica o ambiente atual (por padrão, assume que é desenvolvimento local)
ENV = os.environ.get('FLASK_ENV', 'development')
IS_PRODUCTION = ENV == 'production'

# Em produção exige HTTPS (True), no desenvolvimento local permite HTTP (False)
app.config['SESSION_COOKIE_SAMESITE'] = 'None'
app.config['SESSION_COOKIE_SECURE'] = True

# Configura as origens permitidas dinamicamente
if IS_PRODUCTION:
    # Quando for para a internet, coloque aqui o link oficial do seu domínio:
    ALLOWED_ORIGINS = ["https://seusiteoficial.com.br", "https://www.seusiteoficial.com.br"]
else:
    # No modo desenvolvimento, libera o localhost padrão do React
    ALLOWED_ORIGINS = ["http://localhost:3000"]

# Aplica o CORS com a lista correta
CORS(app, supports_credentials=True, origins=ALLOWED_ORIGINS)


# ==========================================
# CONFIGURAÇÕES DO BANCO DE DADOS
# ==========================================
db_url = os.environ.get('DATABASE_URL', 'sqlite:///leads.db')
if db_url.startswith("postgres://"):
    db_url = db_url.replace("postgres://", "postgresql://", 1)

app.config['SQLALCHEMY_DATABASE_URI'] = db_url
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

db = SQLAlchemy(app)

# ==========================================
# 1. MODELOS DO BANCO DE DADOS
# ==========================================
class Lead(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    nome = db.Column(db.String(120), nullable=False)
    empresa = db.Column(db.String(120), nullable=True)
    email = db.Column(db.String(120), nullable=False)
    telefone = db.Column(db.String(40), nullable=False)
    servico = db.Column(db.String(120), nullable=False)
    mensagem = db.Column(db.Text, nullable=False)
    origem = db.Column(db.String(50), default="site-contato")
    status = db.Column(db.String(20), default="novo") # Adicionado para o Painel Admin
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
            "status": self.status,
            "created_at": self.criado_em.isoformat() # Nome exato que o React espera
        }

class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(120), nullable=False)
    email = db.Column(db.String(120), unique=True, nullable=False)
    password_hash = db.Column(db.String(256), nullable=False)
    role = db.Column(db.String(20), default="admin")

class Testimonial(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    nome = db.Column(db.String(120), nullable=False)
    cargo = db.Column(db.String(120))
    empresa = db.Column(db.String(120))
    texto = db.Column(db.Text, nullable=False)
    published = db.Column(db.Boolean, default=True)

    def to_dict(self):
        return {"id": self.id, "nome": self.nome, "cargo": self.cargo, "empresa": self.empresa, "texto": self.texto, "published": self.published}

class Setting(db.Model):
    key = db.Column(db.String(50), primary_key=True)
    value = db.Column(db.Text)


# Criação automática das tabelas e do Usuário Admin
with app.app_context():
    db.create_all()
    # Verifica se o admin já existe, se não, cria.
    if not User.query.filter_by(email="admin@petrus.com").first():
        senha_criptografada = generate_password_hash("admin123")
        admin = User(name="Administrador", email="admin@petrus.com", password_hash=senha_criptografada, role="admin")
        db.session.add(admin)
        db.session.commit()


# ==========================================
# 2. MIDDLEWARE DE AUTENTICAÇÃO
# ==========================================
def login_required(f):
    def wrap(*args, **kwargs):
        if 'user_id' not in session:
            return jsonify({"detail": "Acesso não autorizado. Faça login."}), 401
        return f(*args, **kwargs)
    wrap.__name__ = f.__name__
    return wrap

# ==========================================
# 3. ROTAS DE AUTENTICAÇÃO
# ==========================================
@app.route('/api/auth/login', methods=['POST'])
def login():
    data = request.json
    user = User.query.filter_by(email=data.get('email')).first()
    if user and check_password_hash(user.password_hash, data.get('password')):
        session['user_id'] = user.id
        return jsonify({"id": user.id, "name": user.name, "email": user.email, "role": user.role}), 200
    return jsonify({"detail": "E-mail ou senha incorretos."}), 401

@app.route('/api/auth/me', methods=['GET'])
def auth_me():
    if 'user_id' in session:
        user = User.query.get(session['user_id'])
        if user:
            return jsonify({"id": user.id, "name": user.name, "email": user.email, "role": user.role}), 200
    return jsonify({"detail": "Sessão expirada."}), 401

@app.route('/api/auth/logout', methods=['POST'])
def logout():
    session.pop('user_id', None)
    return jsonify({"message": "Logout com sucesso"}), 200

# ==========================================
# 4. ROTAS DO PAINEL ADMIN
# ==========================================
# --- LEADS ---
@app.route('/api/admin/leads', methods=['GET'])
@login_required
def get_admin_leads():
    leads = Lead.query.order_by(Lead.criado_em.desc()).all()
    return jsonify([lead.to_dict() for lead in leads]), 200

@app.route('/api/admin/leads/<int:id>', methods=['PATCH'])
@login_required
def update_lead_status(id):
    lead = Lead.query.get_or_404(id)
    lead.status = request.json.get('status', lead.status)
    db.session.commit()
    return jsonify(lead.to_dict()), 200

@app.route('/api/admin/leads/<int:id>', methods=['DELETE'])
@login_required
def delete_lead(id):
    lead = Lead.query.get_or_404(id)
    db.session.delete(lead)
    db.session.commit()
    return '', 204

# --- DEPOIMENTOS ---
@app.route('/api/admin/testimonials', methods=['GET'])
@login_required
def get_testimonials():
    items = Testimonial.query.all()
    return jsonify([t.to_dict() for t in items]), 200

@app.route('/api/admin/testimonials', methods=['POST'])
@login_required
def create_testimonial():
    data = request.json
    novo = Testimonial(
        nome=data.get('nome'), cargo=data.get('cargo'), 
        empresa=data.get('empresa'), texto=data.get('texto'), published=data.get('published', True)
    )
    db.session.add(novo)
    db.session.commit()
    return jsonify(novo.to_dict()), 201

@app.route('/api/admin/testimonials/<int:id>', methods=['PUT'])
@login_required
def update_testimonial(id):
    t = Testimonial.query.get_or_404(id)
    data = request.json
    t.nome = data.get('nome', t.nome)
    t.cargo = data.get('cargo', t.cargo)
    t.empresa = data.get('empresa', t.empresa)
    t.texto = data.get('texto', t.texto)
    t.published = data.get('published', t.published)
    db.session.commit()
    return jsonify(t.to_dict()), 200

@app.route('/api/admin/testimonials/<int:id>', methods=['DELETE'])
@login_required
def delete_testimonial(id):
    t = Testimonial.query.get_or_404(id)
    db.session.delete(t)
    db.session.commit()
    return '', 204

# --- CONFIGURAÇÕES ---
@app.route('/api/admin/settings', methods=['GET'])
@login_required
def get_admin_settings():
    settings = Setting.query.all()
    return jsonify({s.key: s.value for s in settings}), 200

@app.route('/api/admin/settings', methods=['PUT'])
@login_required
def update_settings():
    data = request.json
    for key, value in data.items():
        setting = Setting.query.get(key)
        if setting:
            setting.value = value
        else:
            db.session.add(Setting(key=key, value=value))
    db.session.commit()
    return jsonify({"message": "Configurações atualizadas"}), 200

# Rota pública exigida pelo frontend para carregar configurações no site sem login
@app.route('/api/settings/public', methods=['GET'])
def get_public_settings():
    settings = Setting.query.all()
    return jsonify({s.key: s.value for s in settings}), 200

# ==========================================
# 5. ROTAS DO SITE PÚBLICO (Formulário)
# ==========================================
@app.route('/api/leads', methods=['POST'])
def receive_lead():
    data = request.json
    if not data or not data.get('email') or not data.get('nome'):
        return jsonify({"detail": "Nome e E-mail são obrigatórios."}), 400

    novo_lead = Lead(
        nome=data.get('nome'), empresa=data.get('empresa'), email=data.get('email'),
        telefone=data.get('telefone'), servico=data.get('servico'), mensagem=data.get('mensagem'),
        origem=data.get('origem', 'site-contato')
    )
    db.session.add(novo_lead)
    db.session.commit()
    return jsonify({"message": "Lead gravado com sucesso!", "data": novo_lead.to_dict()}), 201

if __name__ == '__main__':
    app.run(host='0.0.0.0', debug=True, port=5000)