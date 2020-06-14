const colors = [ 'red', 'blue', 'green'];

for (let i = 0; i < colors.length; i++) {
  console.log(colors[i]);
}

colors.forEach(function(color) {
  console.log(color);
})

colors.forEach((color, index) => {
  console.log(`${index + 1}:${color}`)
})