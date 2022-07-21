// 식별자 : 변수나 함수를 식별할 수 있는 이름.
// 스코프 : 식별자가 유효한 범위.

// 전역 스코프 : 어디서든 접근이 가능한 범위
// 전역 변수 :  가장 바깥에 선언된 변수들
let globalNum = 3;
let result = 10;

function sum(a, b) {
  return a + b;
}

function consoleGlobalNum() {
  // 지역 스코프 :코드 블록 내의 범위
  // 지역 변수 : 지역 스코프 내에 선언된 변수들
  let innerNum = 3;
  let result = 20;
  console.log(result);
  console.log(globalNum);
}

function addGlobalNum(num) {
  globalNum = globalNum + num;
}
addGlobalNum(2); // globalNum = 5
addGlobalNum(5); // globalNum = 10
console.log(globalNum);

function outer() {
  let outerNum = 10;
  // console.log(outerNum, innerNum); 하위 스코프의 변수 참조 불가능

  function inner() {
    let innerNum = 1;
    // let outerNum = 1; 같은 이름의 식별자 하위 스코프 부터 참조
    console.log(outerNum, innerNum);
  }
  inner();
}
outer();

// 클로저 : 상위 스코프의 변수를 하위 스코프 참조를 하면
// 상위 스코프(실행환경)가 끝나도 하위 스코프가 변수를 기억.
// 데이터의 은닉화 가능.

// 클로저 함수 예시
function getClosuer() {
  let count = 0;
  //상위 스코프를 참조하는 클로저 함수 반환
  console.log("클로저 반환");
  return function () {
    console.log("count : ", count);
    return count++;
  };
}

let closuer = getClosuer();

closuer(); // getClouser 함수가 끝났지만 getClouser함수의 변수를 계속 참조.
closuer();
closuer();
closuer();

// var , let , const 스코프 차이
// var로 선언한 변수만 호이스팅 => 끌어올린다.
console.log(x);
console.log(number);
var x;
let number;

// var 변수는 재선언 가능. let , const는 재선언 불가능

var x = 1;
// let number; 에러 발생 !! let은 재선언 불가능.

// var는 함수의 코드 블록의 스코프만 지원
// for, if 문의 코드 블록에 선언하면 전역에 선언한 것과 동일

// 함수 코드 블록이 아니기 때문에 전역 변수로 x를 재선언한 것과 동일
for (var x = 0; x < 5; x++) {
  console.log(x);
}
// 함수이기 때문에 코드 블록 안에서만 유효한 변수를 선언한 것과 동일
function consoleX() {
  var x = 1;
  console.log(x);
}
console.log(x);

//const는 상수 => 변하지 않는 수를 의미 => 재할당 불가능
//선언과 동시에 값을 할당 즉 초기화를 해야한다. => 보통 const 대문자로 작성
const TAX_RATIO = 10;
// TAX_RATIO = 20; 상수에는 재할당 불가능
