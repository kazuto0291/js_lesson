const axios = require('axios').default;


(async()=> {
// Make a request for a user with a given ID
const response = await axios.get('https://opentdb.com/api.php?amount=10&type=multiple');
const data = response.data;

console.log('クイズデータ', data.results);
  // .then(function (response) {
  //   // handle success
  //   console.log('クイズデータ',response.data.results);
  // })
  // .catch(function (error) {
  //   // handle error
  //   console.log(error);
  // })
  // // .then(function () {
  // //   // always executed
  // // });
})();





