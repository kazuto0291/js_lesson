// 課題1: クイズデータをAPI経由で取得するクラスを作成する
// - クラス名はQuizFetcherクラスとする
// - 次のクラスメソッドを作成する
//   - fetchMultipleQuizData : 4択問題のクイズのみをAPI経由で取得する
//   - fetchTrueOrFalseQuizData : 2択問題のクイズのみをAPI経由で取得する
// - クイズデータ取得に利用するAPI
//   - https://opentdb.com/api.php?amount=10

const API_URL = 'https://opentdb.com/api.php?amount=10';


class QuizFetcher {
  static fetchMultipleQuizData() {
    const url = `${API_URL}&type=multiple`;
    return fetch(url)
      .then(response => {
        return response.json();
      });
  }
  static fetchTrueOrFalseQuizData() {
    const url = `${API_URL}&type=boolean`
    return fetch(url)
      .then(response => {
        return response.json();
      })
  }
}


// 課題2: fetchMultipleQuizDataメソッドを実行してAPIの結果に含まれるresultsプロパティの値をconsole.logで出力する
QuizFetcher
  .fetchMultipleQuizData()
  .then((data) => {
    console.log(data.results)
  })


// 課題3: fetchTrueOrFalseQuizDataメソッドを実行してAPIの結果に含まれるresultsプロパティの値をconsole.logで出力する
QuizFetcher
  .fetchTrueOrFalseQuizData()
  .then((data) => {
    console.log(data.results);
  })