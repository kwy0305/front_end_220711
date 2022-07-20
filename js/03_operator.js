// 연산자 : 산술, 할당, 비교 등을 통해서 새로운 값 생성.
// 피연산자 : 연산에 사용되는 값.
console.log(5 - 4); // 5에서 4를 빼서 1이라는 새로운 값 생성.
console.log(10 > 4); // 10과 4를 비교해서 true라는 새로운 값 생성.

//산술 연산자 : 피연산자에 산술을 통해서 값 생성.
console.log(5 + 1); // 더하기
console.log(6 - 4); // 빼기
console.log(20 * 20); // 곱하기
console.log(20 / 4); // 나누기 => 몫
console.log(20 % 3); // 나누기 => 나머지
console.log(4 - 2 * 4); // 사칙연산 적용 => 4 - (2 * 4) => -4 반환

// 단항 산술 연산자 : 1개의 피연산자에 산술을 적용하여 값 생성.
// ++ : 피연산자의 값을 1 증가.
// -- : 피연산자의 값을 1 감소.
// + : 값의 변화가 없다.
// - : 양수는 음수로 , 음수는 양수로 반전.
var num = 10;

//후위 연산자 : 다른 연산부터 실행 후 => 단항 산술 연산자 적용.
num++; // 11=>  num = num + 1;
num++; // 12
num--; // 11 => num = num - 1;
num--; // 10
num--; // 9

//전위 연산자 : 단항 산술 연산자부터 실행 후 나머지 연산.
var result;
// num = 9
result = --num + 10;
console.log(num, result);
result = num++ + 5;
console.log(result, num);
result = ++num * 3;
console.log(result, num);

// 할당 연산 : 변수에 값을 할당하는 연산.
var score = 90; // 우항에 있는 90을 좌항의 score 변수에 할당.
score += 10; // score = score + 10; 100
console.log(score);
// 우항의 값을 피연산자로 산술한 값을 할당.
score -= 10; // score = score - 10; 90
score *= 2; // score = score * 2 ; 180
score /= 3; // score = score / 3; 60
score %= 7; // score = score % 7; 4
console.log(score);

// 비교 연산자 : 좌항과 우항을 비교해 참(true) 혹은 거짓(false);
// 동등 연산자 : 좌항과 우항이 일치하는지를 비교
console.log("3 == 1 + 2", 3 == 1 + 2);
console.log("3 == '3'", 3 == "3"); // == 연산자는 암묵적 자료형 변환(형변환)
console.log("0 == ''", 0 == "");
console.log("false == 0 : ", false == 0); // 0은 falsy한 값  => false 는 아니지만 false처럼 취급.

// 일치 연산자 : 좌항과 우항이 일치한지를 비교 => 값과 데이터 타입을 비교.
console.log("3 === 1 + 2 : ", 3 === 1 + 2);
console.log("3 === '3' : ", 3 === "3");
console.log("0 === '' : ", 0 === "");
console.log("false === 0 : ", false === 0);

// 부동등 연산자 : 값이 동등하지 않으면 참 , 동등하면 거짓 => 동등 연산자 값의 반전.
console.log(3 != 2); // 값이 동등하지 않으므로 true

// 불일치 연산자 : 값이 일치하지 않으면 true, 값이 일치하면 false
console.log("3" !== 3);

// 대소 관계 비교 연산자 : 좌항과 우항의 대소 관계를 비교.
var num1 = 4;
var num2 = 10;
console.log(num1 > num2); // 4 > 10 => 성립 x => false
console.log(num1 < num2); // 4 < 10 => 성립 o => true
console.log(num1 >= 4); //  4  >= 4 => 성립 o = true
console.log(num2 <= 10); // 10 <= 10 => 성립 o => true

// 논리 연산자 : 좌항과 우항의 논리값의 조합에 따라 논리값 반환.
// ||(or) : 좌항과 우항 중 하나라도 true => true
// &&(and) : 좌항과 우항 모두 true => true
// !(not) : 부정 => 논리값을 반전 true => false , false => true

console.log(true || false); // or 연산자 좌항이 true => true;
console.log(true && false); // 우항이 false => false
console.log(3 > 1 && 4 < 10); // 좌항 우항 모두 true => true;
console.log(!(2 == "2") && true == 1); // 좌항이 false => false
console.log(!(false || false)); // 드모르간 법칙 (not A) && (not B) => 둘다 false면 false
console.log(!(false && false)); // 드로므간 법칙 (not A) || (not B) => 둘다 트루면 false
console.log(!(1 > 10 || 2 > 3));
console.log(!(1 > 10 || 2 > 3));

// 문자열 연결 연산자 : 좌항과 우항의 문자열을 연결 => 템플릿 리터럴을 사용 권장
let str = "안녕하세요" + "김원 영입니다.";

let age = 28;
let address = "서울";
console.log("저는" + age + "세입니다. 저는 " + address + "에 살고 있습니다.");

console.log(`저는 ${age} 세입니다. 저는 ${address}에 살고 있습니다.`); // 템플릿 리터럴
console.log("www.naver.com/" + address);
console.log(str);

// 현재 연도와 내 생년도 변수에 담아서 나이 구하기(한국식)
const today = new Date(2022, 7, 20);
const birthDate = new Date(1995, 3, 5);

console.log(
  today.getFullYear(2022, 7, 20) - birthDate.getFullYear(1995, 3, 5) + 1
);
// 산술 할당 연산자 사용해서 숫자 10에 + 2 * 2 /4 구하기
console.log(10 + (2 * 2) / 4);

// "황보석" 과 30의 데이터 타입을 비교 => 값 비교 X
console.log(typeof 황보석 === 30);
