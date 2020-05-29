const fs = require('fs')

fs.mkdir('./apple2', {recursive: true}, (err) => {
  if (err) throw err;
});