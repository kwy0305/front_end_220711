// 고차 함수 : 함수를 인자로 받거나 아니면 함수를 반환(return)하는 함수

// 함수를 인자로 받는 고차함수
function repeat(n, callback) {
  for (let i = 0; i < n; i++) {
    callback();
  }
}

// 함수를 리턴하는 고차함수
function makeFunc(a, b) {
  return function () {
    console.log(a, b);
  };
}

let foo = makeFunc(1, 2);
foo();

let numArr = [1, 2, 3, 4, 5, 10];
// numArr 요소를 한번씩 출력하는 함수
for (let i = 0; i < numArr.length; i++) {
  console.log(numArr[i]);
}

// 배열의 고차함수

// 1. forEach() : 각 요소를 인자로 전달받아 콜백 함수를 한번씩 실행(배열의 길이만큼)
//   => 콜백함수의 첫번째 인자로 배열의 각 요소, 두번째 인자로 각 요소의 인덱스값을 전달
//   => forEach(콜백함수(요소, 인덱스))
numArr.forEach(function (n, i) {
  console.log(i + "번째", n);
});

// 짝수를 새로운 배열에 모으기
let resultArr = [];
for (let i = 0; i < numArr.length; i++) {
  if (numArr[i] % 2 === 0) {
    resultArr.push(numArr[i]);
  }
}
console.log(resultArr);

// 2. filter() : 콜백함수의 실행결과가 true(특정 조건에 만족하는)인 요소만 모아서 새로운 배열로 반환
//  => 새로운 배열 반환, 기존 배열은 변경 x
let resultArr02 = numArr.filter(function (num) {
  return num % 2 === 0;
});
console.log(resultArr02);
// 화살표 함수와 같이 사용하면 가독성이 극대화
//  => 화살표 함수는 코드블록 생략시 바로 return
//  => 화살표 함수는 매개변수가 하나면 () 생략 가능
let resultArr03 = numArr.filter((num) => num % 2 === 0);

let strArr = ["asdsadsadsa", "asds", "ddsdadssadsad"];
//문제1. 문자열 3개인 배열에서 글자수가 5개 이상인 문자열만 모아서 반환
//   => 문자열.length => 문자의 개수
let strResult = strArr.filter((str) => str.length >= 5);
console.log(strResult);

let userArr = [
  {
    name: "soek",
    age: 30,
  },
  {
    name: "myengsoo",
    age: 29,
  },
  {
    name: "minsu",
    age: 40,
  },
];
// 나이가 30 이상인 사람만 배열로 반환
let userResult = userArr.filter((user) => user.age >= 30);

let userResult02 = userArr.filter(function (user) {
  return user.age >= 30;
});

console.log(userResult);
console.log(userResult02);

// 영화 장르가 액션인 영화만 반환

// map() : 배열안의 요소들을 가공 => return된 값들을 모아서 새로운 배열을 반환
//  => 기존 배열 변경 x
let numArr02 = [4, 6, 7, 10]; // => [8,12,14,20]
let doubleNumArr = numArr02.map(function (num) {
  let result = num * 2;
  return result;
});
// 화살표 함수 활용
let divideNumArr = numArr02.map((num) => num / 2);
console.log(doubleNumArr);
console.log(divideNumArr);

// userArr user의 이름만 모아서 배열로 만들기
let userNameArr = userArr.map(function (user) {
  return user.name;
});
let userNameArr02 = userArr.map((user) => user.name);
console.log(userNameArr);
console.log(userNameArr02);

// 심화 문제 userArr에서 나이 30 이상인 사람의 이름만 배열로 반환
//   => 배열 고차함수 섞어서 사용
let users = userArr.filter(function (user) {
  return user.age >= 30;
});
let names = users.map(function (user) {
  return user.name;
});
console.log(names);

// 메서드 체이닝 => 메서드를 연속해서 사용
let names02 = userArr.filter((user) => user.age >= 30).map((user) => user.name);

console.log(names02);
let addedNum = [1, 2, 3].map((num) => num + 1);
console.log(addedNum);

let movieList = [
  {
    title: "범죄도시",
    genre: "액션",
  },
  {
    title: "극한직업",
    genre: "코미디",
  },
  {
    title: "범죄도시2",
    genre: "액션",
  },
  {
    title: "러브레터",
    genre: "멜로",
  },
];

// 액션 장르의 영화의 제목만 배열
let actionMovieList = movieList.filter((movie) => movie.genre === "액션");
let actionMovieNameList = actionMovieList.map((movie) => movie.title);
console.log(actionMovieList);
console.log(actionMovieNameList);

// reduce : 누산기
//  특정 연산을 반복 실행한 결과를 누적해서 반환
let scoreList = [90, 80, 70, 70, 60];

let totalScore = 0;
for (let i = 0; i < scoreList.length; i++) {
  totalScore += scoreList[i];
}
console.log(totalScore);

let total = scoreList.reduce(function (acc, curr) {
  return acc + curr;
}, 0);
let totalWithArrow = scoreList.reduce((acc, curr) => acc + curr, 0);

// 콜백
let total03 = scoreList.reduce(sum, 0);

function sum(a, b) {
  return a + b;
}

console.log(total);
console.log(totalWithArrow);
console.log(total03);
