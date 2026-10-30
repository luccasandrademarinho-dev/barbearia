# 💈 Barbearia Navalha de Ouro - Projeto React + Vite

Estrutura de projeto profissional e moderna em **React** construída com **Vite**, desenvolvida especialmente para sites de barbearias e estética masculina.

---

## 📁 Estrutura de Pastas

```text
Site Barbearia/
├── index.html                   # Documento HTML principal
├── package.json                 # Dependências e scripts do projeto
├── vite.config.js               # Configuração do Vite
├── .gitignore                   # Arquivos ignorados pelo Git
├── README.md                    # Documentação do projeto
│
├── public/                      # Arquivos públicos e estáticos
│   └── favicon.svg              # Ícone da navalha/tesoura
│
└── src/                         # Código-fonte da aplicação
    ├── assets/                  # Imagens, ícones e fontes locais
    │
    ├── components/              # Componentes reutilizáveis
    │   ├── common/              # Componentes genéricos (Botões, Títulos)
    │   │   ├── Button/
    │   │   │   ├── Button.jsx
    │   │   │   └── Button.css
    │   │   └── SectionTitle/
    │   │       ├── SectionTitle.jsx
    │   │       └── SectionTitle.css
    │   │
    │   ├── layout/              # Componentes estruturais fixos
    │   │   ├── Navbar/
    │   │   │   ├── Navbar.jsx
    │   │   │   └── Navbar.css
    │   │   └── Footer/
    │   │       ├── Footer.jsx
    │   │       └── Footer.css
    │   │
    │   └── sections/            # Seções completas da página (One-Page)
    │       ├── Hero/            # Destaque inicial com chamada principal
    │       ├── About/           # História, diferenciais e comodidades
    │       ├── Services/        # Catálogo de serviços com preços e durações
    │       ├── Team/            # Apresentação dos barbeiros especialistas
    │       ├── Testimonials/    # Depoimentos e avaliações de clientes
    │       ├── Contact/         # Horários, endereço e contato
    │       └── BookingModal/    # Modal interativo de agendamento de horário
    │
    ├── data/                    # Dados e listas mockadas
    │   ├── services.js          # Catálogo de cortes, barbas e tratamentos
    │   ├── barbers.js           # Lista dos barbeiros e especialidades
    │   └── testimonials.js      # Avaliações 5 estrelas
    │
    ├── hooks/                   # Custom Hooks do React
    │   └── useScrollPosition.js # Hook para efeito do menu na rolagem
    │
    ├── styles/                  # Estilos globais e variáveis
    │   └── index.css            # Reset, cores dourado/preto, tipografia
    │
    ├── utils/                   # Funções utilitárias auxiliares
    │   └── formatters.js        # Formatadores de moeda (BRL) e telefone
    │
    ├── App.jsx                  # Componente raiz da aplicação
    ├── App.css                  # Estilos do layout principal e botão flutuante
    └── main.jsx                 # Ponto de entrada do React (ReactDOM.createRoot)
```

---

## 🚀 Como Executar o Projeto

### 1. Instalar as Dependências
Abra o terminal na pasta do projeto e execute:
```bash
npm install
```

### 2. Iniciar o Servidor de Desenvolvimento
```bash
npm run dev
```
O projeto iniciará em `http://localhost:3000` (ou na porta indicada no terminal).

### 3. Gerar a Versão de Produção (Build)
```bash
npm run build
```
Os arquivos otimizados serão gerados na pasta `dist/`.

---

## ✨ Funcionalidades Incluídas

- 🎨 **Design Moderno & Temático**: Paleta de cores sofisticada (Preto e Dourado Nobre).
- 📱 **Totalmente Responsivo**: Adaptado perfeitamente para celulares, tablets e computadores.
- ✂️ **Catálogo de Serviços**: Apresentação de valores, tempo estimado e destaques.
- 📅 **Modal de Agendamento Interativo**: O cliente seleciona serviço, profissional, data, horário e pode confirmar diretamente pelo WhatsApp.
- 💬 **Botão Flutuante de WhatsApp**: Acesso direto ao atendimento da barbearia.
- 👥 **Seção de Especialistas**: Destaque para a equipe de mestres barbeiros.
- ⭐ **Depoimentos Reais**: Prova social com avaliação 5 estrelas.

