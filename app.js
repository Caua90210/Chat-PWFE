'use strict'

const pessoas = [

    {
        nome: 'Tuê',
        imagem: 'tue.jpg',
        mensagem: 'Asmei...',
        contato: '30praum',
        tempo: 'Agora mesmo',
        quantidade: '2'
    },

    {
        nome: 'BatScott',
        imagem: 'travus.jpg',
        mensagem: 'La revenge...',
        contato: 'Cactus Jack',
        tempo: 'Há 5 minutos',
        quantidade: '20'
    },

    {
        nome: 'José',
        imagem: 'josé.jpg',
        mensagem: 'Não posso evitar...',
        contato: 'Rei',
        tempo: 'Há 7 horas',
        quantidade: '5'
    },

    {
        nome: 'Ryu',
        imagem: 'ryu.jpg',
        mensagem: 'ビート...',
        contato: '日本',
        tempo: 'Há 1 dia',
        quantidade: '1'
    },

    {
        nome: 'Mac',
        imagem: 'mac.jpg',
        mensagem: 'Sou Maclovin...',
        contato: 'SuperBad',
        tempo: 'Há 8 dias',
        quantidade: '4'
    }

]

const criarCard = (pessoa) => {

    const card = document.createElement('div')
    card.classList.add('card')

    const img = document.createElement('img')
    img.src = `./img/${pessoa.imagem}`
    img.alt = pessoa.nome

    const info = document.createElement('div')
    info.classList.add('info')

    const nomeContainer = document.createElement('div')
    nomeContainer.classList.add('nome-container')

    const nome = document.createElement('h3')
    nome.classList.add('nome')
    nome.textContent = pessoa.nome

    const qntMsg = document.createElement('span')
    qntMsg.classList.add('qnt-msg')
    qntMsg.textContent = pessoa.quantidade

    const mensagem = document.createElement('p')
    mensagem.classList.add('mensagem')
    mensagem.textContent = pessoa.mensagem

    const tempo = document.createElement('p')
    tempo.classList.add('tempo')
    tempo.textContent = pessoa.tempo

    const contatoCard = document.createElement('div')
    contatoCard.classList.add('contato')

    const contato = document.createElement('p')
    contato.textContent = pessoa.contato

    card.appendChild(img)
    card.appendChild(info)
    card.appendChild(tempo)
    card.appendChild(contatoCard)
    info.appendChild(nomeContainer)
    info.appendChild(mensagem)
    nomeContainer.appendChild(nome)
    nomeContainer.appendChild(qntMsg)
    contatoCard.appendChild(contato)

    return card

}

const mostrarCards = (pessoa) => {

    const containerChat = document.getElementById('container-chat')
    const card = criarCard(pessoa)
    containerChat.appendChild(card)

} 

pessoas.forEach(mostrarCards)