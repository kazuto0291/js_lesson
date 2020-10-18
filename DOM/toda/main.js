// const elements = document.getElementsByClassName('hello')
// elements[0].innerText = 'Guten Morgen!';
// elements[1].innerText = 'ni Hao';


// const p = document.createElement('p');

// p.innerText = 'こんにちは';
// p.setAttribute('class', 'hello');
// p.setAttribute('id', 'konnihiha');


// document.getElementById('banner-message').appendChild(p)

document.getElementById("button").addEventListener('click', function(){
  const element = document.getElementById("banner-message")
  const classList= element.classList
  if(classList.contains("alt")) {
    classList.remove("alt")
  }else {
    classList.add("alt")
  }
})
