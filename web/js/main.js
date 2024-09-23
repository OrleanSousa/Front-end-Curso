let valorConta = parseFloat(prompt('Qual o valor da conta: '))
let gorjeta = parseFloat(prompt('Digite a porcentagem da gorjeta: '))


gorjeta = (valorConta * gorjeta) / 100
let valorFinal = valorConta + gorjeta

alert('O valor total da conta com gorjeta é: ' + valorFinal.toFixed(2))