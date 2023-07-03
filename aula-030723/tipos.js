// Tipagem Estatica -> Definição de um tipo a cada variavel (Java, C, C++, TypeScript)
// Tipagem Dinamica -> O tipo da variavel é definido de acordo com seu valor (JavaScript, Python)

let variavel = 22;
console.log(typeof variavel); // Number

variavel = "Prof. Gabriel";
console.log(typeof variavel)  // String

variavel = true;
console.log(typeof variavel)  //Boolean

variavel = { nome: "Gabriel", idade: 21}; // Object
console.log(typeof variavel)  

variavel = [1, 2, 3, 4, 5];
console.log(typeof variavel); //Object

variavel = function() {return 1 };
console.log(typeof variavel);  //Function

variavel = undefined; //Indefinido
console.log(variavel); //Undefined

variavel = null; // Nulo
console.log(variavel); //Null

variavel = NaN; // Not a number (numero)
console.log(variavel); // NaN