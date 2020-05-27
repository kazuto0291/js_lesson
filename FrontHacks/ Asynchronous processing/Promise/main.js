const taskA = new Promise((resolve) => {
  setTimeout(() => {
    const article = "外注記事A";
    console.log(`${article}を作りました。taskA完了`);
    resolve(article);
  }, 1000)
});

const taskB =(article) => {
  console.log(`${article}を更新します。taskB完了。`);
};

const taskC = (article) => {
  console.log(`${article}を添削します。taskC完了。`);
  return article;
};

const taskD = () => {
  console.log(`次の記事のテーマを探す。taskD完了。`);
};

taskA
  .then(taskC)
  .then(taskB);
taskD();