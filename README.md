# Site da Dra. Larissa Nunes - Psicóloga

Este é o site profissional da Dra. Larissa Nunes, psicóloga especializada em Logoterapia.

## Tecnologias Utilizadas

- React 18
- TypeScript
- Vite
- Tailwind CSS
- Firebase/Firestore
- React Router
- Framer Motion

## Instruções de Desenvolvimento

### Pré-requisitos

- Node.js (versão LTS recomendada)
- npm ou yarn

### Instalação

1. Clone o repositório
   ```bash
   git clone https://github.com/seu-usuario/site-larissa-projeto.git
   cd site-larissa-projeto
   ```

2. Instale as dependências
   ```bash
   npm install
   # ou
   yarn
   ```

3. Configure as credenciais do Firebase
   - Crie um projeto no [Firebase Console](https://console.firebase.google.com)
   - Obtenha as credenciais de configuração
   - Atualize o arquivo `src/services/firebase.ts` com suas credenciais

### Desenvolvimento local

```bash
npm run dev
# ou
yarn dev
```

### Compilação para produção

```bash
npm run build
# ou
yarn build
```

## Implantação no Firebase Hosting

1. Instale a CLI do Firebase globalmente
   ```bash
   npm install -g firebase-tools
   ```

2. Faça login no Firebase
   ```bash
   firebase login
   ```

3. Inicialize o Firebase no projeto (se ainda não foi feito)
   ```bash
   firebase init
   ```
   - Selecione "Hosting" e "Firestore"
   - Para o diretório público, use "dist"
   - Configure como SPA: Sim
   - Sobrescrever index.html: Não

4. Faça o deploy
   ```bash
   firebase deploy
   ```

## Estrutura do Projeto

```
site-larissa-projeto/
├── public/            # Arquivos estáticos
├── src/
│   ├── components/    # Componentes reutilizáveis
│   ├── layouts/       # Layouts de página
│   ├── pages/         # Páginas da aplicação
│   ├── services/      # Serviços (Firebase, etc.)
│   ├── App.tsx        # Componente principal
│   ├── main.tsx       # Ponto de entrada
│   └── index.css      # Estilos globais
├── firebase.json      # Configuração do Firebase
├── firestore.rules    # Regras de segurança do Firestore
└── tailwind.config.js # Configuração do Tailwind CSS
```

## Manutenção

Para fazer atualizações no site:

1. Faça as alterações necessárias no código
2. Teste localmente com `npm run dev`
3. Compile para produção com `npm run build`
4. Faça o deploy com `firebase deploy`

## Licença

Todos os direitos reservados.
