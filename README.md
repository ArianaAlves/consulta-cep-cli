# 🔍 CLI - Busca de Endereço por CEP

Este projeto é uma ferramenta de linha de comando (CLI) feita com **Node.js** para buscar informações de endereço a partir de um **CEP** utilizando a API pública [ViaCEP](https://viacep.com.br/).

---

## 🚀 Como Usar

### 1. Clone o repositório

```bash
git clone https://github.com/seu-usuario/seu-repositorio.git
cd seu-repositorio

2. Instale as dependências
bash
Copiar
Editar
npm install
3. Torne o script executável (opcional em Linux/Mac)
bash
Copiar
Editar
chmod +x index.js
4. Execute o CLI
bash
Copiar
Editar
node index.js <CEP>
Exemplo:

bash
Copiar
Editar
node index.js 01001000
🧪 Exemplo de Saída
bash
Copiar
Editar
📍 Endereço:
➡️ Rua: Praça da Sé
➡️ Bairro: Sé
➡️ Cidade: São Paulo - SP
➡️ CEP: 01001-000
🛠 Tecnologias
Node.js

node-fetch

dotenv

ViaCEP API

📁 Estrutura do Projeto
pgsql
Copiar
Editar
.
├── index.js
├── utils/
│   └── formatCep.js
├── .env
├── .gitignore
├── package.json
└── README.md
🔒 .env (opcional)
Se você precisar de variáveis de ambiente, adicione-as ao .env. Este arquivo deve estar listado no .gitignore.

📝 Licença
Este projeto está sob a licença MIT.

🙋‍♀️ Feito por
Ariana Alves 💜
