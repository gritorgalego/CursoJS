const fs = require("fs").promises;

module.exports = (caminho, dados) => {
  fs.writeFile(caminho, dados, { flag: "w" }); //flag a -> append (vai adicionando e não apaga o resto do texto)
};
