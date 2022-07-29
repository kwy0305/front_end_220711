// 비동기 : 서버 데이터 요청, 이미지 로드 => 얼마나 걸릴지 모를 작업
//  => 일단 요청 해놓고 결과를 기다리지 않고 다음 코드 실행
let data;
function render(callback) {
  // data 값 : undefined
  setTimeout(function () {
    console.log("실행");
    data = "서버로 부터 받아온 데이터";
    callback();
  }, 1000);
}
getData(function () {
  document.querySelector(".container").innerHTML = data;
});

// undefined가 출력되는 예시
// setTimeout( () => {}
//  data = "서버로 부터 받아온 데이터";
//  }, 1000);
// console.log(data);
// document.querySelector(".container").innerHTML = data;

// Promise(약속)

let promise = new Promise(function (resolve, reject) {
  //  resolove(1);
  setTimeout(function () {
    data02 = "서버로부터 두번째로 받은 데이터";
  }, 2000);
  // reject("error");
});
promise
  .then(function (data) {
    console.log(data);
    document.querySelector(".container").innerHTML = data;
  })
  .catch(function (error) {
    console.log(error);
  });

function getMovie() {
  return new Promise(function (resolve, reject) {
    setTimeout(() => {
      resolve("외계+인");
    }, 3000);
  });
}

// async 사용법
let renderMovie = async () => {
  let movie = await getMovie();
  // Promise가 resolve 되기 전까지 이후의 코드 실행 x
  document.querySelector(".container").innerHTML = `영화 : ${movie}`;
  // async의 return 값을 resolve 하는 프로미스가 반환된다.
  return 1;
};

renderMovie().then(function (num) {
  console.log(num);
});
