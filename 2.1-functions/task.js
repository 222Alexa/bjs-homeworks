'use strict';

function getSolutions(a, b, c) {
    let D = Math.pow(b, 2) - 4 * a * c;
    let x1 = ((-b + Math.sqrt(D)) / (2 * a));
    let x2 = ((-b - Math.sqrt(D)) / (2 * a));
    const solutions = {
        D, roots: []
    };
    if (D > 0) {
        solutions.roots.push(x1, x2);
    }
    else if (D === 0) {
        let x = (-b / (2 * a));
        solutions.roots.push(x);
    }
    return solutions;
}
getSolutions(2, 4, 2);

function showSolutionsMessage(a, b, c) {
    let result = getSolutions(a, b, c);
    console.log(`Вычисляем корни квадратного уравнения ${a}x^2 + ${b}x + ${c}`);
    console.log(`Значение дискриминанта: ${result.d}`);
    if (result.d > 0) {
        console.log(`Уравнение имеет 2 корня: X1 = ${result.roots[0]}, X2 = ${result.roots[1]}`)
    }
    else if (result.d === 0) {
        console.log(`Уравнение имеет 1 корень Х1 = ${result.roots}`);
    }
    else {
        console.log(`Уравнение не имеет вещественных корней`);
    }
}
showSolutionsMessage(2, 4, -3);

function getAverageMark(marks) {
    if (marks.length === 0) return 0;
    let sum = marks.reduce((a, b) => (a + b), 0);
    return sum / marks.length;
}

function getAverageScore(data) {
    if (!data) return 0;
    const newData = {...data
    }
    let sumMarks = 0;
    let countMarks = 0;
    for (let key in newData) {
        newData[key] = getAverageMark(newData[key]);
        sumMarks += newData[key];
        countMarks++;
    }
    sumMarks = sumMarks / countMarks;
    if (countMarks == 0) sumMarks = 0;
    newData.average = sumMarks;
    return newData;
}
const secret = 0;

function getDecodedValue(secret) {
    if (secret === 0) {
        return 'Родриго';
    }
    else if (secret === 1) {
        return 'Эмильо'
    }
}
getDecodedValue(secret);

function getPersonData(secretData) {
    return {
        firstName: getDecodedValue(secretData.aaa)
        , lastName: getDecodedValue(secretData.bbb)
    }
}
getPersonData({
    aaa: 0
    , bbb: 0
});