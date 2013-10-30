var Wd = require('./index.js');
var client = new Wd({logLevel:'silent'});
client.init();
client.url('http://fiddle.jshell.net/aVP4p/show/', typeSomething);
var input = 'input';
var assert = require('assert');

function typeSomething() {
    process.nextTick(function() {
        client
            .addValue(input, '2', noError)
            .addValue(input, '3', noError)
            .getValue(input, more);
    })
}

function more() {
    process.nextTick(function() {
            client
            .addValue(input, '4')
            .getValue(input, function(err, res) {
                console.log(res)
                assert.equal(res, '234')
            })
    })
}

function noError(err) {
    assert(err === null);
}