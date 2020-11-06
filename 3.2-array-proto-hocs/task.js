'use strict';
// Задание 2
function sleep(milliseconds) {
    let e = new Date().getTime() + milliseconds;
    while (new Date().getTime() <= e) {}
}

function sum(...args) {
    // Замедление на половину секунды.
    sleep(100); // Можно использовать другое значение замедления.
    return args.reduce((sum, arg) => {
        return sum += +arg;
    }, 0);
}

function compareArrays(arr1, arr2) {
    return arr1.length === arr2.length && arr1.every((element, index) => element === arr2[index]);
}

function memorize(fn, limit) {
    const memory = [];
    return function (...args) {
        const findResult = memory.find((item) => compareArrays(item.args, args));
        if (findResult) {
            return findResult.result;
        }
        const result = fn(...args);
        if (memory.length === limit) {
            memory.unshift();
        }
        memory.push({
            args, result
        });
        return result;
    };
}
// Задание 3
const array = [[1, 2, 3], [1, 2], [1, 2, 3], [1, 2], [9, 5, 2, 4]];

function testCase(testFunction, timer) {
    console.time(timer);
    for (let i = 0; i < array.length; i++) {
        array.forEach(item => testFunction(...item));
    }
    console.timeEnd(timer);
}
//console.log(testCase(sum, 'sum'));
// sum: 2526.7021484375 ms
//console.log(testCase(mSum, 'mSum'));
//mSum: 302.6708984375 ms
//без задержки:
//console.log(testCase(sum, 'sum'));
// sum: 2524.97705078125 ms
//console.log(testCase(mSum, 'mSum'));
// mSum: 0.09521484375 ms