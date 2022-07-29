let container = document.querySelector(".container");
let sectionList = document.querySelectorAll("section");

let index = Math.round(scrollY / innerHeight);

let isScrolling = false;
container.addEventListener("wheel", function (e) {
  e.preventDefault();

  if (isScrolling) return;

  isScrolling = true;

  setTimeout(function () {
    isScrolling = false;
  }, 500);

  if (e.deltaY > 0) {
    index < sectionList.length - 1 ? index++ : false;
  } else {
    index > 0 ? index-- : false;
  }
  move();
});

// 버튼 클릭시 스크롤 이동
let btnList = document.querySelectorAll(".btns .btnSec");
btnList.forEach((btn, idx) => {
  btn.addEventListener("click", function () {
    index = idx;
    move();
  });
});

function move() {
  window.scrollTo({ top: window.innerHeight * index, behavior: "smooth" });
  btnList.forEach((btn, idx) => {
    index === idx
      ? btn.classList.add("active")
      : btn.classList.remove("active");
  });
}

window.addEventListener("scroll", function () {
  index = Math.round(scrollY / innerHeight);
  btnList.forEach((btn, idx) => {
    index === idx
      ? btn.classList.add("active")
      : btn.classList.remove("active");
  });
});

window.addEventListener("keyup", function (e) {
  // e.preventDefault();
  // if (e.code === "ArrowDown") {
  //   index++;
  //   move();
  // } else if (e.code === "ArrowUp") {
  //   index--;
  //   move();
  // }
});

move();
