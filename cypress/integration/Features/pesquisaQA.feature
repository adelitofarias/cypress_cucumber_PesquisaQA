Feature: Pesquisa com o QA

    Como um recrutador
    Quero colher dados da pesquisa
    Para fazer análises mais detalhadas do QA

    Scenario: Preencher pesquisa com dados obrigatórios válidos
    Given que eu acesse a página da VV Test
    And acesse o menu Pesquisa - QA
    When eu preencher todos os campos obrigatórios
    Then deve ser direcionado para uma página de sucesso