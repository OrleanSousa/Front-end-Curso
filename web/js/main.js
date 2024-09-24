function changeBackgrounndColor() {
    let colors = ['red','green','yellow', 'orange']
    let randomColor = colors[Math.floor([Math.random() * colors.length])]

    document.body.style.backgroundColor = randomColor
}