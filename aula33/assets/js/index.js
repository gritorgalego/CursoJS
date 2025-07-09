const elementos = [
    {tag: 'p', texto: 'You told me think about it, well I did'},
    {tag: 'p', texto: 'Now I dont want to feel a thing anymore'},
    {tag: 'p', texto: 'Im tired of begging for the things that I want'},
    {tag: 'p', texto: 'Im oversleeping like a dog on the floor'},
];

for (let i = 0; i < elementos.length; i++){
    let {tag, texto} = elementos[i];
    let criarTag = document.createElement(tag);
    criarTag.innerHTML = texto;
    document.querySelector('.elementos').appendChild(criarTag);
}
