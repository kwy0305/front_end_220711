// 함수 : 동작을 미리 작성하고 필요할 때 사용.
// function 함수이름() {실행할 코드...}
// 매개변수 : 함수에 필요한 값을 함수를 실행 할 때 지정하는 변수
// => 함수 내에서 변수처럼 사용 가능
function sum() {
  // 실행 할 코드 작성
  var num1 = 3;
  var num2 = 10;
  var result = num1 + num2;
  console.log(result);
}

sum();

// 매개변수가 있는함수 : () 안에 필요한 개수만큼 ,로 구분하여  매개변수 이름 지정.
// 매개변수를 통해서 실제로 전달되는 값을 인자(argument)라고 함
function divide(a, b) {
  console.log(a / b);
}
divide(10, 2);
divide(100, 5);

// return : 함수의 실행결과로 값을 반환
// => 함수의 실행결과로 return된 값으로 평가

function plus(a, b) {
  // a와 b를 더한 값을 반환
  return a + b;
}
console.log(plus(3, 4));

function sub(a, b) {
  return; // 함수 종료. 뒤에 코드는 실행하지 않는다.
  console.log(a - b);
}

sub(7, 3);
//  JS에서는 여러개의 리턴 허용 x
function square(num) {
  return num, num * num;
}
console.log(square(4));

// 문제 세 숫자의 평균을 구하는 함수 => 함수의 값 출력
function getAverage(a, b, c) {
  var result = (a + b + c) / 3;
  return result;
}
console.log(getAverage(3, 6, 9));

// => 심화 => 함수를 두개로 분리.

function getSum(a, b, c) {
  return a + b + c;
}
function getDivide(num) {
  return num / 3;
}

// 짝수인지 홀수인지 출력하는 함수

function printNumType(num) {
  //   if (num % 2 === 0) {
  //     console.log("짝수");
  //   } else {
  //     console.log("홀수");
  //   }
  // }
  var numType = num % 2 === 0 ? "짝수" : "홀수";
  console.log(numType);
}

printNumType(6);
printNumType(3);

var total = getSum(1, 2, 3); // getSum 함수의 리턴값을 total 변수에 할당
console.log(getDivide(total));

// 기명 함수와 익명 함수
// 기명 함수 : 함수 이름이 있는 함수
// 함수 선언문 : function 키워드와 선언

getMovie(); // 함수 선언문은 함수 호이스팅 발생
function getMovie() {
  console.log("영화 목록 받는 중...");
}

// 익명 함수 : 함수 이름이 없는 함수. => 변수에 담는 형태로 사용
// 함수 표현식 : 변수에 함수를 담는 형태로 작성
// getSongs(); 함수 표현식은 호이스팅 발생 x => 에러 발생
let getSongs = function () {
  console.log("음악 목록 받는 중...");
};
getSongs();

console.log(typeof getMovie, typeof getSongs);

// 화살표 함수 : 화살표를 통해서 간략하게 함수를 정의
// 코드 블록을 생략을 하면 바로 return
// 간략하게 정의되기 때문에 콜백함수로 전달할 때 주로 사용
// 함수 호이스팅 발생 x
// this 바인딩 x => this가 자기자신을 가르키지 않는다. => window
let sumString = (str1, str2) => str1 + str2;
console.log(sumString("안녕하세요 ", "저는 김원영입니다."));
let obj = {
  name: "young",
};

// 콜백함수 : 함수의 인자로 전달된 함수. => JS의 함수는 일급객체라서 가능.

function consoleNum(num) {
  console.log(num);
}

function repeat(n, func) {
  for (let i = 0; i < n; i++) {
    func(i);
  }
}

repeat(5, consoleNum);

// 더하기, 빼기를 화살표 함수로 작성.
// 시작 숫자에 0~n 까지 계산
// (반복 횟수, 시작 숫자, 콜백함수)
// ex) 함수 (5,10,콜백) => 10 + 0 + 1 + 2 + 3 + 4 + 5 = 25

console.log("--------------");
let sumNum = (a, b) => a + b;
function subNum(a, b) {
  return a - b;
}
console.log(subNum(3, 2));

function repeatCal(n, startNum, callback) {
  let result = startNum;
  for (let i = 0; i < n; i++) {
    result = callback(result, i);
  }
  return result;
}
console.log(repeatCal(5, 10, sumNum));
console.log(repeatCal(10, 10, subNum));
