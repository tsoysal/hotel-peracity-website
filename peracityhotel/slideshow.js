var i = 0;
var images = [];
var time = 2000;

images[0] = './assets/slider1.jpeg';
images[1] = './assets/slider2.jpeg';
images[2] = './assets/slider3.jpeg';
images[3] = './assets/slider4.jpeg';
images[4] = './assets/slider5.jpeg';
images[5] = './assets/slider6.jpeg';
images[6] = './assets/slider7.jpeg';
images[7] = './assets/slider8.jpeg';
images[8] = './assets/slider9.jpeg';
images[9] = './assets/slider10.jpeg';
images[10] = './assets/slider11.jpeg';
images[11] = './assets/slider12.jpeg';
images[12] = './assets/slider13.jpeg';
images[13] = './assets/slider14.jpeg';
images[14] = './assets/slider15.jpeg';
images[15] = './assets/slider16.jpeg';
images[16] = './assets/slider17.jpg';
images[17] = './assets/slider18.jpg';
images[18] = './assets/slider19.jpeg';
images[19] = './assets/slider20.jpeg';
images[20] = './assets/slider21.jpeg';
images[21] = './assets/slider22.jpeg';
images[22] = './assets/slider23.jpeg';
images[23] = './assets/slider24.jpeg';
images[24] = './assets/slider25.jpeg';
images[25] = './assets/slider26.jpg';
images[26] = './assets/slider27.jpg';
images[27] = './assets/slider28.jpg';
images[28] = './assets/slider29.jpg';
images[29] = './assets/slider30.jpg';
images[30] = './assets/slider31.jpg';
images[31] = './assets/slider32.jpg';
images[32] = './assets/slider33.jpg';
images[33] = './assets/slider34.jpg';
images[34] = './assets/slider35.jpg';
images[35] = './assets/slider36.jpg';
images[36] = './assets/slider37.jpg';
images[37] = './assets/slider38.jpg';
images[38] = './assets/slider39.jpg';

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
