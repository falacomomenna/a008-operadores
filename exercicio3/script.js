/* a) 5 é maior que 20 e também é menor que 2;

b) 5 é igual a 5 ou é igual a “5”;

c) negação de vinte é maior que cinquenta

d) negação de (vinte é maior que cinquenta) */

const operacao1 = 5 > 20 && 5 < 2
console.log(operacao1)
// False por 5 não é maior do que 20 e também não é menor de 2

const operacao2 = 5 === 5 || 5 === '5'
console.log(operacao2)
// Verdadeiro porque numeros 5 é igual a numero 5 mas como a segunda condição estamos comparando string com numero, a condição não é verdades, porém como o operador lógio é do tipo || a condição foi atendida

const operacao3 = !20 > 50
console.log(operacao3)
// False por que -20 não é mais que 50

const operacao4 = !(20 > 50)
console.log(operacao4)
//True, pois 20 não é maior que 50 e estamos pedindo a negação disso
