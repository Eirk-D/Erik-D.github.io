const EventEmitter=require('events')
class MyEmitter extends EventEmitter{}
const myEmitter = new MyEmitter
myEmitter.on('aaa', (a,b)=>{
    setImmediate(()=> {
        console.log('异步打印')
    })
    console.log('事件触发', a,b,this ,this === myEmitter)
})
myEmitter.emit('aaa', 'a', 'b')
console.log('abs')