const todos = ['掃除', '買い物', '散歩'];

const commands = ['確認', '追加', '削除', '終了'];

let input;

while (input !== commands[3]) {
  input = prompt(`「${commands}」の4つのいずれかを入力してください。`);
  if (input === commands[0]) {
    showTodos();
  } else if(input === commands[1]) {
    createTodo();
  } else if(input === commands[2]) {
    deleteTodo()
  } else if (input === commands[3]) {
    console.log('終了します');
  } else {
    console.log(`「${commands}」以外は入力できません`);
  }
}


function showTodos() {
  console.log('==============');
  console.log('現在持っているタスク一覧');
  console.log('==============');

  if (todos.length > 0) {
    todos.forEach((todo, index) => {
      console.log(`${index} : ${todo}`);
    });
  } else {
    console.log('タスクなし');
  }
}



function createTodo() {
  const addTodo = prompt('タスクを入力してください');
  if (addTodo) {
    todos.push(addTodo);
    alert('新しいいタスクを追加しました。');
    showTodos();
  } else {
    alert('何も入力されていないためスキップします')
  };
}


function deleteTodo() {
  const numberString = prompt('削除するタスクの番号を指定してください');
  const parsedNumber = parseInt(numberString, 10);
  if (isNaN(parsedNumber) || parsedNumber >= todos.length || parsedNumber <0) {
    alert('不正の値のためスキップします');
  } else {
    const deleteTodos = todos.splice(parsedNumber, 1);
    alert(`${deleteTodos[0]}を削除しました。`);
    showTodos();
  }
}

