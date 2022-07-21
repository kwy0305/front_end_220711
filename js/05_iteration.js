// for 문 : 초기값과 조건식 증강식을 통해서 반복문의 종료시점 제어
for (var i = 0; i < 10; i++) {
  console.log(i);
}

// while 문 : 조건식이 true인 경우 코드블록 반복 실행
// => 증강식이 없기 때문에 코드블록 안에서 종료를 시킬 수 있게 제어.
var num = 10;
while (num > 0) {
  if (num < 3) break; // num이 3보다 큰 경우 while문 탈출

  console.log(num + "은 양수입니다.");
  num--;
}

// do ~ while : 최소 한번 실행 후 while문을 실행
do {
  console.log("실행");
} while (num > 10);

let arr = [1, 2, 3, 4, 5, 7, 10, 30, 40, 50];
let count = 0;
while (true) {
  if (count > arr.length) break;
  console.log(count);
  count++;
}

// 구구단 2단 반복문을 통해서 출력 => for문

for (var i = 1; i <= 9; i++) {
  console.log("2 * " + i + "=", 2 * i);
}

// 구구단 2 ~ 9단 출력. => for문 중첩 가능
for (var i = 2; i <= 9; i++) {
  for (var j = 1; j <= 9; j++) {
    console.log("${i} * ${j} = ", i * j);
  }
}

// break : 반복문 탈출
for (let i = 0; i < 5; i++) {
  if (i > 3) break;
  console.log(i);
}

// 0 ~ 10 사이의 2의 배수만 출력
// continue는 코드 블록 실행 생략 => 반복문 종료x 이번 순서만 생략
for (let i = 0; i < 10; i++) {
  if (i % 2 !== 0) continue; // 짝수가 아닌경우 다음 반복으로 건너뜀
  console.log(i);
}
