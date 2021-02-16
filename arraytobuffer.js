var arr = [true, true, false];
 
const buf = Buffer.from(arr);
 
for(const byt of buf.values()){
    console.log(byt);
}