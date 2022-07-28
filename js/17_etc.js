// rest

// js는 정의된 매개변수 보다 전달된 인자가 많아도 오류 발생x
function sum(a, b) {
  return a + b;
}
console.log(sum(10, 20, 30));

// arguments : 받은 인자를 모두 유사배열 형태로 모아놓은 변수
//  => Array.from(유사배열(반복가능)) 유사배열을 배열로 만들어서 리턴
//  => 이 배열을 활용하면 받은 인자(몇개인지 모를)를 모두 활용
function getSum() {
  let argArr = Array.from(arguments);
  let result = argArr.reduce(function (acc, curr) {
    return acc + curr;
  }, 0);
  return result;
}

// rest : 받은 인자를 모두 배열로 모아준다.
//  => 전달될 인자가 몇개인지 모를 때
// 매개변수의 마지막에 써야한다.
// ...짓고싶은 이름 : 여기에 배열로 저장된다.
function getSub(a, ...rest) {
  // 첫번째 인자는 a에 담기고 그 이후의 모든 인자가 rest에 담기게 된다.
  let result = rest.reduce((acc, curr) => acc - curr, 0);
  return result;
}

console.log(getSum(1, 2, 3, 4, 5));
console.log(getSub(1, 2, 3, 4, 5, 6));

// 스프레드 문법
//  배열을 펼친다. [1, 2, 3] => 1, 2, 3
//  [] 안에 넣으면 배열 복사와 동일한 효과 => 앞뒤에 값에 요소를 추가한 것과 같은효과
let numArr = [1, 2, 3, 4, 5]; // => 1, 2, 3, 4, 5
let newArr = [0, ...numArr, 6];
console.log(...newArr);
console.log(1, 2, 3, 4, 5);

console.log(getSub(...numArr));

//  객체 스프레드
//  객체의 프로퍼티를 펼친다. => {} 안에 펼치면 복사한 것과 같은 효과
//  {} 안에 펼친 후에 기존에 있던 프로퍼티를 덮어 씌우면 업데이트 효과
let obj = {
  name: "minseok",
  age: 30,
};

let copy = {
  ...obj,
  age: 29,
};

console.log(obj, copy);

//  비구조화 할당(destructuring)
// 배열 비구조화 할당
//  let [변수1, 변수2] = [값1, 값2] => 작성한 순서대로 변수에 할당
//  함수의 리턴값을 여러개 받을 때 유용하다
let userNameList = ["hyun", "minwoo", "minsu"];
let user01 = userNameList[0];
let user02 = userNameList[1];

let [user03, user04, user05] = userNameList;
console.log(user03, user04, user05);

function getFunc(value) {
  let func = function (value) {
    console.log(value);
  };
  return [value, func];
}

// React에서 자주 보게 될 구조
let [num, userNum] = getFunc(0);
console.log(num, userNum);

// 객체 비구조화 할당
// {키이름1, 키이름2} = {키이름1, 키이름2}
// let {} 안에 변수 이름과 같은 이름의 키를 갖고 있으면 할당
let rect = {
  width: 100,
  height: 100,
  getArea() {
    console.log(this.width * this.height);
  },
};
let { width, getArea } = rect;
console.log(width);

let inputText = document.querySelector("input");
inputText.addEventListener("keydown", function (e) {
  // e.target.value 에 input 입력값이 담긴다.
  // e.target에 있는 value 프로퍼티를 비구조화 할당
  let { value } = e.target;
  console.log(value);

  let textBox = document.createElement("p");
  textBox.innerText = value;
});
