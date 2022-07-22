let num1 = Number(prompt('Insira um número'))
let num2 = Number(prompt('Insira outro número'))

let comparacao = num1 > num2
console.log(`O primeiro numero é maior que segundo? ${comparacao}`)

comparacao = num1 === num2
console.log(`O primeiro numero é igual ao segundo? ${comparacao}`)

comparacao = num1 % num2 === 0
console.log(`O primeiro numero é divisível pelo segundo? ${comparacao}`)

comparacao = num2 % num1 === 0
console.log(`O segundo numero é divisível pelo primeiro? ${comparacao}`)
