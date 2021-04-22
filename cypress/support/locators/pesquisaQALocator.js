class PesquisaQALocator {

    clickPesquisaQA = () => {return '[href="http://www.lourencodemonaco.com.br/vvtest/pesquisa/"]'}

    campoNome = () => { return '#nf-field-5' }

    campoSobrenome = () => {return '#nf-field-6'}

    campoEmail = () => {return '#nf-field-7'}

    campoConfirmacaoEmail = () => { return '#nf-field-8' }

    campoFone = () => {return '#nf-field-17'}

    radioIdade = (idade) => {return `#nf-label-class-field-10-${idade}`}

    listaTempoQA = () => {return '#nf-field-11'}

    listaAtraiu = () => {return '#nf-field-12'}

    radioMelhorar = (melhorar) => {return `#nf-label-class-field-13-${melhorar}`}

    campoLinguagem = () => {return '#nf-field-14'}

    campoPlanoCarreira = () => {return '#nf-field-15'}

    botaoEnviar = () => {return '#nf-field-16'}

    notificacaoSucesso = () => {return '.nf-response-msg > p'}
    
}

export default PesquisaQALocator;