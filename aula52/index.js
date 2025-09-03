function rand(min = 1000, max = 5000) {
  const num = Math.random() * (max - min) + min;
  return Math.floor(num);
}
function f1(callback) {
  setTimeout(function () {
    console.log("1");
    if (callback) callback();
  }, rand());
}
function f2(callback) {
  setTimeout(function () {
    console.log("2");
    if (callback) callback();
  }, rand());
}
function f3(callback) {
  setTimeout(function () {
    console.log("3");
    if (callback) callback();
  }, rand());
}
function Ativar(callback) {
  setTimeout(function () {
    console.log(`Ativando 100% do cérebro`);
    if (callback) callback();
  }, rand());
}
function Aviso(callback) {
  setTimeout(function () {
    console.log("Cuidado!");
    if (callback) callback();
  }, rand());
}
f1(f1Callback);

function f1Callback(){
    f2(f2Callback);
}

function f2Callback(){
    f3(f3Callback);
}

function f3Callback(){
    Aviso(AvisoCallback);
}

function AvisoCallback(){
    Ativar();
}