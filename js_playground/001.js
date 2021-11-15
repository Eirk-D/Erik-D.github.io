const str = 'hi, 🤣';
const reg1 = /\p{Emoji}/gu
console.log(reg1.exec(str))