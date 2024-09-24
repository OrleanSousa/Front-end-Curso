
let lista2 = ['maça', 'pera','uva','melancia','manga']

let numberList = document.getElementById('listaNumeros')

for( i = 0 ; i < lista2.length ; i++ ){
   let listItem =  document.createElement('li')
   listItem.appendChild(document.createTextNode(lista2[i]))
//    listItem.textContent = 'Item ' + i
   numberList.appendChild(listItem)
}




