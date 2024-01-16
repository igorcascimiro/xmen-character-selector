// passo 1: separar os itens que o usuário poderá interagir

const personagens = document.querySelectorAll('.personagem');

// passo 2: quando o mouse passar em um personagem a classe de selecionado será retirada do anterior e adicionada a ele 

personagens.forEach((personagem) => {

    personagem.addEventListener('mouseenter', () => {

        // Passo 2.5: Para funcionar em telas menores como de celular suavemente.

        if (window.innerWidth < 450) {
            window.scrollTo({ top: 0, behavior: 'smooth' })
        }

        RemoverSelecaoDoPersonagemAnterior();

        personagem.classList.add('selecionado');

        // passo 3: colocar a foto grande do personagem selecionado

        AlterarFotoGrandeParaOSelecionado(personagem);

        // passo 4: trocar o nome grande para o do personagem selecionado

        TrocarONomeGrande(personagem);

        // passo 5: trocar a descrição

        TrocarADescricao(personagem);

    })
})

function TrocarADescricao(personagem) {
    const descricaogrande = document.querySelector('p');
    const descricaocorretagrande = personagem.getAttribute('data-description');
    descricaogrande.textContent = descricaocorretagrande;
}

function TrocarONomeGrande(personagem) {
    const nomegrande = document.querySelector('h2');
    const nomecorretogrande = personagem.getAttribute('data-name');
    nomegrande.textContent = nomecorretogrande;
}

function AlterarFotoGrandeParaOSelecionado(personagem) {
    const imagempersonagemgrande = document.querySelector('.personagem-grande');
    const idselecionado = personagem.attributes.id.value;
    imagempersonagemgrande.src = `./src/imagens/card-${idselecionado}.png`;
}

function RemoverSelecaoDoPersonagemAnterior() {
    const personagemselecionado = document.querySelector('.selecionado');
    personagemselecionado.classList.remove('selecionado');
}

