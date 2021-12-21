const typeArray = new Int8Array(8)
typeArray[0] = 32
// console.log('typeArray :>> ', typeArray);
const buf1 = Buffer.alloc(10)
console.log('buf1 :>> ', buf1);
const buf2 = Buffer.from([1,2,3])
console.log('buf2 :>> ', buf2);
const safebuf = Buffer.alloc(10, 'waylau')
let unsafeBuf = Buffer.allocUnsafe(10)
console.log('safebuf :>> ', safebuf.toString());
// 启用0填充 该操作可以清除缓存
// unsafeBuf.fill(0)
console.log('unsafeBuf :>> ', unsafeBuf.toString());
const buf3 = Buffer.allocUnsafe(26)
for(let i = 0;i<26;i++){
    buf3[i] =i+97
}
const buf4 = buf3.slice(0,3)
console.log('buf4.toString() :>> ', buf4.toString('ascii',0, buf4.length));

const buf23 = Buffer.allocUnsafe(2)
buf23.writeInt8(2,0)
buf23.writeInt8(4,1)
console.log('buf23 :>> ', buf23.readInt8());