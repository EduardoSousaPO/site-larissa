# 🔥 Como Configurar o Firebase

## ⚠️ Erro Atual
Você está recebendo o erro: `auth/api-key-not-valid` porque as credenciais do Firebase não estão configuradas.

## 📋 Passo a Passo para Configurar

### 1. Criar/Verificar Projeto no Firebase

1. Acesse o [Firebase Console](https://console.firebase.google.com)
2. Faça login com sua conta Google
3. Clique em **"Adicionar projeto"** (ou selecione um projeto existente)
4. Siga as instruções para criar o projeto

### 2. Obter as Credenciais

1. No Firebase Console, clique no ícone de **⚙️ Configurações do Projeto**
2. Role até a seção **"Seus apps"**
3. Se não tiver um app web, clique em **"Adicionar app"** → **"Web"** (ícone `</>`)
4. Dê um nome ao app (ex: "Site Larissa")
5. **Copie as credenciais** que aparecem (ou clique em "Config" para ver o objeto completo)

Você verá algo assim:
```javascript
const firebaseConfig = {
  apiKey: "AIzaSyXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
  authDomain: "seu-projeto.firebaseapp.com",
  projectId: "seu-projeto-id",
  storageBucket: "seu-projeto.appspot.com",
  messagingSenderId: "123456789012",
  appId: "1:123456789012:web:abcdef1234567890abcdef"
};
```

### 3. Configurar no Projeto

#### Opção A: Usar Arquivo .env (Recomendado)

1. Na raiz do projeto, crie um arquivo chamado `.env` (sem extensão)
2. Adicione as seguintes linhas (substitua pelos seus valores):

```env
VITE_FIREBASE_API_KEY=AIzaSyXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
VITE_FIREBASE_AUTH_DOMAIN=seu-projeto.firebaseapp.com
VITE_FIREBASE_PROJECT_ID=seu-projeto-id
VITE_FIREBASE_STORAGE_BUCKET=seu-projeto.appspot.com
VITE_FIREBASE_MESSAGING_SENDER_ID=123456789012
VITE_FIREBASE_APP_ID=1:123456789012:web:abcdef1234567890abcdef
```

3. **Importante:** O arquivo `.env` já está no `.gitignore`, então suas credenciais não serão commitadas

#### Opção B: Configurar Diretamente no Código

1. Abra o arquivo `src/services/firebase.ts`
2. Substitua os valores de exemplo pelos seus valores reais:

```typescript
const firebaseConfig = {
  apiKey: "SUA_API_KEY_REAL_AQUI",
  authDomain: "seu-projeto.firebaseapp.com",
  projectId: "seu-projeto-id",
  storageBucket: "seu-projeto.appspot.com",
  messagingSenderId: "123456789012",
  appId: "1:123456789012:web:abcdef1234567890abcdef"
};
```

⚠️ **ATENÇÃO:** Se usar esta opção, NÃO faça commit dessas credenciais no Git!

### 4. Habilitar Authentication no Firebase

1. No Firebase Console, vá em **"Authentication"** (no menu lateral)
2. Clique em **"Começar"** ou **"Get started"**
3. Vá na aba **"Sign-in method"**
4. Habilite **"Email/Password"**:
   - Clique em "Email/Password"
   - Ative a opção
   - Clique em "Salvar"

### 5. Configurar Firestore

1. No Firebase Console, vá em **"Firestore Database"**
2. Clique em **"Criar banco de dados"**
3. Escolha o modo:
   - **Modo de teste** (para desenvolvimento - permite leitura/escrita por 30 dias)
   - **Modo de produção** (configure as regras depois)
4. Escolha a localização (ex: `southamerica-east1` para Brasil)
5. Clique em **"Habilitar"**

### 6. Configurar Regras do Firestore

1. No Firestore, vá em **"Regras"**
2. Para desenvolvimento, você pode usar estas regras temporárias:

```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    // Blog posts - leitura pública, escrita apenas para autenticados
    match /blog_posts/{document=**} {
      allow read: if true;
      allow write: if request.auth != null;
    }
    
    // Agendamentos - leitura para autenticados, escrita para todos
    match /agendamentos/{document=**} {
      allow read: if request.auth != null;
      allow create: if true;
      allow update, delete: if request.auth != null;
    }
    
    // Mensagens - leitura para autenticados, escrita para todos
    match /mensagens/{document=**} {
      allow read: if request.auth != null;
      allow create: if true;
      allow update, delete: if request.auth != null;
    }
  }
}
```

⚠️ **IMPORTANTE:** Essas regras são para desenvolvimento. Para produção, ajuste conforme necessário.

### 7. Reiniciar o Servidor

Após configurar:

1. Pare o servidor de desenvolvimento (Ctrl+C)
2. Inicie novamente:
   ```bash
   npm run dev
   ```

### 8. Testar

1. Acesse `/admin/register`
2. Tente criar uma conta
3. Se funcionar, você verá a mensagem de sucesso!

## 🔒 Segurança

- ✅ **NUNCA** commite o arquivo `.env` no Git
- ✅ O arquivo `.env` já está no `.gitignore`
- ✅ Para produção, use variáveis de ambiente do seu provedor de hospedagem
- ✅ Revise as regras do Firestore antes de colocar em produção

## ❓ Problemas Comuns

### "Firebase: Error (auth/api-key-not-valid)"
- Verifique se copiou a API key corretamente
- Certifique-se de que o arquivo `.env` está na raiz do projeto
- Reinicie o servidor após criar/editar o `.env`

### "Firebase: Error (auth/operation-not-allowed)"
- Verifique se habilitou "Email/Password" no Firebase Authentication
- Vá em Authentication → Sign-in method → Email/Password → Habilitar

### "Permission denied" no Firestore
- Verifique as regras do Firestore
- Certifique-se de que está autenticado (para operações que requerem autenticação)

## 📚 Recursos

- [Documentação do Firebase](https://firebase.google.com/docs)
- [Firebase Console](https://console.firebase.google.com)
- [Guia de Autenticação](https://firebase.google.com/docs/auth)

---

**Pronto!** Após seguir estes passos, você poderá criar sua conta e publicar os artigos do blog.

