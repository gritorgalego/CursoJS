class ControleRemoto{
    constructor(tv){
        this.tv = tv;
        this.volume = 0;
    }

    // Métodos de instância: precisam de uma instância da classe para serem chamados
    aumentarVolume(){
        this.volume += 2;
    }

    diminuirVolume(){
        this.volume -= 2;
    }


    // Método estático: não precisa de uma instância da classe para ser chamado
    static soma(x, y){
        return x + y;
    }
}

const controle1 = new ControleRemoto("Samsung");
controle1.aumentarVolume();
controle1.aumentarVolume();
controle1.aumentarVolume();
controle1.diminuirVolume();
//controle1.trocaPilha(); // Erro: trocaPilha é um método estático e não pode ser chamado em uma instância
console.log("Resultado da soma:",ControleRemoto.soma(5, 3)); // Correto: chama o método estático diretamente na classe
console.log(`Volume do ${controle1.tv}: ${controle1.volume}`);

// Métodos estáticos não tem acesso aos dados da instância, ou seja, não podem acessar o "this" da classe...
// Eles são usados para funções que não dependem do estado da instância, como utilitários ou funções de fábrica.