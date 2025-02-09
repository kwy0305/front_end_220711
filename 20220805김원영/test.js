const slide = document.querySelector(".slide");

const prevBtn = document.querySelector(".slide_prev_button");
const nextBtn = document.querySelector(".slide_next_button");

const slideItems = document.querySelectorAll(".slide_item");
const maxSlide = slideItems.length - 1;

let currSlide = 0;

const pagination = document.querySelector(".slide_pagination");

for (let i = 0; i < maxSlide; i++) {
  if (i === 0) pagination.innerHTML += `<li class="active">•</li>`;
  else pagination.innerHTML += `<li>•</li>`;
}

const paginationItems = document.querySelectorAll(".slide_pagination > li");
console.log(paginationItems);

let slideWidth = slide.clientWidth;
nextBtn.addEventListener("click", () => {
  if (currSlide < maxSlide) {
    currSlide++;
    // const offset = slideWidth * (currSlide - 1);
    slideItems.forEach((i) => {
      i.setAttribute("style", `left: ${-100 * currSlide}vw`);
    });
    paginationItems.forEach((i) => i.classList.remove("active"));
    paginationItems[currSlide - 1].classList.add("active");
  }
});

prevBtn.addEventListener("click", () => {
  if (currSlide > 0) {
    currSlide--;
    slideItems.forEach((i) => {
      i.setAttribute("style", `left: ${-100 * currSlide}vw`);
    });
    paginationItems.forEach((i) => i.classList.remove("active"));
    paginationItems[currSlide - 1].classList.add("active");
  }
});

window.addEventListener("resize", function () {
  slideWidth = slide.clientWidth;
  if (this.innerWidth > 768) {
    gnb.classList.remove("on");
  }
});

for (let i = 0; i < maxSlide; i++) {
  paginationItems[i].addEventListener("click", () => {
    currSlide = i + 1;
    const offset = slideWidth * (currSlide - 1);
    slideItems.forEach((i) => {
      i.setAttribute("style", `left: ${-offset}px`);
    });
    paginationItems.forEach((i) => i.classList.remove("active"));
    paginationItems[currSlide - 1].classList.add("active");
  });
}

let sideBtn = document.querySelector(".sideBtn");
let gnb = document.querySelector("#gnb");
sideBtn.addEventListener("click", function () {
  gnb.classList.add("on");
});
gnb.addEventListener("click", function (event) {
  if (event.target === event.currentTarget) {
    gnb.classList.remove("on");
  }
});

let modalBg = document.querySelector(".modalBg");
let modal = modalBg.querySelector(".modal");
let btnClose = modalBg.querySelector(".btnClose");

btnClose.addEventListener("click", function () {
  modalBg.classList.add("hide");
});
