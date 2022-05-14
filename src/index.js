import './index.less'
import image from './assets/image.jpg'

export function MyFunc(user) {
    console.log(`Hi ${user}`)
    return 'success'
}

console.log(MyFunc('Kostya'))

console.log('img --->', image)

// Add image to tag
let img = document.createElement("img");
img.src = image;
let src = document.getElementById("image");
src.appendChild(img);
img.style.width = '700px'
img.style.height = '350px'
