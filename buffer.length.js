const buf = Buffer.alloc(150);
 
const bytesWritten = buf.write('welcome to learn node.js');
 
var len = buf.length
 
console.log(len)