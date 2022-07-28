let input = document.querySelector(".inputBox input");
let todoForm = document.querySelector("#todoForm");
let todoList = document.querySelector(".todoList");

todoForm.addEventListener("submit", function (e) {
  // 이벤트의 기본 동작을 막는다.

  e.preventDefault();
  // input 값이 빈 문자열이면 함수 종료
  if (input.value === "") return;
  let todoText = input.value;
  // .todoList 글씨 추가해보기!
  let todoItem = document.createElement("li");
  //   todoItem.innerText = todoText;
  //   let icon = document.createElement("i");
  //   icon.className = "xi-trash";
  //   let iconBox = document.createElement("div");
  //   iconBox.className = "btnDel";
  //   iconBox.appendChild(icon);
  //   todoItem.appendChild(iconBox);

  // innerHTML로 대체해보기
  todoItem.innerHTML = `
        ${todoText} 
        <div class="btnDel">
            <i class="xi-trash"></i>
        </div>
    `;
  todoList.appendChild(todoItem);
  input.value = "";
});

// li 클릭시 회색 및 취소선 처리
let todoItems = todoList.querySelectorAll("li");

// todoItems.forEach((todo) => {
//   todo.addEventListener("click", function () {
//     todo.classList.toggle("done");
//   });
// });

// 이벤트 위임
todoList.addEventListener("click", function (e) {
  console.log(e.target);
  if (e.target.matches(".todoList li")) e.target.classList.toggle("done");
  else if (e.target.matches(".btnDel .xi-trash")) {
    // parentNode => 현재 요소의 부모 요소
    let parentLi = e.target.parentNode.parentNode;
    // 자기 자신을 지운다.
    parentLi.remove();
  }
});

localStorage.setItem("todo", "테스트");
