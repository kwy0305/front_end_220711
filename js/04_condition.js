// if : ()안의 조건식의 값이 true면 코드 블록 실행 => false면 생략.
var num = 1;
if (num > 0) {
  // 조건식이 값이  true이기 때문에 실행
  console.log("양수입니다.");
}

if (num < 0) {
  // 조건식의 값이 false이기 때문에 실행 x
  console.log("음수입니다.");
}

// else : if문의 조건식이 false(해당하지 않는 경우)일 때 실행이 되는 문.
var age = 50;
if (age >= 30 && age < 40) {
  //  age가 30보다 크거나 같고 40보다 작은 경우 실행
  console.log("30대입니다.");
} else {
  // 위의 조건에 해당하지 않는 경우 실행
  console.log("30대가 아닙니다.");
}

// 30대와  20대
// else if : 앞의 if문이 false인 경우 다른 조건식을 비교하여 분기처리

var age02 = 50;
if (age02 >= 30 && age02 < 40) {
  console.log("30대입니다.");
} else if (age02 >= 20 && age02 < 30) {
  console.log(age02 + " : 20대입니다.");
} else if (age02 >= 10 && age02 < 20) {
  console.log(age02 + " : 10대입니다.");
} else {
  console.log("10대도 20대도 30대도 아닙니다.");
}

//문제1.  변수 num02의 값에 따라 짝수 여부에 따라 출력

var num02 = 10;

if (num02 % 2 === 0) {
  console.log(num02 + "은(는) 짝수입니다.");
} else {
  console.log(num02 + "은(는) 홀수입니다.");
}

// 문제2. 변수 num03의 값에 따라 5의 배수이면서 100보다 크면 값을 출력
//103 => 100보다는 크지만 5의 배수는 아니기 때문에 false => 값 출력 x
var num03 = 100;

if (num03 % 5 === 0 && num03 > 100) console.log(num03); // 한줄로 표현 가능시 {} 생략 가능

//문제3. 변수 date의 타입에 따라 데이터 타입 출력
//"seok" => "문자열 데이터입니다.", 3 => "숫자형 데이터입니다."

var data = [1, 2, 3];
var type = typeof data;
if (typeof date === "string") {
  console.log("문자열 데이터입니다.");
} else if (typeof date === "number") {
  console.log("숫자형 데이터입니다.");
} else {
  console.log("문자열도 숫자형도 아닙니다.");
}

// switch : switch문의 값과 case의 값을 비교하여 실행
// break를 하지 않으면 다음 case로 넘어간다.
// 모든 case에 해당하지 않으면 default문 실행
var data = [1, 2, 3];
var type = typeof data;
switch (type) {
  case "string": {
    console.log("문자열입니다.");
    break;
  }

  case "number": {
    console.log("숫자형입니다.");
    break;
  }
  default: {
    console.log("문자도 숫자도 아닙니다.");
  }
}

// score 변수에 0~100점 사이의 점수를 담아서
// 90점 이상 A등급, 80~89 : B등급  70~79 : C등급 , 그 이하 D등급 출력.

var score = 83;
// pareInt() => 실수를 정수로 바꿔준다. 8.9 => 8
// 83 / 10 => 8.3 => parseInt(8.3) =>8
switch (parseInt(score / 10)) {
  case 9: {
    console.log("A등급");
    break;
  }
  case 8: {
    console.log("B등급");
    break;
  }
  case 7: {
    console.log("C등급");
    break;
  }
  default: {
    console.log("D등급");
  }
}

//삼항 조건 연산자 : 조건식 ? true일 때 : false 일 때;
var num02 = -1;
var result = num02 % 2 === 0 ? "짝수" : "홀수";

var result;
if (num02 % 2 === 0) result = "짝수";
else result = "홀수";
console.log(result);

// 삼항 조건 연산자의 중첩
var result02 = num02 > 0 ? (num02 % 2 === 0 ? "짝수" : "홀수") : "음수입니다.";
console.log(result02);

// ||(or) , && (and) 를 통한 단축 평가
// 앞의 값이 truthy 한 값일 경우 앞의 값이 할당.
// 앞의 값이 falsy 한 값이면 뒤의 값이 할당.
var result03 = false || "거짓";
console.log(result03);

// && : 앞의 조건이 false일 경우 뒤의 조건을 확인 할 필요 x
// => false 반환
// 앞의 조건이 true 면 뒤의 값에 따라 true일지 false일지 달라짐
//  => 뒤에 값을 할당
var result04 = true && "거짓";
console.log(result04);

// 단축 평가 예시
var num04 = -1;
var numType = num04 > 0 ? "양수" : "음수";
numType = num04 > 0 && "양수"; // 나중에 배울 리액트에서 사용
console.log(numType);
