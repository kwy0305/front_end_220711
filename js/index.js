let btnSide = document.querySelector(".btnSide");
let gnb = document.querySelector("#gnb");
btnSide.addEventListener("click", function () {
  gnb.classList.add("on");
});
gnb.addEventListener("click", function (event) {
  // event.target : 이벤트가 실제로 발생한 타겟
  // event.currentTarget : 이벤트 리스너가 등록된 타겟
  if (event.target === event.currentTarget) {
    gnb.classList.remove("on");
  }
});

// 슬라이더 구현

let slideWrapper = document.querySelector(".slideContainer ul");
let slideList = document.querySelectorAll(".slideContainer .slide");
let pagination = document.querySelector(".pagination");
slideWrapper.style.width = 100 * slideList.length + "vw";

let buttonStr = "";

slideList.forEach(function (_, idx) {
  // innerHTML 할당 전에 문자열로 저장
  buttonStr += `<button>${idx + 1}</button>`;
});

// 길게 나열된 문자열을 innerHTML에 한번만 할당
pagination.innerHTML = buttonStr;

let btnSlideList = document.querySelectorAll(".pagination button");

btnSlideList.forEach(function (btn, idx) {
  btn.addEventListener("click", function () {
    slideWrapper.style.transform = `translate(${-100 * idx}vw)`; // 템플릿 리터럴
  });
});

// 각 버튼을 눌렀을 때 알맞게 이동 => 슬라이드가 몇개던간에 작동

// html에 슬라이더 몇개가 작성되던
// 1. 부모의 너비값 계산 적용
// 2. 슬라이더 추가 시 버튼도 추가

// 회색 영역 클릭시 사라지게

// 타입스크립트 => 데이터 타입을 지정

let modalBg = document.querySelector(".modalBg");
let modal = modalBg.querySelector(".modal");
let btnClose = modalBg.querySelector(".btnClose");

btnClose.addEventListener("click", function () {
  modalBg.classList.add("hide");
});

// 창의 크기가 조절될 때 실행
window.addEventListener("resize", function () {
  if (this.innerWidth > 768) {
    gnb.classList.remove("on");
  }
});

let slideContainer = document.querySelector(".slideContainer");

let isDrag = false;
let start = 0;
let moveX = 0;
let middleX = slideContainer.clientWidth / 2;
let middleY = slideContainer.clientHeight / 2;
let slideIndex = 0;
slideContainer.addEventListener("mousedown", function (e) {
  isDrag = true;
  start = e.clientX;
});

slideContainer.addEventListener("mouseup", function () {
  isDrag = false;
  slideWrapper.classList.remove("drag");
  if (moveX < -100) {
    if (slideIndex === slideList.length - 1) {
      slideWrapper.style.transform = `translate(${slideIndex * -100}vw)`;
    } else {
      slideIndex++;
      slideWrapper.style.transform = `translate(${slideIndex * -100}vw)`;
    }
  } else if (moveX > 100) {
    if (slideIndex === 0) {
      slideWrapper.style.transform = `translate(0)`;
    } else {
      slideIndex--;
      slideWrapper.style.transform = `translate(${slideIndex * -100}vw)`;
    }
  } else {
    slideWrapper.style.transform = `translate(${slideIndex * -100}vw)`;
  }
});

slideContainer.addEventListener("mouseleave", function () {
  isDrag = false;
  slideWrapper.classList.remove("drag");
  slideWrapper.style.transform = `translate(${slideIndex * -100}vw)`;
});

slideContainer.addEventListener("mousemove", function (e) {
  if (isDrag) {
    let { clientX } = e;
    moveX = clientX - start;
    console.log(slideIndex);
    slideWrapper.classList.add("drag");
    slideWrapper.style.transform = `translate(${
      moveX + slideIndex * -slideContainer.clientWidth
    }px)`;
  }
});
