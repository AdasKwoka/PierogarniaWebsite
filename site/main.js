const image = document.querySelector('img.imgSlider');
const decription = document.querySelector('.motto h1');
const showMore = document.querySelector('.showMore');
const menu = document.querySelector('.menu');

let activeElement = 0;
const timeChange = 6000;
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

const buttonDescriptions = ["Pokaż więcej", "Pokaż mniej"];
let counter = 0;
function showElement() {
    menu.classList.toggle('activeMenu');
    showMore.classList.toggle('activeButton');
    counter++;
    if (counter == buttonDescriptions.length) {
        counter = 0;
    }
    showMore.textContent = buttonDescriptions[counter];
}

showMore.addEventListener('click', showElement);
