let input = document.querySelector(".inputBox input");
let todoForm = document.querySelector("#todoForm");
let todoList = document.querySelector(".todoList");

// localStorage에서 저장된 데이터 받아서 읽을 수 있게 해석
let todoArr = JSON.parse(localStorage.getItem("todoList"));

// id값이 일치하지 않는 요소만 filter => filter로 인자로 받은 id을 가진 todo만 삭제
function remove(id) {
  todoArr = todoArr.filter(function (todo) {
    return todo.id !== id;
  });
  render();
}

// id값이 일치하면 todo.done을 반전 => 일치하지 않으면 원래 todo 할당
function toggleTodo(id) {
  todoArr.map((todo) =>
    todo.id === id ? { ...todo, done: !todo.done } : { ...todo }
  );
  render();
}
console.log(todoArr);

todoForm.addEventListener("submit", function (e) {
  // 이벤트의 기본 동작을 막는다.
  e.preventDefault();
  // input 값이 빈 문자열이면 함수 종료
  if (input.value === "") return;

  // 새로운 todo 추가 후 렌더링
  todoArr = [
    ...todoArr,
    { id: todoArr.length + 1, text: input.value, done: false },
  ];
  console.log(todoArr);
  render();
});

function render() {
  // .todoList 비우기
  todoList.innerHTML = "";
  // todoArr 순회하며 문서에 출력
  todoArr.forEach((todo) => {
    console.log(todo);
    // 단축평가 => todo.done 값이 true일 때만 class="done" 적용
    todoList.innerHTML += `
    <li class="${todo.done && "done"}" data-todo-id>${todo.text}
      <div class="btnDel">
      <i class="xi-trash" data-todo-id=${todo.id} weqe="test"></i></div>
    </li>
    `;
  });

  // 출력후 input 태그 비우기
  input.value = "";
  // todoArr json으로 변환 후 localStorage에 저장
  let todoJson = JSON.stringify(todoArr);
  localStorage.setItem("todoList", todoJson);
}

render();

// 이벤트 위임
todoList.addEventListener("click", function (e) {
  if (e.target.matches(".todoList li")) {
    let todoId = parseInt(e.target.dataset.todoId);
    toggleTodo(todoId);
  } else if (e.target.matches(".btnDel .xi-trash")) {
    // 개발자가 임의의 속성값을 넣을 수 있다. => -부분을 지우고 카멜케이스로 변경
    let todoId = parseInt(e.target.dataset.todoId);
    remove(todoId);
  }
});
