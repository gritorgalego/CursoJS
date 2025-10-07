const a1 = [1, 2, 3];
const a2 = [4, 5, 6];

// a3 = a1.concat(a2, [7, 8, 9], 'Testando');
// ... rest -> ... spread 
const a3 = [...a1, ...a2, ...[7, 8, 9], 'Testando'];

console.log(a3);
