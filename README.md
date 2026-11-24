# Program Improving Backend

API REST para gerenciamento de notas construída com **Node.js**, **Express** e **MongoDB**.

## 🎯 Descrição

Backend da aplicação "Program Improving" que fornece endpoints para:
- ✅ Listar todas as notas
- ✅ Buscar nota por ID
- ✅ Criar nova nota
- ✅ Deletar nota
- ✅ Visualizar informações do banco de dados

## 🛠️ Tecnologias

- **Node.js** - Runtime JavaScript
- **Express** - Framework web
- **MongoDB** - Banco de dados NoSQL
- **Mongoose** - ODM para MongoDB
- **Morgan** - Logger de requisições HTTP
- **CORS** - Suporte para requisições cross-origin
- **Dotenv** - Gerenciamento de variáveis de ambiente

## 📋 Requisitos

- Node.js v18+
- npm ou yarn
- MongoDB Atlas (conta gratuita)

## 🚀 Instalação

1. **Clone o repositório**
```bash
git clone <seu-repo-url>
cd program-improving-backend
```

2. **Instale as dependências**
```bash
npm install
```

3. **Configure as variáveis de ambiente**

Crie um arquivo `.env` na raiz do projeto:
```env
MONGODB_URI=mongodb+srv://usuario:senha@cluster0.xxxxx.mongodb.net/noteApp
PORT=3001
NODE_ENV=development
```

> ⚠️ Nunca commite o arquivo `.env` - já está no `.gitignore`

4. **Popule o banco de dados (opcional)**
```bash
node seedDatabase.js
```

## 🏃 Como Rodar

**Modo desenvolvimento (com auto-reload)**
```bash
npm run dev
```

**Modo produção**
```bash
npm start
```

O servidor estará disponível em: `http://localhost:3001`

## 📡 Endpoints da API

### GET `/api/notes`
Retorna todas as notas.

**Response:**
```json
[
  {
    "id": "507f1f77bcf86cd799439011",
    "content": "HTML is easy",
    "important": true
  }
]
```

### GET `/api/notes/:id`
Retorna uma nota específica pelo ID.

**Response:**
```json
{
  "id": "507f1f77bcf86cd799439011",
  "content": "HTML is easy",
  "important": true
}
```

### POST `/api/notes`
Cria uma nova nota.

**Body:**
```json
{
  "content": "New note",
  "important": false
}
```

**Response:** (status 201)
```json
{
  "id": "507f1f77bcf86cd799439012",
  "content": "New note",
  "important": false
}
```

### DELETE `/api/notes/:id`
Deleta uma nota.

**Response:** (status 204 - No Content)

### GET `/info`
Retorna informações do banco de dados.

**Response:**
```html
<p>Note list has info for 3 notes</p>
<p>Tue Nov 24 2026 02:05:23 GMT...</p>
```

### GET `/`
Página de boas-vindas.

## 🏗️ Estrutura do Projeto

```
program-improving-backend/
├── index.js                 # Server principal
├── models/
│   └── note.js             # Schema MongoDB e modelo
├── requests/               # Testes REST (VSCode REST Client)
│   ├── get_all_notes.rest
│   ├── get_note_by_id.rest
│   ├── post_add_note.rest
│   ├── delete_note.rest
│   ├── get_info.rest
│   └── get_home.rest
├── mongo.js                # Script para salvar nota única
├── seedDatabase.js         # Script para popular o banco
├── package.json
├── .env                    # Variáveis de ambiente (não versionado)
└── .gitignore
```

## 🧪 Testando a API

### Usando VSCode REST Client

A extensão "REST Client" está pré-configurada. Abra qualquer arquivo `.rest` em `requests/` e clique em "Send Request".

### Usando cURL

```bash
# GET todas as notas
curl http://localhost:3001/api/notes

# POST nova nota
curl -X POST http://localhost:3001/api/notes \
  -H "Content-Type: application/json" \
  -d '{"content":"Nova nota","important":true}'

# GET nota por ID
curl http://localhost:3001/api/notes/ID_AQUI

# DELETE nota
curl -X DELETE http://localhost:3001/api/notes/ID_AQUI
```

## 🔧 Variáveis de Ambiente

| Variável | Descrição | Exemplo |
|----------|-----------|---------|
| `MONGODB_URI` | Connection string do MongoDB | `mongodb+srv://...` |
| `PORT` | Porta do servidor | `3001` |
| `NODE_ENV` | Ambiente (dev/prod) | `development` |

## 📝 Middlewares

A aplicação implementa os seguintes middlewares:

1. **CORS** - Permite requisições do frontend
2. **express.json()** - Parse de JSON no body
3. **Request Logger** - Loga cada requisição HTTP
4. **Morgan** - Logger detalhado de requisições
5. **Error Handler** - Tratamento centralizado de erros

## 🚨 Tratamento de Erros

O backend implementa um middleware de erro centralizado que:
- Captura exceções de todas as rotas
- Trata erros específicos (como CastError do MongoDB)
- Pode ser integrado com serviços como Sentry

## 🔐 Segurança

- ✅ Credenciais em `.env` (não versionadas)
- ✅ CORS configurado apenas para origem do frontend
- ✅ Validação de entrada
- ✅ Tratamento de erros sanitizado

## 📚 Próximas Melhorias

- [ ] Autenticação e autorização
- [ ] Validação com Joi ou Yup
- [ ] Testes automatizados
- [ ] Integração com Sentry
- [ ] Documentação com Swagger/OpenAPI
- [ ] Paginação nas listas

## 🤝 Contribuindo

1. Crie uma branch (`git checkout -b feature/nova-funcionalidade`)
2. Commit suas mudanças (`git commit -m 'Add: nova funcionalidade'`)
3. Push para a branch (`git push origin feature/nova-funcionalidade`)
4. Abra um Pull Request

## 📄 Licença

ISC

## 👨‍💻 Autor

Matheus Henrique

---

**Dúvidas ou sugestões?** Abra uma issue no repositório!
