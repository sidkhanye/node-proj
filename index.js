var CountStream = require('./countstream');
var _countstream = new CountStream('found');
var http = require('http');

http.get('http://localhost', function(res){
    res.pipe(_countstream);
});

_countstream.on('total', function(count){
    console.log('Total matches found:', count);
});


var count  