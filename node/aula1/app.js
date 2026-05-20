// const mod1 = require('./mod1');
// console.log(mod1.falaNome());
const path = require('path');
const axios = require('axios');
const { Pessoa } = require('./mod1');
const mod1 = require('./mod1');

const p1 = new Pessoa('Vitor', 'Galego');
console.log(p1);
