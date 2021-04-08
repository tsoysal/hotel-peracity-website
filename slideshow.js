var i = 0;
var images = [];
var time = 2000;

images[0] = './assets/slider1.jpg';
images[1] = './assets/slider2.jpg';
images[2] = './assets/slider3.jpg';
images[3] = './assets/slider4.jpg';
images[4] = './assets/slider5.jpg';
images[5] = './assets/slider6.jpg';
images[6] = './assets/slider7.jpg';
images[7] = './assets/slider8.jpg';
images[8] = './assets/slider9.jpg';
images[9] = './assets/slider10.jpg';
images[10] = './assets/slider11.jpg';
images[11] = './assets/slider12.jpg';

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
