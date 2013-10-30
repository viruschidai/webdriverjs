var Wd = require('./index.js');
var client = new Wd();

client
    .init()
    .url('http://127.0.0.1:8080/site/index.html')
    // .title(function() {
    //     console.log(arguments)
    // })
    .addValue('input.searchinput', 'SALUT SA VA')
    .end();