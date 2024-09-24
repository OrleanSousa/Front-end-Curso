const images = [
    "img/img1.jpg",
    'img/img2.jpg',
    'img/img3.jpg',
    'img/img4.jpg',
    'img/img5.jpg',
    'img/img6.png',
    'img/img7.jpg',
    'img/img8.jpg',
    'img/img9.jpg',
    'img/img10.jpg',
    'img/img11.jpg',
    'img/img12.jpg'
]

let currentIndex = 0

let imageElement = document.getElementById('image')
let buttonElement = document.getElementById('button')

buttonElement.addEventListener('click', function(){
    currentIndex++
    if(currentIndex >= images.length){
        currentIndex = 0
    }
    imageElement.src = images[currentIndex]
})