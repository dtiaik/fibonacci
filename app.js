'use strict';
// function fib(n) {
//     if (n === 0) {
//         return 0;
//     } else if (n === 1) {
//         return 1;
//     }
//     return fib(n - 1) + fib(n - 2);
// }
// const length = 40;
// for (let i = 0; i <= length; i++) {
//     console.log(fib(i));
// }

const memo = new Map();
memo.set(0, 0);
memo.set(1, 1);
function fib(n) {
    if(memo.has(n)) {
        return memo.get(n);
    }
    //ここでn-1の値をgetすることでその値以下の計算処理をしなくても下記の処理ができる
    const value = fib(n - 1) + fib(n - 2);
    memo.set(n, value);
    return value;
}
const length = 40;
for (let i = 0; i <= length; i++) {
    console.log(fib(i));
}