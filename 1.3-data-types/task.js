'use strict';

function calculateTotalMortgage(percent, contribution, amount, date) {
    // код для задачи №1 писать здесь
    // return totalAmount;
    if (isNaN(percent)) {
        return `Параметр 'Процентная ставка' содержит неправильное значение ${percent}.`;
    }
    else if (isNaN(contribution)) {
        return `Параметр 'Первоначальный взнос' содержит неправильное значение ${contribution}.`;
    }
    else if (isNaN(amount)) {
        return `Параметр 'Сумма кредита' содержит неправильное значение ${amount}.`;
    }
    let percentRate = (percent / 100) / 12; // 1/12 процентной ставки
    let period = (date.getFullYear() - new Date().getFullYear()) * 12 + (date.getMonth() - new Date().getMonth()); // количество месяцев
    let currentPay = (amount - contribution) * (percentRate + percentRate / ((Math.pow((1 + percentRate), period)) - 1)); // ежемесячный платеж
    let totalAmount = amount + (currentPay * period - amount);
    return Number(totalAmount.toFixed(2));
}

function getGreeting(name) {
    // код для задачи №2 писать здесь
    // return greeting;
    let greeting = `Привет, мир! Меня зовут ${(name === undefined || name === null || name === '') ? 'Аноним' : name}`;
    return greeting;
    console.log(greeting);
}