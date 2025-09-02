// Global
function retornaFuncao(nome){
    return function(){
        return nome;
    }
}

const funcao = retornaFuncao('Rudo');
const funcao2 = retornaFuncao('Enjin');
console.log(funcao(), funcao2());