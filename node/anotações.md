Anotaçãoes aula3

- npm init -y (INICIAR PELA PRIMEIRA VEZ EM UM PROJETO)
- npm install express (INSTALAÇÃO PADRÃO)
- npm install express@2.1.0 (USAR VERSÃO ESPECÍFICA)
- npm install express@2.1.0 -E (USAR VERSÃO ESPECÍFICA E NÃO ATUALIZA AUTOMATICAMENTE)
- npm install express@2.x (USAR A VERSÃO MAIS ATUALIZADA DESSA MAJOR)
- npm update (ATUALIZAR)
- npm remove ..., npm r ..., npm uninstall ..., npm rm ...(DESINSTALAR) || ... = nome pacote
- npm ls (LISTAR ITENS, FORMA MAIS AMPLA)
- npm ls --depth=0 (LISTA APENAS 1 CAMADA) a cada número adicionado ele expanda uma pasta a mais
- 

Explicação versões ->    2.     1.      0
                       MAJOR   MINOR  PATCH

˜ na versão -> Pode atualizar apenas a versão patch;
ˆ na versão -> Pode atualizar tanto a minor quanto a patch (usando uptade é possível atualizar alguma delas);

MAJOR -> Quando essa versão é alterada, normalmente toda a compatibilidade é diretamente afetada. É a mais delicada;
MINOR -> Normalmente usado para adição de novos recrusos, que não afetam a linha principal (Major);
PATCH -> Normalmente usado para correção de pequenos bugs;