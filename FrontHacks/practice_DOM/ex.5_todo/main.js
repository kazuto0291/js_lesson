// グローバル空間に変数や関数をセットしないために即時関数で閉じ込めている
(() => {
  // 入力したTodoタスクの一覧を保持する配列を定義する
  const todos = [];

  // HTMLのID値を使って以下のDOM要素を取得する
  //   - テキストボックス(input[type="text"])
  //   - 追加ボタン(button要素)
  //   - Todoリストを一覧表示するul要素
const textElement = document.getElementById('text');
const ulElement =document.getElementById('todo-list');
const ButtonElement =document.getElementById('button');

// console.log(textElement);
// console.log(ulElement);
// console.log(ButtonElement);

//「追加」ボタンがクリックされたときの処理を実装する
//   - テキストボックスに入力されたテキストをTodoリスト一覧に追加する
//   - テキストボックスの中を空にする

ButtonElement.addEventListener('click', () => {
  const todo = textElement.value;
  textElement.value = '';

  console.log(todo);
  if (todo) {
    todos.push(todo);
    showTodos();
  }
});

// ButtonElement.addEventListener('click', (event) => {
//   console.log(event)
//   const liElement = document.createElement('li');
//   liElement.textContent = textElement.value;
//   ulElement.appendChild(liElement);
//   textElement.value = '';
  
// })

  // 「todos」の中身を一覧表示する
  //    - ul要素にli要素を追加して、li要素内にtodoタスクの内容を表示する
  //    - li要素内に削除ボタンを配置して、削除ボタンをクリックしたら対応するタスクを削除する
const showTodos = () => {
  console.log(todos);
  while (ulElement.firstChild) {
    ulElement.removeChild(ulElement.firstChild);
  }
  todos.forEach((todo, index) => {
    const todoItem = document.createElement('li');
    const taskNumber = index + 1;

    todoItem.textContent = `${taskNumber} : ${todo}`;
    ulElement.appendChild(todoItem);
  })
}




  // Todo情報を表すli要素(showTodo関数で作成される要素)の中にある削除ボタンをクリックしたら実行される。
  //   - todosから対応するtodo情報を削除する
  //   - 引数はindexを受け取る(インデックス番号)
  //   - 削除後はshowTodosを実行して、Todoリストを整理する

  const deleteTodo = (index) => {

  }

})();