var arr = [0x74, 0x32, 0x91];
 
const buf = Buffer.from(arr);
 
for(const byt of buf.values()){
    console.log(byt);
}
 