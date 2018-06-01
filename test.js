var assert = require('assert');
var CountStream = require('./countstream');
var _countstream = new CountStream('example');

var fs = require('fs');
var passed = 0;

_countstream.on('total', function(count){
    assert.equal(count, 1);
    passed++;
});

fs.createReadStream(__filename).pipe(_countstream);

process.on('exit', function(){
    console.log('Assertion passed:', passed);
});