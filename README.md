# Projeto de automação Web adotando o framework Cypress com Cucumber [![CI](https://github.com/adelitofarias/cypress_cucumber_PesquisaQA/actions/workflows/ci.yml/badge.svg?branch=main)](https://github.com/adelitofarias/cypress_cucumber_PesquisaQA/actions/workflows/ci.yml)
> Esse é um exemplo de como montar uma estrutura inicial de testes automáticos web com o auxílio do [Cypress.io][cy] e do [cypress-cucumber-preprocessor][cucumber] que dá suporte para a escrita dos cenários com as regras gramaticais do Gherkin.
> 

### ✨ Instalação e uso da arquitetura
-----------------------
- A IDE escolhida foi o [VS Code][vs];
- Instale o [Node.js](https://nodejs.org/en/download/);
- Seguindo as instruções da documentação do [Cypress.io][cyDOC] e do [cypress-cucumber-preprocessor][cucumber] os instale;
- Baixe este repositório ou faça um git clone;
- Abra o diretório do projeto e execute o comando:
    - `npm install`
- Para acionar os testes, execute no diretório do projeto:
    - `npm run cy:runTest`
- Pronto, o projeto será executado em sua máquina.

### ⚙️ Arquitetura do projeto
-----------------------

```
  ├─  cypress/
  │        │
  │        ├── fixtures/
  │        │   ├── *.json
  │        │   ├── *.csv       
  │        │   └── *.png
  │        │
  │        ├── integration/
  │        │   ├── <Features>/
  │        │   │   └── <categoria>.feature
  │        │
  │        ├── plugins/
  │        │   └── index.js
  │        │
  │        ├── support/
  │        │   ├── locators
  │        │       └── <categoria>Locator.js
  │        │   ├── pageobjects
  │        │       └── <categoria>Pages.js
  │        │   ├── steps
  │        │       └── <categoria>.spec.js
  │        │   └── commands.js
  │        │   └── index.js
  │ 
  ├── cypress.json
  ├── package.json
  └── README.md
```
---------------------------------------
## 🔍 Camadas da arquitetura

 - **fixtures:** arquivos para massa de dados estática para os testes (csv, png, xlsx, txt);
 - **integration:** arquivos contendo as definições de BDD em extensão *.feature;
 - **plugins:** plugins que são utilizados na solução ficam dentro do arquivo "plugins/index.js";
 - **support:** camadas com as divisões modulares para auxiliar na legibilidade dos cenários:
    - locators contém todos os mapeamentos para reconhecimento dos componentes do front;
    - pageobjects contém a modularização de todas as funções que serão adotadas para efetivar a validação;
    - steps contém a conexão entre a definição do BDD na *.feature e as chamdas para efetivação da validação com os *Pages.js;
 - **cypress.json:** arquivo de configuração do Cypress;
 - **package.json:** documento que comporta as configurações necessárias para execução do projeto;

Grato pela visita! =D

[cy]:https://github.com/cypress-io/cypress 
[cyDOC]:https://docs.cypress.io/guides/getting-started/installing-cypress.html#System-requirements
[cucumber]: https://github.com/TheBrainFamily/cypress-cucumber-preprocessor
[vs]: https://code.visualstudio.com/
