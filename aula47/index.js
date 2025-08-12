// Declaração de função (function hoisting -> pode declarar a função antes de chamá-la)

falaOi();



function falaOi(){
    console.log('Oi, tudo bem?');
}


// First-class objects (Objetos de primeira classe -> funções são tratadas como valores)
// Function expression

const souUmDado = function(){
    console.log('Sou um dado!');
}

function executaFuncao(funcao){
    console.log('Vou executar sua função abaixo:');
    funcao();
}
executaFuncao(souUmDado);

// Arrow function
const funcaoArrow = () => {
    console.log('Sou uma arrow function!');
}
funcaoArrow();

// Dentro de um objeto
const obj = {
    falar: function(){
        console.log('Estou falando...');
    }
};
obj.falar();