// 배열 : 여러 데이터를 순차적으로 나열한 자료 구조.
// 배열에 포함되어 있는 데이터를 요소(element)라고 한다.
// JS의 배열은 다른 자료형의 데이터도 1개의 배열에 포함시킬 수 있다.
// 작성법 : [데이터1, 데이터2...];
let arr = [1, 2, 3, "황보석"];

// 배열의 데이터 참조
// 배열[인덱스]; 의 형태로 참조
console.log(arr[1]);

// 배열의 값 추가
// 배열[인덱스] = 값;을 통해 새로운 값 할당 가능
//   => 기존에 데이터가 있는 인덱스면 재할당(갱신).
arr[4] = "프론트엔드";
console.log(arr);
console.log(arr[arr.length - 1]); // 배열의 마지막을 가르킨다.

// 배열의 값 제거
// delete 키워드를 통해서 삭제가 가능 => 배열의 길이가 바뀌지 않는다. 권장 x
delete arr[2];
console.log(arr, arr.length);

// 배열 관련 메서드
// 배열 맨 마지막에 값 추가, 제거
// push와 pop : 배열의 마지막에 값을 추가, 제거 => 원본 배열을 변화.
let result = arr.push(6, 7, "js"); // 새로 추가 후의 배열의 길이를 반환.
console.log(result, arr); // 8, [1,2,3, "황보석", "프론트엔드", 6,7, "js"]
result = arr.pop(); // 제거된 요소를 반환 => 다른 배열로 이동 시킬 때 사용
console.log(result, arr); // "js", [1,2,3, "황보석", "프론트엔드", 6,7]

// unshift, shift => push, pop과 반대로 배열의 시작에 요소를 추가 및 제거
arr.unshift("추가!", "두번째 추가!");
console.log(arr);
arr.shift();
console.log(arr);
console.log("------------");

// splice : 배열의 중간에 값을 제거 및 추가.
// array.splice(시작인덱스, 삭제할 개수, 추가할 값들...);
let newArr = [1, 20, 30, 4, 5];
let newResult = newArr.splice(1, 2, 2, 3); // 제거한 요소들을 배열로 모아서 반환
console.log(newResult, newArr); // [20,30], [1,2,3,4,5]
newArr.splice(0, 2);
console.log(newArr); // [3,4,5]
newArr.splice(1, 0, 1, 2); // 삭제 개수를 0개로 지정하여 값을 추가만 한다.
console.log(newArr);

// slice : 배열에서 지정한 범위만큼 요소를 복사 => 원본 배열이 변경 x
// slice(시작 인덱스, 끝 인덱스) => 끝 인덱스는 복사 범위 포함 x
//   => 끝 인덱스 -1번재까지만 복사
let dogArr = ["coco", "hppay", "choco", "navi"];
let newDogArr = dogArr.slice(0, -1);
console.log(newDogArr);
console.log("-------------");
// indexOf : 배열에서 인자로 전달 받은 값의 인덱스 반환
//    => 전달받은 인자가 배열 내에 없으면 -1 반환
let brandList = ["nike", "adidas", "puma"];
console.log(brandList.indexOf("puma")); // "puma"의 인덱스 값인 2 출력
console.log(brandList.indexOf("new balance"));
// 배열에 요소가 있는지 확인
if (brandList.indexOf("asics") === -1) console.log("없는 브랜드입니다.");
console.log("---------------");

// includes : 전달받은 인자가 배열 내에 존재하는지 true, false 반환
// 존재 유무만 확인할 때 사용
let companyList = ["apple", "samsung", "lg"];
console.log(companyList.includes("apple"));
if (!companyList.includes("black berry")) console.log("그런 회사 없습니다.");

let fruits = ["apple", "banana", "orange"];
// 문제 1. fruits에 "banana"와 "orange" 사이에 "grape", "peach" 추가
// 배열 함수를 사용만 하면 됨
fruits.splice(2, 0, "grape", "peach");
console.log(fruits);

// 문제 2. fruits의 "banana" 하나를 삭제. 직접 "banana"의 인덱스 값 넣지 않고 삭제
// "banana"라는 값을 가지고 찾아서 삭제.
// 힌트 1. "banana"라는 요소가 몇번째에 있는지 찾는 함수!
let idx = fruits.indexOf("banana");
fruits.splice(idx, 1);
console.log(fruits);

// 문제 3. 어떠한 배열이 와도 배열의 모든 요소를 한번씩 console에 출력해주세요.
// 배열의 개수가 몇개든 한번씩 출력
// 힌트 1. for문과 같이!
for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 20, 100];
// 배열의 짝수만 다시 새로운 배열에 할당.
let resultArr = [];
for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] % 2 === 0) resultArr.push(numbers[i]);
}
console.log(resultArr);

// concat() : 배열 두개를 합쳐서 새로운 배열을 반환
//  => 원본 배열 변경 x
let first = [1, 2, 3, 4];
let second = [5, 6, 7, 8];
let resultList = first.concat(second);
console.log("concat : ", resultList);
