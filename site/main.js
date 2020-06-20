const image = document.querySelector('img.imgSlider');
const decription = document.querySelector('.motto h1');
const showMore = document.querySelector('.showMore');
const menu = document.querySelector('.menu');
const imgGallery = document.querySelector('.imgGallery');
const arrowLeft = document.querySelector('.arrow.left');
const arrowRight = document.querySelector('.arrow.right');
const leftGalleryPanel = document.querySelector('.galleryWrap');
const rightGalleryPanel = document.querySelector('.aboutUs');
const menuBurg = document.querySelector('.burgerIcon');
const menuCross = document.querySelector('.crossIcon');
const nav = document.querySelector('.navContent');
const icons = document.querySelector('.icons');

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

let active = 0;
const imagesGallery = ["img/imgGallery1.jpg", "img/imgGallery2.jpg", "img/imgGallery3.jpg", "img/imgGallery4.jpg", "img/imgGallery5.jpg", "img/imgGallery6.jpg"];


const changeSlide = () => {
    active++;
    if (active == imagesGallery.length) {
        active = 0;
    }
    imgGallery.src = imagesGallery[active];
}

let indexInterval = setInterval(changeSlide, timeChange);

const clickEventGalleryRight = () => {
    clearInterval(indexInterval);
    active++;
    if (active == imagesGallery.length) {
        active = 0;
    }
    imgGallery.src = imagesGallery[active];
    indexInterval = setInterval(changeSlide, timeChange);
}
const clickEventGalleryLeft = () => {
    clearInterval(indexInterval);
    active--;
    if (active < 0) {
        active = imagesGallery.length - 1;
    }
    imgGallery.src = imagesGallery[active];
    indexInterval = setInterval(changeSlide, timeChange);
}

arrowLeft.addEventListener('click', clickEventGalleryLeft);
arrowRight.addEventListener('click', clickEventGalleryRight);

const showGalleryPanels = () => {
    const windowHeight = $(window).height();
    const scrollValue = $(document).scrollTop();
    const $leftPanel = leftGalleryPanel;
    const $rightPanel = rightGalleryPanel;
    const leftFromTop = leftGalleryPanel.offsetTop;
    const leftHeight = leftGalleryPanel.offsetHeight;

    if (scrollValue > leftFromTop + leftHeight - windowHeight / 2) {
        leftGalleryPanel.classList.add('active');
        rightGalleryPanel.classList.add('active');
    }
    if (scrollValue < 100) {
        leftGalleryPanel.classList.remove('active');
        rightGalleryPanel.classList.remove('active');
    }
}
$(document).on('scroll', showGalleryPanels);

function switchNav() {
    menuBurg.classList.toggle('active');
    menuBurg.classList.toggle('disable');
    menuCross.classList.toggle('active');
    menuCross.classList.toggle('disable');
    nav.classList.toggle('active');
    nav.classList.toggle('disable');
}

icons.addEventListener('click', switchNav);

