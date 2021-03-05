const _ = require('lodash') //Nesse import, ele vai produrar dentro de node_modules e la, o arquivo index.js

setInterval(() => console.log(_.random(500,520)), 2000) //Estamos usando a biblioteca _.random, de terceiros