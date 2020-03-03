var rpc = require('json-rpc2');
var client = rpc.Client.$create(8000,'localhost');

var input = process.argv.slice(2,process.argv.length);
console.log('Input :' + input);
var j ;
var value = [];
 for(j = 0 ; j < input.length ;j++){
    var temp = parseInt(input[j]);
     value.push(temp);
 }

client.call('modulo',value,
function(err, result) {
    console.log(value[0] + '%' + value[1] + '=' + result);
    }
);

client.call('finenum',value,
function(err, result) {
    console.log(value[0]*value[1] + ' is = ' + result);
    }
);
