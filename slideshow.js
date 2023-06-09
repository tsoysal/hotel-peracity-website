var i = 0;
var images = [];
var time = 2000;

for(let i = 0; i < 17; i++){
    images[i] = `./assets/slider${i+1}.jpg`;
}

function changeImg() {
    document.getElementById('active-image').src = images[i];

    if(i < images.length -1) {
        i++;
    }
    else {
        i = 0;
    }
    setTimeout("changeImg()", time);
}

window.onload = changeImg;
