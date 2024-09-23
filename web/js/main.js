let colorList = []

for ( let i = 1; i <= 3; i++){
    let userColor = prompt('digite a cor: ' + i)
    colorList.push(userColor)
    
}

document.getElementById('coresLista').innerHTML = colorList