    const pessoa1 = {
        nome: 'Vitor',
        sobrenome: 'Galego',
        idade: 20,
        fala() {
            console.log(`A minha idade atual é ${this.idade} anos`);
        },
        incrementaIdade() {
            this.idade++;
        }
    };

    pessoa1.fala();
    pessoa1.incrementaIdade();
    pessoa1.fala();

// function criaPessoa (nome, sobrenome, idade){

//     return{
//         nome:nome,
//         sobrenome:sobrenome,
//         idade:idade
//     };
// }

// const pessoa1 = criaPessoa('Vitor', 'Galego', 20);