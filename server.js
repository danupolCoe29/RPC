var rpc = require('json-rpc2');
var server = rpc.Server.$create();

function modulo(args, opt,callback){
    callback(null,args[0] % args[1]);
   
}
function finenum(args,opt,callback){
    args[0]*=args[1];
    if (args[0]%2==0)
        callback(null,'Even number');
    else
        callback(null,'odd number');
}

server.expose('modulo', modulo);
server.expose('finenum',finenum);
server.listen(8000, 'localhost');