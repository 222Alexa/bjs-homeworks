function getResult(a, b, c) {
    // код для задачи №1 писать здесь
    // return x;
    'use strict';
    let discriminant = Math.pow(b, 2) - 4 * a * c;
    const result = [];
    if (a === 0 || b === 0 || c === 0) {
        return false
    }
    if (discriminant === 0) {
        result.push(-b / (2 * a).toFixed(2));
    }
    else if (discriminant > 0) {
        result.push(((-b + Math.sqrt(discriminant)) / (2 * a)).toFixed(2));
        result.push(((-b - Math.sqrt(discriminant)) / (2 * a)).toFixed(2));
    }
    return result
}

function getAverageMark(marks) {
    // код для задачи №2 писать здесь
    // return averageMark;
    let total = []
    let mediane = (marks.reduce((a, b) => (a + b), 0)) / marks.length;
    if (marks.length === 0) {
        return 0
    };
    for (let i = 0; i <= marks.length; i++) {
        if (marks.length < 5) {
            total = marks;
        }
        else {
            total = marks.splice(0, 5)
            mediane = (total.reduce((a, b) => (a + b))) / total.length;
        }
        return mediane
    }
}

function askDrink(name, dateOfBirthday) {
    // код для задачи №3 писать здесь
    // return result;
    let today = new Date();
    let year_diff = today.getFullYear() - dateOfBirthday.getFullYear();
    if (year_diff >= 18) {
        return (`Не желаете ли олд-фэшн, ${name}?`)
    }
    else {
        return (`Сожалею, ${name}, но я не могу вам продать алкоголь. Зато могу предложить вам замечательный клюквенный компот!`)
    }
}