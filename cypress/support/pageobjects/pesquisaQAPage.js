import PesquisaQALocator from '../locators/pesquisaQALocator'
const pesquisaQALocator = new PesquisaQALocator
const url = Cypress.config("baseUrl")

class PesquisaQAPage {
    // Acessa o site que será testado
    acessarSite() {
        cy.visit(url)
    }
      
    // Acionar página Pesquisa QA
    clickPesquisaQA(){
       cy.get(pesquisaQALocator.clickPesquisaQA()).click();

    }

    // Inserir vaçlores válidos nos campos obrigatórios
    clicarCadastrar(){
        cy.fixture('userData').as('usuarioQA').then(function() { 

            cy.get(pesquisaQALocator.campoNome()).type(this.usuarioQA.nome)
            cy.get(pesquisaQALocator.campoSobrenome()).type(this.usuarioQA.sobrenome)
            cy.get(pesquisaQALocator.campoEmail()).type(this.usuarioQA.email)
            cy.get(pesquisaQALocator.campoConfirmacaoEmail()).type(this.usuarioQA.confirmaemail)
            cy.get(pesquisaQALocator.campoFone()).type(this.usuarioQA.fone)
            cy.get(pesquisaQALocator.radioIdade(this.usuarioQA.idade)).click()
            cy.get(pesquisaQALocator.listaTempoQA()).select(this.usuarioQA.listaTempoQA)
            cy.get(pesquisaQALocator.listaAtraiu()).select(this.usuarioQA.listaAtraiu)
            cy.get(pesquisaQALocator.radioMelhorar(this.usuarioQA.melhorar)).click()
            cy.get(pesquisaQALocator.campoLinguagem()).type(this.usuarioQA.campoLinguagem)
            cy.get(pesquisaQALocator.campoPlanoCarreira()).type(this.usuarioQA.campoPlanoCarreira)

            cy.get(pesquisaQALocator.botaoEnviar()).click()            
        })
      
    }
   
    // Verificar se os dados foram enviados com sucesso 
    visualizarSucesso() {
        cy.get(pesquisaQALocator.notificacaoSucesso()).should('contain', 'Your form has been successfully submitted') 
    }
    
}

export default PesquisaQAPage;