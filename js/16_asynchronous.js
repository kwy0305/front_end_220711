// 스케줄링 : 일정시간 후 특정 함수를 실행할 수 있는 스케줄을 관리한다.
//   => JS 자체는 동기적인 언어이다. 브라우저가 스케줄링을 도와준다.

// 1. setTimout(콜백함수, 시간(ms))
// 첫번째 인자의 콜백함수를 두번째 인자의 시간이 지난 후에 실행하는 스케줄을 추가
//   => setTimout의 실행결과로 Timeout 반환 => 스케줄 취소할 때 사용
//   => 시간을 0으로 지정해도 최소 4ms이후에 실행
let timeout = setTimeout(function () {
  console.log("실행");
  console.log(timeout);
}, 3000);
// clearTimout(타임아웃id)
// setTimout의 실행결과로 받은 TimeoutId를 입력하면 해당 스케줄이 취소된다.
clearTimeout(timeout);

// 2. setInterval(콜백함수, 시간(ms))
// 첫번째 인자의 콜백함수를 두번째 인자의 시간(ms)마다 반복 실행을 한다(스케줄 반복).
let intervalId = setInterval(function () {
  console.log("2초 경과");
}, 2000);

// clearInterval(인터벌id)
// setInterval의 실행결과로 받은 IntervalId 인자로 전달하면 해당 스케줄이 취소된다.
setTimeout(function () {
  // 10초 뒤에 스케줄 취소
  //   clearInterval(intervalId);
}, 10000);

clearInterval(intervalId);

// 동기 : 실행결과를 기다렸다가 다음 코드를 실행
//  => 코드를 순차적으로 실행
console.log("동기 처리는 이렇게");
console.log("순차적으로 실행이 됩니다.");

// 비동기 : 실행결과를 기다리지 않고 바로 다음 코드를 실행
let data;
// `setTimeout(function () {
//   data = 1;
//   useCallback(getData, data);
// }, 3000);`

// 비동기 처리 - 콜백함수
// 비동기 코드 안에서 원하는 시점에 콜백함수를 호출
//  => 중첩될 수록 가독성이 떨어진다.
function getData(callback) {
  setTimeout(function () {
    // 서버에서 데이터를 받아온다고 가정
    data = 1;
    callback(data);
  }, 3000);
}

getData(function (data) {
  console.log(data);
});

let total = 0;
getData(function (data) {
  total += data * 2;
  console.log(total);
  getData(function (data) {
    total += data * 3;
    console.log(total);
    getData(function () {
      total += data;
      console.log(total);
    });
  });
});

// Promise : Promise 객체를 반환
// 첫번째 인자로 콜백함수(resolve(성공), reject(실패))
//   => resolve(값)가 되면 then(콜백함수(값))
//   => reject(에러)가 되면 catch(콜백함수(에러))가 실행
//   => resolve 혹은 reject 되기전까지 코드가 실행되지 않는다.
let count = 10;
let promise = new Promise(function (resolve, reject) {
  setTimeout(function () {
    count++;
    if (count < 10) {
      resolve(count);
    } else {
      reject("숫자가 너무 큽니다");
    }
  }, 3000);
});

promise
  .then(function (res) {
    console.log("성공");
    console.log(res);
  })
  .catch(function (error) {
    console.log("에러발생!");
    console.log(error);
  });
// 1
function increase(num) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      let result = num + 1;
      if (result > 10) {
        reject(new Error("숫자가 큽니다"));
      }
      console.log("resolve: ", result);
      resolve(result);
    }, 1000);
  });
}

increase(1)
  .then(function (num) {
    return increase(num);
  })
  .then(function (num) {
    return increase(num);
  })
  .then(function (num) {
    console.log(num);
  });

let getMovie = new Promise(function (resolve, reject) {
  let movie = "";
  if (movie !== "") {
    resolve(movie);
  }
  setTimeout;
});

getMovie
  .then(function (res) {
    console.log(res);
  })
  .catch(function (error) {
    console.log(error);
  });

function decrease(num) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      let result = num - 1;
      if (num === 0) {
        reject(new Error("0입니다!"));
      }
      console.log("decrease : ", result);
      resolve(result);
    }, 1000);
  });
}

decrease(5)
  .then(function (res) {
    return decrease(res);
  })
  .then(decrease)
  .then(decrease)
  .then(decrease)
  .then(decrease)
  .catch(function (error) {
    console.log(error);
  });

let song = new Promise(function (resolve, reject) {
  // song.then(콜백함수(여기 전달))
  // resolve가 되지않으면 song.then 실행이 안됨
  setTimeout(function () {
    resolve("ssadsad");
  }, 3000);

  // song.catch(콜백함수(여기 전달))
  reject("error");
});

song
  .then(function (res) {
    console.log(res);
  })
  .catch(function (error) {
    console.log(error);
  });

song.catch(function (error) {
  console.log(error);
});

// async, await

function getSong() {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      resolve("ssd");
    }, 3000);
  });
}

// async
// 함수 앞에 async 키워드를 함께 선언
// async 안에서 await 키워드를 사용하면 Promise가 끝날 때까지 기다려준다.

async function printSong() {
  try {
    let result = await getSong();
    // Promise가 peddning 끝날 때까지 기다린다.
    // Promise가 resolve 값을 반환
    console.log("노래 : ", result);
  } catch (e) {
    console.log(e);
  }
}

// async 함수 내에서 리턴을 하면
// 리턴하는 값을 resolve하는 Promise를 반환
async function getProduct() {
  return 1;
}
console.log(getProduct()); // Promise 1
getProduct().then((res) => console.log(res));

printSong();

// 서버에서 받아올 때 async 쓰면 훨씬 편하다!

// 서버에 영화 요청
//   => 응답전에 참조를 하면 undefined
//   => 응답이 온 후에 실행이 될 수 있게 하는 것 : 비동기 처리
//   => 작성 setTimout => 서버에서 데이터 오는 시간
