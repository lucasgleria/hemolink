
# 🩸 Hemolink

**Plataforma intuitiva para gerenciamento de doações de sangue, focada em conectar doadores a quem precisa de forma eficiente. Este projeto é uma evolução de uma base existente, com novas funcionalidades e melhorias.**

[](https://www.google.com/search?q=LICENSE)
[](https://www.google.com/search?q=https://github.com/GuxtaPires/hemolink/releases/tag/v1.0.0)
[](https://www.google.com/search?q=)
[](https://www.google.com/search?q=)

## 📌 Sumário

1.  [Sobre o Projeto](https://www.google.com/search?q=%23-sobre-o-projeto)
2.  [Objetivos](https://www.google.com/search?q=%23-objetivos)
3.  [Tecnologias](https://www.google.com/search?q=%23-tecnologias)
4.  [Funcionalidades](https://www.google.com/search?q=%23-funcionalidades)
5.  [Pré-requisitos](https://www.google.com/search?q=%23%25EF%25B8%258F-pr%C3%A9-requisitos)
6.  [Instalação](https://www.google.com/search?q=%23%25EF%25B8%258F-instala%C3%A7%C3%A3o)
7.  [Como utilizar](https://www.google.com/search?q=%23-como-utilizar)
8.  [Estrutura do Projeto](https://www.google.com/search?q=%23-estrutura-do-projeto)
9.  [Contribuição](https://www.google.com/search?q=%23-contribui%C3%A7%C3%A3o)
10. [Licença](https://www.google.com/search?q=%23-licen%C3%A7a)
11. [Contato](https://www.google.com/search?q=%23-contato)
12. [Recursos Adicionais](https://www.google.com/search?q=%23-recursos-adicionais)

## 💻 Sobre o Projeto

O **Hemolink** é uma plataforma web que visa simplificar a conexão entre doadores de sangue e pessoas necessitadas. Ele facilita o agendamento de doações, solicitações de sangue e o gerenciamento de todo o processo por meio de uma interface moderna e intuitiva.

Este repositório é um *fork* do projeto original, no qual estou trabalhando como colaborador para adicionar novas funcionalidades, otimizar o código existente e aprimorar a experiência do usuário. O foco principal é tornar o processo de doação e solicitação de sangue mais acessível e eficiente.

  - *Motivação*: Melhorar e expandir uma solução existente para um problema social importante, contribuindo para uma ferramenta que pode salvar vidas.
  - *Público-alvo*: Doadores de sangue, pessoas necessitadas de doações, hemocentros e administradores da plataforma.

## 🎯 Objetivos

### 🛠️ Técnicos

  - **Aprimorar a usabilidade:** Refinar a interface e a experiência do usuário para facilitar a navegação e o uso da plataforma.
  - **Expandir funcionalidades:** Implementar novas características como agendamento de doação, solicitação de doação e edição de cadastro, conforme evidenciado no histórico de commits.
  - **Otimização de código:** Refatorar e otimizar o código existente para garantir melhor performance e manutenibilidade.
  - **Garantir responsividade:** Assegurar que a aplicação seja totalmente responsiva e funcione bem em diferentes dispositivos (mobile, tablet, desktop).
  - **Manter a modularidade:** Preservar e expandir a arquitetura modular do projeto (CSS, JavaScript) para facilitar futuras expansões e colaborações.

## 🚀 Tecnologias

**Front-end**

  - HTML5
  - CSS3 (com Tailwind CSS)
  - JavaScript ES6+
  - Chart.js (para gráficos)
  - Font Awesome (para ícones)

## ✨ Funcionalidades

As funcionalidades abaixo representam a combinação do projeto original e as implementações realizadas após o *fork*:

  - ✅ **Dashboard de doadores disponíveis:** Visão geral dos doadores cadastrados e sua disponibilidade.
  - ✅ **Busca e filtros avançados:** Pesquisa de doadores por nome, tipo sanguíneo, localização e nível de urgência.
  - ✅ **Agendamento de Doação:** Interface para doadores agendarem suas doações (nova funcionalidade).
  - ✅ **Solicitação de Doação:** Interface para usuários solicitarem doações (nova funcionalidade).
  - ✅ **Edição de Cadastro:** Permite que doadores e usuários editem suas informações de perfil (nova funcionalidade).
  - ✅ **Painéis administrativos com gráficos:** Utilização do Chart.js para visualização de estatísticas sobre doações e doadores.
  - ✅ **Validação de formulários:** Garantia de dados consistentes com validações no frontend.
  - ✅ **Notificações:** Feedback visual ao usuário através de notificações *toast*.
  - ✅ **Arquitetura modular:** Organização de CSS e JavaScript para facilitar a manutenção e o desenvolvimento.
  - ✅ **Cálculo de compatibilidade sanguínea:** Ferramenta para identificar doadores compatíveis.
  - ✅ **Controle de dias até a próxima doação:** Auxílio aos doadores para gerenciar seus agendamentos.

## ⚙️ Pré-requisitos

  - Um navegador web moderno (Chrome, Firefox, Edge, Safari).
  - Um editor de código (como VS Code) para desenvolvimento.
  - Conexão estável à internet (para carregar bibliotecas externas, se houver).

## 🛠️ Instalação

Como este é um projeto front-end puro (HTML, CSS, JavaScript), a instalação é bastante simples:

1.  **Clone o repositório:**

    ```bash
    git clone https://github.com/lucasgleria/hemolink.git
    ```

    *(Nota: Altere `lucasgleria` para o seu nome de usuário se o repositório estiver no seu perfil, ou para o nome do repositório se for de um colega colaborador.)*

2.  **Navegue até a pasta do projeto:**

    ```bash
    cd hemolink
    ```

3.  **Abra o arquivo `home.html` no seu navegador:**
    Você pode simplesmente arrastar o arquivo `home.html` para a janela do seu navegador ou usar uma extensão de servidor local no seu editor de código (ex: "Live Server" no VS Code) para uma experiência de desenvolvimento mais completa.

## ❗ Como Utilizar

Após a instalação, abra o arquivo `home.html` no seu navegador.

  - **Página Inicial:** Navegue pela interface do usuário para explorar as opções disponíveis.
  - **Agendamento de Doação:** Acesse `agendar-doacao.html` na pasta `pages/donor`.
  - **Solicitação de Doação:** Acesse `pedir-doacao.html` na pasta `pages/donor`.
  - **Edição de Cadastro:** Acesse `editar-cadastro.html` na pasta `pages/donor`.
  - **Estatísticas:** As páginas `stats-user.html` e `stats-hemo.html` (na pasta `pages/dashboard`) exibem painéis com gráficos.
  - **Login:** A página `login.html` (na pasta `pages/auth`) permite simular um login.

### ▶️ Demonstração

[]()

*(Gif meramente ilustrativo)*

## 📂 Estrutura do Projeto

```plaintext
hemolink/
├── assets/
│   ├── css/                  # Estilos CSS
│   │   ├── base/             # Reset e variáveis globais
│   │   │   ├── reset.css
│   │   │   └── variables.css
│   │   ├── components/       # Estilos de componentes reutilizáveis
│   │   │   ├── cards.css
│   │   │   └── header.css
│   │   ├── pages/            # Estilos específicos de páginas (ex: agendamento, edição)
│   │   └── main.css          # CSS principal global
│   ├── js/                   # Scripts JavaScript
│   │   ├── components/
│   │   │   └── search.js     # Componente de busca de doadores
│   │   ├── utils/
│   │   │   └── helpers.js    # Funções utilitárias
│   │   └── main.js           # Script principal da aplicação
│   └── data/
│       └── donors.js         # Dados mockados e helpers de dados
├── components/
│   ├── header.html           # Componente de cabeçalho reutilizável
│   └── footer.html           # Componente de rodapé reutilizável
├── pages/
│   ├── auth/
│   │   └── login.html        # Página de login
│   ├── dashboard/
│   │   ├── stats-user.html   # Estatísticas do usuário
│   │   └── stats-hemo.html   # Painel do hemocentro
│   └── donor/
│       ├── agendar-doacao.html   # Agendamento de doação (Nova)
│       ├── pedir-doacao.html     # Solicitação de doação (Nova)
│       ├── editar-cadastro.html  # Edição de cadastro do doador (Nova)
│       └── doadores-disponiveis.html # Listagem de doadores disponíveis
├── home.html                # Página inicial
├── .gitignore                # Arquivo de exclusão do Git
├── LICENSE                   # Licença MIT
└── README.md                 # Este arquivo
```

## 🤝 Contribuição

Contribuições são muito bem-vindas para aprimorar o Hemolink\! Se você deseja contribuir, siga estas etapas:

1.  **Faça um *fork* deste repositório.**
2.  **Crie uma *branch* para sua funcionalidade ou correção de bug:**
    ```bash
    git checkout -b feature/sua-nova-funcionalidade
    ```
    ou
    ```bash
    git checkout -b bugfix/correcao-do-problema
    ```
3.  **Faça suas alterações e *commits*:**
    ```bash
    git add .
    git commit -m "feat: Adiciona nova funcionalidade X"
    ```
    (Prefira mensagens de commit descritivas e utilize o [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/) se possível.)
4.  **Envie suas alterações para o seu *fork* (ou para o repositório principal, se tiver permissão):**
    ```bash
    git push origin feature/sua-nova-funcionalidade
    ```
5.  **Abra um *Pull Request* (PR) para o branch `main` deste repositório.**
    Descreva detalhadamente as mudanças que você fez, os problemas que resolveu ou as funcionalidades que adicionou.

### Arquitetura JavaScript e CSS

Para facilitar a contribuição, siga as diretrizes de arquitetura já estabelecidas:

#### `assets/js/main.js`

  - Responsável por inicializar a aplicação, componentes globais e funcionalidades específicas de cada página.
  - Utilize-o para lógica que afeta a aplicação como um todo ou para chamar funções de componentes e utilitários.

#### `assets/js/components/`

  - Adicione novos arquivos para componentes JavaScript reutilizáveis.
  - Ex: `search.js` para lógica de busca, `formValidation.js` para validação de formulários complexos.

#### `assets/js/utils/helpers.js`

  - Funções utilitárias que podem ser usadas em diversas partes do projeto (ex: formatação de datas, validações gerais, funções de UI como `showNotification`).

#### `assets/data/donors.js`

  - Se precisar de dados mockados para novas funcionalidades, adicione-os aqui, seguindo o padrão existente.

#### `assets/css/`

  - Organize os estilos seguindo a estrutura modular:
      - `base/`: Para resets, variáveis globais (cores, fontes, espaçamentos).
      - `components/`: Para estilos de componentes reutilizáveis (botões, cards, headers).
      - `pages/`: Para estilos específicos de páginas individuais que não se encaixam em componentes genéricos.
      - `main.css`: Para importações dos outros arquivos CSS e estilos globais menores.

## 📜 Licença

Este projeto está licenciado sob a Licença MIT. Consulte o arquivo [LICENSE](https://www.google.com/search?q=LICENSE) para mais detalhes.

## 📞 Contato 

  - **Colaborador**: [Lucas Leria](https://github.com/lucasgleria)
  - **LinkedIn**: [lucasleria](https://www.linkedin.com/in/lucasleria/)
  - **Repositório Original**: [Aqui](https://github.com/eduhantonio/hemolink)
  - **Dono do Repositório original:** [Eduardo Antonio](https://github.com/eduhantonio)

## 🔍 Recursos Adicionais

  - [HTML5](https://developer.mozilla.org/pt-BR/docs/Web/HTML) - Documentação oficial
  - [CSS3](https://developer.mozilla.org/pt-BR/docs/Web/CSS) - Documentação oficial
  - [JavaScript](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript) - Documentação oficial
  - [Chart.js](https://www.chartjs.org/docs/latest/) - Documentação oficial
  - [Font Awesome](https://fontawesome.com/docs) - Documentação oficial
