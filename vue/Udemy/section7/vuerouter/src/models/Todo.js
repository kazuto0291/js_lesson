// Todoインスタンスを作成するたびにインクリメントされる
// （id値の重複を避けるため、DBのauto incrementを擬似的に再現）
let nextId = 1;

class Todo {
  /**
   * @param {String} title Todoのタイトル
   * @param {Boolean} completed 完了フラグ（何も入力がない場合はデフォルトでfalseをセット）
   */
  constructor(title, completed = false) {
    this.id = nextId++;
    this.title = title;
    this.completed = completed;
  }

  finished() {
    this.completed = true;
  }

  init() {
    this.completed = false;
  }
}

export default Todo;