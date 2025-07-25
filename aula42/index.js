function soma (a, b){
    if(typeof a !== 'number' || typeof b !== 'number'){
        throw new Error(`'a' e 'b' precisam ser números`);
    }
    return a + b;
};

try {
    console.log(soma(1,2));
    // console.log(soma(1,'c'));
    } catch(error){
    console.log('Alguma coisa mais amigável para o usuário');
    }