const url = 'http://127.0.0.1:8088/';

let ROOT;

if(process.env.NODE_ENV === 'development'){
    ROOT = '/api';
}else{
    ROOT = url
}

exports.PROXYROOT = url;
exports.ROOT = ROOT;