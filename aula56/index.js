// Função construtora e fábrica retornam objetos
// Construtora -> Pessoa (new)

function Pessoa(nome, sobrenome){
    // Atributos ou métodos privados
    const ID = 12345;

    const metodoInterno = function(){
        
    };
    // Atributos ou métodos públicos

    this.nome = nome;
    this.sobrenome = sobrenome;

    this.metodo = function(){
        console.log(this.nome + ': sou um método');
    }
}

const p1 = new Pessoa('Vitor', 'Galego');
const p2 = new Pessoa('Ronaldinho', 'Gaucho');
p2.metodo();