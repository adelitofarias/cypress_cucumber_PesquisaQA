
import PesquisaQAPage from '../pageobjects/pesquisaQAPage'
const pesquisaQAPage = new PesquisaQAPage

Given("que eu acesse a página da VV Test", () => {
    pesquisaQAPage.acessarSite();
})

And("acesse o menu Pesquisa - QA", () => {
    pesquisaQAPage.clickPesquisaQA();
})

When("eu preencher todos os campos obrigatórios", () => {
    pesquisaQAPage.clicarCadastrar();
})

Then("deve ser direcionado para uma página de sucesso", () => {
    pesquisaQAPage.visualizarSucesso();
})
