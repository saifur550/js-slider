const images = [
    'img/img1.jpg',
    'img/img2.jpg',
    'img/img3.jpg',
    'img/img4.jpg',
    'img/img5.jpg',
]



// for(let i =0; i<images.length;i++){
//     console.log(images[i]);
// }

let sliderImg = document.getElementById('sliderImg')
let indexNumber = 0;
setInterval(() => {
   if(indexNumber>=images.length){
    indexNumber = 0
   }
   const imgUrl = images[indexNumber];
   sliderImg.setAttribute('src' , imgUrl)
   indexNumber++
}, 1000);