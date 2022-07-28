// window
// 전역 객체 : JS가 가장 먼저 만드는 특수한 객체
// => JS가 실행되는 환경에 따라서 달라짐 => 브라우저에서는 window, Node.js에서는 global
// => 어디에도 속하지 않는 최상위 객체 => 프로토타입상에 가장 위에 있다는 소리 x

console.log(globalThis); // 브라우저 Node.js 상관없이 전역객체를 참조 할 수 있다.

// window에 속해 있는 프로퍼티는 window. 생략가능
global.console.log("찍히나요");

// global.a 에서 wiwndow. 이 생략되었다
a = 0;
global.console.log(a);
global.console.log(global);

// 빌트인 객체 : 전역객체에 포함되어있는 객체.

//  Date 객체 : 날짜와 시간에 대한 프로퍼티와 메서드 제공
//  => 생성자 함수이기 때문에 new 키워드 함께 호출하면 인스턴스 반환

// 날짜 : 1970년 1월 1일 자정부터 밀리초를 기준으로 경과한 시간
let today = new Date(); // 실행한 시점의 날짜
let year = today.getFullYear(); // 연도를 네자리로 반환
let month = today.getMonth(); // 월을 반환(0~11) => 0(1월)부터 시작
let date = today.getDate(); // 일을 반환(1~31)
let day = today.getDay(); // 0(일요일)~6(토요일)로 반환

console.log(year, month, date, day);

// 실행된 나라의 시간
let hours = today.getHours(); // 시간(0~23)을 반환
let minutes = today.getMinutes(); // 분(0~59)을 반환
let seconds = today.getSeconds(); // 초(0~59)를 반환

console.log(hours, minutes, seconds);

// Date.parse() => 문자열을 날짜로 해석
// 생성할 때 문자열로 날짜를 전달해서 특정 날짜를 만들 수 있다.
let yesterday = new Date("2022-7-26 15:00:01");
yesterday.setFullYear(2021);
yesterday.setMonth(6); // 1월 0부터 시작
yesterday.setDate(26);

// 단위 붙여서 출력해보기
console.log(`${year}년 ${month + 1}월 ${date}일`);

let dateStr = today.toLocaleDateString("ko-KR", {
  year: "numeric",
  month: "long",
  day: "numeric",
  // dateStyle: "full",
});
let timeStr = today.toLocaleTimeString("ko-KR", {
  timeStyle: "long",
});
console.log(dateStr, timeStr);

today.setDate(today.getDate() + 10); // 10일 더하기
console.log(today);

// Math : 수학관련 프로퍼티와 메서드 제공

console.log(Math.PI); // 파이값
console.log(Math.sin(Math.PI / 2)); // sin값

let float = 1.53123;
console.log(parseInt(float)); // 실수를 정수로 반환

// 소수점 이하 내림
console.log(Math.floor(float));
// 소수점 이하 올림
console.log(Math.ceil(float));
// 소수점 이하 반올림
console.log(Math.round(float));

//  111 => 120 만들기 1의 자리 올림
console.log(Math.ceil(111 / 10) * 10);

// 115 => 110 만들기 1의 자리 내림
console.log(Math.floor(115 / 10) * 10);
// 소수점 이하 100의 자리만 올림 => 11.11 => 11.2
console.log(Math.ceil(11.11 * 10) / 10);

// 랜덤 : 0~1 사이의 실수를 반환 (실제 랜덤은 아니다)
console.log(Math.random());

console.log(Math.floor(Math.random() * (100 - 1)) + 1);

//  1~45 로또 6개 만들기 함수 (검색찬스)
let arr = [];
let cnt = 0;
for (let i = 0; i < 6; i++) {
  arr[i] = Math.floor(Math.random() * 45) + 1;
  for (let j = 0; j < i; j++) {
    if (arr[i] == arr[j]) {
      i--;
      break;
    }
  }
}
for (let i = 0; i < 5; i++) {
  for (let j = i + 1; j < 6; j++) {
    if (arr[i] > arr[j]) {
      let tmp = arr[i];
      arr[i] = arr[j];
      arr[j] = tmp;
    }
  }
}
let bonus = Math.floor(Math.random() * 45) + 1;
for (let i = 0; i < arr.length; i++) {
  if (bonus == arr[i]) {
    bonus = Math.floor(Math.random() * 45) + 1;
    i = -1;
  }
}
console.log(arr);

//  1~45 로또 6개 만들기 함수
function getLotto() {
  let result = [];
  while (result.length < 6) {
    let randomNum = Math.floor(Math.random() * 45 + 1);
    if (!result.includes(randomNum)) result.push(randomNum);
  }
  return result;
}
console.log(getLotto());

function getLotto02() {
  let lottoNumArr = [];
  let result = [];
  for (let i = 0; i <= 45; i++) {
    lottoNumArr.push(i);
  }
  for (let i = 0; i < 6; i++) {
    let randomIndex = Math.floor(Math.random() * lottoNumArr.length + 1);
    result = result.concat(lottoNumArr.splice(randomIndex, 1));
  }
  return result;
}
console.log(getLotto02());
// 중첩된 배열 평탄화 => 새로운 배열 반환
console.log([[1], [2]].flat());
