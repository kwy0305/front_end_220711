// jQuery 사용해서 사이드 메뉴 활성화
$(".btnSide").click(function () {
  $("#gnb").addClass("on");
});
// 창크기 변경시 on클래스 제거
$(window).resize(function () {
  $("#gnb").removeClass("on");
});

// 슬라이드 개수만큼 버튼 생성 및 슬라이드 기능 구현
let index = 0;
for (let i = 0; i < $(".slideContainer li").length; i++) {
  let liElem = `<button data-silde-num=${i}>${i + 1}</button>`;
  $(".pagination").append(liElem);
}

$(".slideContainer ul").css(
  "width",
  `${$(".slideContainer li").length * 100}vw`
);

$(".pagination button").click(function () {
  let slideNum = parseInt($(this).attr("data-silde-num"));
  $(".slideContainer ul").css("transform", `translate(-${slideNum * 100}vw)`);
});

$(".modal .btnClose").click(function () {
  // 페이드 아웃 효과 적용
  $(".modalBg").fadeOut();
  // .hide() : display : none;
});

$(window).resize(function () {
  if (window.innerWidth > 768) {
    $("#gnb").css("display", "block");
  } else {
    $("#gnb").css("display", "none");
  }
});

$("#gnb").click(function (e) {
  if (window.innerWidth < 768) {
    // display : none;
    if (e.target === this) {
      $("#gnb").hide();
    }
  }
});

$(".btnSide").click(function () {
  if (window.innerWidth < 768) {
    // display : block;
    $("#gnb").show();
  }
});
