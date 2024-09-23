//let firstName = prompt('Digite o seu primeiro nome: ')
//let greeting = 'Hello'
//let lastName = prompt('Digite o seu sobrenome: ')
//let age = parseInt( prompt('Digite a sua idade: '))

//const ageFixed = 2

//ageFinal = age + ageFixed

//console.log(firstName)
//console.log(lastName)
//console.log(ageFinal )

//document.getElementById("greeting").innerHTML =  greeting + ' ' + firstName;

//let friends = ['orlean','nelson','gabriel','natalia']
//console.log(friends)

//friends[1] = 'Anna'
//friends[4] = 'Maverick'
//friends[4] = 1

//console.log(friends)
//console.log(friends)

//let celsius = 0
//let fahrenheit = 0

//celsius = parseFloat(prompt('Digite a temperatura em Celcius: '))

//fahrenheit =  (celsius * 1.8) + 32

//alert('A temperatura em Fahrenheit é de '+ fahrenheit.toFixed(2))

// let grade = prompt('Digite a nota do aluno:')

// if (grade > 100){
//     alert('Nota invalida')
// }else if (grade >= 90){
//     alert('Aluno nota A')
// }
// else if (grade >= 80){
//     alert('Aluno nota B')
// }
// else if (grade >= 70){
//     alert('Aluno nota C')
// }
// else if (grade >= 60){
//     alert('Aluno nota D')
// }else{
//     alert('Nota F')
// }

let idade =  prompt('qual a sua idade: ')
let titulo = prompt('tem titulo [sim/não]')

if(idade >= 18 && titulo === 'sim'){
    alert('pode votar')
}else if(idade > 18 && titulo === 'não' || titulo === 'nao'){
    alert('precisa de titulo')
}else {
    alert('não pode votar!')
}