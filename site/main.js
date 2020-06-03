const image = document.querySelector('img.imgSlider');
const decription = document.querySelector('.motto h1');

let activeElement = 0;
const timeChange = 4000;
const images = ["img/img1.jpg", "img/img2.jpg", "img/img3.jpg"];
const descriptions = ["Pierogi naszą pasją", "Lepione z miłością", "Tradycyjne wyroby"];

function changeElement() {
    activeElement++;
    if (activeElement == images.length) {
        activeElement = 0;
    }
    image.src = images[activeElement];
    decription.textContent = descriptions[activeElement];
}
setInterval(changeElement, timeChange);