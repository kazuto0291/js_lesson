/**
 * 課題1: Twitterのタイムラインのような配列を作る
 *   - 変数名はtweetsで配列とする
 *   - tweetsの中には複数のオブジェクトがある
 *     - 1個1個のオブジェクトはツイートを表す
 *     - 全部で2個のツイートオブジェクトを作る
 *   - ツイートオブジェクトは以下の情報を持つ
 *     - username : ツイートしたユーザー名(文字列。ユーザー名は自由につけて良い。)
 *     - text : ツイート内容(文字列。ツイート内容は自由に作って良い。)
 *     - replies : ツイートに対する返信が格納された(配列)
 *       - repliesに格納されている1個1個のデータもツイートオブジェクト
 *       - 2個のツイートはそれぞれ2個の返信ツイートを持つ
 *       - 返信ツイートは以下の情報を持つ
 *         - username : 返信ツイートしたユーザー名(文字列。ユーザー名は自由につけて良い)
 *         - text : ツイート内容(文字列。ツイート内容は自由に作って良い。)
 */

const tweets =[
  {
    username: 'ヤマダ',
    text: '楽しかった。',
    replies: [
      {
        username: '友達１',
        text: 'そうだね'
      },
      {
        username: '友達2',
        text: 'また行こうね'
      }
    ]
  },
  {
    username: '伊藤',
    text: 'プログラミング楽しい',
    replies: [
      {
        username: '友達３',
        text: 'たくさん学ぼう',
      },
      {
        username: '友達４',
        text: 'たくさんコードを書こう'
      }
    ]
  },

];



/**
 * 課題2: 課題1で作ったtweetsの内容を全て表示する
 *   - forEachを使ってtweetsの以下の内容を1つずつconsole.logで出力する
 *     - username
 *     - text
 *     - replies
 *       - repliesの内容もforEachを使って全て表示する
 */

tweets.forEach((tweet) => {
  console.log(tweet.username);
  console.log('==========');
  console.log(tweet.text);
  console.log('==========');
  tweet.replies.forEach((reply) => {
    console.log(reply.username);
    console.log('==========');
    console.log(reply.text);
    console.log('==========');
  })
})

tweets.forEach((tweet, index) => {
  console.log(`------ツイート${index}----------`);
  console.log(`ユーザー ; ${tweet.username}`);
  console.log(`テキスト ; ${tweet.text}`);

  tweet.replies.forEach((reply, index) => {
    console.log(`-----返信${index}---------`);
    console.log(`ユーザー： ${reply.username}`);
    console.log(`テキスト： ${reply.text}`);
  });
});
