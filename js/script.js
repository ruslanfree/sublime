



function imgBg() {
  let imageContainer = document.querySelectorAll(".imgBg");
  for (let imageBlock of imageContainer) {
    let image = imageBlock.querySelector("img");
    imageBlock.style.backgroundImage =
      " url(" + image.getAttribute("src") + ")";
  }
}

const anchors = document.querySelectorAll(".header-link");

for (let anchor of anchors) {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    anchor.classList.toggle("linki");

    const blockId = anchor.getAttribute("href");
    console.log(blockId);

    document.querySelector(blockId).scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  });
}
const picture = document.querySelector(".picture a");
picture.addEventListener("click", (e) => {
  e.preventDefault();
  let targetId = picture.getAttribute("href");
  let target = document.querySelector(targetId);
  target.scrollIntoView({
    behavior: "smooth",
    block: "start",
  });
});

const about = document.querySelector(".about");
const featured = document.querySelector(".featured");
const order1 = document.querySelector(".order1");
const order2 = document.querySelector(".order2");
const order3 = document.querySelector(".order3");
const order4 = document.querySelector(".order4");
const order5 = document.querySelector(".order5");
const order6 = document.querySelector(".order6");
const team = document.querySelector(".team");
const services = document.querySelector(".services");
const featuredImages = document.querySelector(".featured__image-block");
let a = 586;

let siteItem = [
  about,
  team,
  featuredImages,
  services,
  featured,
  order1,
  order2,
  order3,
  order4,
  order5,
  order6,
];

document.addEventListener("scroll", function () {
  let pictureBlock = document.querySelector(".picture");
  let pictureOffsetY = window.scrollY - 500;
  let pictureOffsetX = window.innerWidth--;

  picture.style.transform = "rotateZ(" + pictureOffsetY + "deg)";
  pictureBlock.style.transform =
    "translate(" + pictureOffsetX + "px ," + pictureOffsetY + "px )";

  for (let i = 0; i < siteItem.length; i++) {
    if (isElementVisible(siteItem[i])) {
      siteItem[i].classList.add("active");
    } else {
      siteItem[i].classList.remove("active");
    }
  }
});

function isElementVisible(el) {
  let elementSize = el.getBoundingClientRect();
  let top = elementSize.top;
  let bottom = elementSize.bottom;
  let height = elementSize.height;

  return top + height >= 0 && height + window.innerHeight >= bottom;
}

// slider
let slider = document.querySelector(".carousel");
let sliderItems = document.querySelectorAll(".carousel__item");
let imageBlock = document.querySelectorAll(".carousel__image");
let nextBtn = document.querySelector(".nextBtn");
let prevBtn = document.querySelector(".prevBtn");

let counter = 1;
let size = slider.clientWidth;

let lastClone = sliderItems[sliderItems.length - 1];

let firstClone = sliderItems[0];

lastClone.classList.add("last-clone");
firstClone.classList.add("first-clone");
// slider.style.transform = ' translateX('+(-size*counter)+'px) ';

nextBtn.addEventListener("click", () => {
  if (counter >= sliderItems.length - 1) return;
  for (let item of sliderItems) {
    item.style.transform = " translateX(" + -size * counter + "px) ";
    item.style.transition = "transform 0.4s ease";
  }
  counter++;
});
prevBtn.addEventListener("click", () => {
  if (counter <= 0) return;
  for (let item of sliderItems) {
    item.style.transform = " translateX(" + -size * counter + "px) ";
    item.style.transition = "transform 0.4s ease";
  }
  counter--;
});
slider.addEventListener("transitionend", () => {
  if (sliderItems[counter].classList.contains("last-clone")) {
    counter = sliderItems.length - counter;
  }
  if (sliderItems[counter].classList.contains("first-clone")) {
    counter = sliderItems.length - 2;
  }
});
for (let image of imageBlock) {
  image.classList.add("imgBg");
  image.style.height = size / 2 + 59 + "px";
}
imgBg();

let teamImages = document.querySelectorAll(".rotate");

for (let teamImg of teamImages) {
  teamImg.addEventListener("mousemove", function (e) {
    let helfHeight = teamImg.clientHeight / 2;
    console.log(helfHeight)
    let helfWidth = teamImg.clientWidth / 2;
    let height = (e.offsetY - helfHeight)/6;
    let width = (e.offsetX -helfWidth)/ 6;
    teamImg.style.cursor = 'pointer';
    teamImg.style.transition = '0.1s';
    teamImg.style.transformStyle = "preserve-3d";
    teamImg.parentElement.style.perspective = "1000px";
    teamImg.style.transform ="rotatey(" +width+"deg) rotatex(" + -height+
      "deg)";
  });
  teamImg.addEventListener('mouseout',function(){
    this.style.transform = 'rotate(0deg)';
  })
}
let swipeSlider = document.querySelectorAll('.swipe-slider__item');

swipeSlider.forEach(function(slideImg) {
  slideImg.classList.add('imgBg');
  slideImg.style.paddingBottom = ''+slideImg.clientWidth/1.65+'px';
});


 


imgBg();

new Swiper('.slider-swipe', {
  slidesPerView: 1,
  spaceBetween: 50,
  preloadImages: false,
  // Enable lazy loading
  lazy: true,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev'
  },

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
    draggable:true
    
  },
  pagination: {
    el: '.swiper-pagination',
    clickable:true,
    type: 'fraction',
    // type: 'bullets',
    // dynamicBullets: true
  },
  autoplay: {
    delay: 5000,
  },
 
 
})
