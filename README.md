# Projeto-Front-End-Turma-Online-Prof-Julio

https://github.com/julioprogramador81/Projeto-Front-End-Turma-Online-Prof-Julio/

#1 - Sugestão para estrutura de pastas
Introdução

In the project directory, you can run:

### `npm start` porque foi feito em react

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.
# Projeto desenvolvido por:

- Julio Henrique Codeiro Lobo

- Eduardo Henrique Cordeiro Lobo

# 1 - Sugestão para estrutura de pastas
Com o objetivo de organizar o projeto estruture o projeto de modo que dentro da pasta "src" existam as pastas dos componentes chamada components e a pasta de paginas chamada pages. Na pasta components devem ser criados os componentes funcionais do projeto e na pasta page deve conter cada aba da pagina da loja drip-store, contendo somente a chamada dos componentes criados. Essa organização facilitará a criação de rotas dentro do arquivo App.js.
## Estrutura do Projeto

```text
mmm/
├── src/
│   ├── components/
│   │   ├── Header/
│   │   ├── Footer/
│   │   ├── Logo/
│   │   ├── ProductListing/
│   │   ├── ProductCard/
│   │   ├── ProductOptions/
│   │   ├── BuyBox/
│   │   ├── Section/
│   │   ├── FilterGroup/
│   │   └── ProductDetails/
│   └── pages/
│       ├── HomePage/
│       ├── ProductViewPage/
│       └── ProductListingPage/
├── App.js
└── index.js

```
# 2 - Cores

```
primary #C92071
secondary #B5B6F2
tertiary #991956
error #EE4266
success #52CA76
warning #F6AA1C
Grayscale

dark-gray #1F1F1F
dark-gray-2 #474747
dark-gray-3 #666666
light-gray #8F8F8F
light-gray-2 #CCCCCC
light-gray-3 #F5F5F5
white #FFFFFF
```
# Projeto - E-commerce de Produtos

## 3 - Layout

### Introdução
Desenvolvimento do layout geral da aplicação, definindo a estrutura visual, organização dos elementos e identidade visual do projeto.

### Requisitos
- Criar layout responsivo.
- Organizar a estrutura das páginas.
- Definir cores, fontes e espaçamentos.
- Garantir compatibilidade com diferentes tamanhos de tela.

---

## 4 - Componentes compartilhados

### Introdução
Desenvolvimento de componentes reutilizáveis que serão utilizados em diferentes páginas da aplicação.

### Requisitos
- Criar componente Header.
- Criar componente Footer.
- Criar componente Logo.
- Criar componente Section.
- Criar componente ProductCard.
- Criar componente ProductOptions.
- Criar componente BuyBox.
- Criar componente FilterGroup.
- Criar componente ProductDetails.

---

## 5 - Página inicial

### Introdução
Desenvolvimento da página inicial da aplicação, apresentando os principais produtos, categorias e destaques da loja.

### React Router DOM
Configurar a navegação entre a página inicial e as demais páginas utilizando React Router DOM.

### Requisitos
- Criar HomePage.
- Apresentar produtos em destaque.
- Criar seções de produtos.
- Adicionar links de navegação.
- Implementar layout responsivo.

---

## 6 - Página de listagem de produtos

### Introdução
A página de listagem de produtos vai renderizar filtros e uma lista de produtos. Essa página será o destino do campo de pesquisa e do menu Produtos.

Nessa página, o usuário poderá visualizar todos os produtos, filtrar e ordenar os resultados marcando diferentes campos de seleção.

### React Router DOM
Configurar a rota para acessar a página de listagem de produtos utilizando React Router DOM.

### Requisitos
- Criar ProductListingPage.
- Exibir lista de produtos.
- Criar filtros de produtos.
- Permitir ordenar os produtos.
- Implementar campo de pesquisa.
- Criar opções de seleção.
- Permitir filtrar por categoria.
- Exibir os resultados de acordo com os filtros selecionados.
- Criar layout responsivo.

---

## 7 - Página de visualização do produto

### Introdução
Desenvolvimento da página individual de visualização dos produtos, permitindo que o usuário consulte informações detalhadas antes de realizar uma compra.

### React Router DOM
Configurar uma rota dinâmica para acessar cada produto individualmente, utilizando seu identificador.

### Requisitos
- Criar ProductViewPage.
- Exibir imagem do produto.
- Exibir nome e descrição.
- Exibir preço do produto.
- Exibir opções disponíveis.
- Permitir selecionar quantidade.
- Criar botão de compra.
- Exibir informações detalhadas do produto.
- Implementar layout responsivo.




### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
