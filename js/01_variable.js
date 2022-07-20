// 변수 메모리에 공간을 확보하고 데이터를 저장한 후 저장된 메모리의 주소.
// => 데이터를 저장하고 꺼내 쓸 수 있는 주머니.
var num = 10;
console.log(num);

// 변수 선언 - 값을 저장할 메모리 공간을 마련하고 메모리에 접근할 수 있는 이름 지정.
// 변수 선언만 하면 undefined가 초기화.
var age;
console.log(age);

//  변수 선언에는 var, let, const(상수) 키워드 사용.
//  변수 선언 키워드 뒤에 변수명을 지정.

var year; // year라는 이름의 변수 선언.
let month; // month라는 이름의 변수 선언.
const DAY = 10; // DAY라는 이름의 상수 선언. // 처음부터 값을 설정해야 함.

// 호이스팅 : JS 선언된 변수 / 함수를 실행전에 읽는다. => var 키워드에만 해당.

console.log(score); // var 키워드 사용 = 호이스팅 발생. => 에러 발생 x.
var score;
//console.log(birthDay); let 키워드 사용 => 호이스팅 발생 x. => 에러 발생 o.
let birthDay;

// 할당 : 선언된 변수(메모리)에 값을 저장.
score = 90; // score 라는 변수에 90이라는 값을 할당(저장).
console.log(score);
score = 100; // score 라는 변수에 100이라는 값을 재할당.

//선언과 할당 동시에 가능 => 초기화.
console.log("firstName : ", firstName); //선언부분만 호이스팅.
var firstName = "seok";

// 참조 : 변수에 저장된 값을 읽는다.
console.log(firstName); // firstName 변수의 값을 참조하여 출력.

// 변수 이름 특수문자 제외 문자 , 숫자, _(언더), $ 사용 가능.
// 변수 이름은 숫자로 시작 할 수 없다. ex) var 01num; => 에러.
// 변수 이름은 대소문자 구분 => firstname 과 FIRSTNAME 은 다른 변수이다.

// first name => firstName: 카멜 케이스.
// first name => first_name : 스네이크 케이스.
// first name => FirstName : 파스칼 케이스 => 클래스 명에 주로 사용.

// 문제1 num1과 num2를 선언하고 각각 20, 30을 할당하여 출력

var num1, num2;

num1 = 20;
num2 = 30;
console.log("문제 1 : ", num1, num2);

// 문제2 num1과 num2를 더한 값을 result 변수에 할당하여 출력

var result = num1 + num2;
console.log("문제 2 : ", result);

// 문제3 num1과 num2를 서로 바꿔서 할당

var temp = num1; // 20을 저장할 임시 공간 변수.
num1 = num2; //30을 num1에 할당.
num2 = temp; // temp에 임시 저장한 20을 num2에 할당.
console.log("문제 3 : ", num1, num2);
