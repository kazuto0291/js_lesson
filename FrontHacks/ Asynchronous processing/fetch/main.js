const url = "https://opentdb.com/api.php?amount=10";

fetch(url)
  .then(res => {
    return res.json();
  })
  .then(data => {
    console.log(data);
  })

