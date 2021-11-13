export let color = 'red'
export function sum(n1, n2){
    return n1 + n2;
}
setInterval(() => {
    if(color == 'red') {color = 'green' }else color = 'red'
}, 1000);
function multiply(n2){
    let sum = 0
    setInterval(() => {
        sum = sum + n2
    }, 1000);
    return sum;
}
export { multiply }