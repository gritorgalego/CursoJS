let varA = 'A'; //B
let varB = 'B'; //C
let varC = 'C'; //A

const copiaVarA = varA;

varA = varB;
varB = varC;
varC = copiaVarA;

// Maneira mais prática que ainda será ensinada durante o curso segundo o professor [varA, varB, varC] = [varB, varC, varA];

console.log(varA, varB, varC);