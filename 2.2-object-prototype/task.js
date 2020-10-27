//String.prototype.isPalindrome - для задачи №1
'use strict';
String.prototype.isPalindrome = function () {
        /* let len = this.length;
        
        for (let i = 0; i < len; i++) {
            if (this.toUpperCase[i] === this.toUpperCase[len - 1] - i) {
                return true;
            }return false;
            
            }
}/*почему это не работает? (жасмин ругается, то свойство length не определяется, то ожидания не оправдываются.*/
        let origin = this.toUpperCase().replace(/\s+/g, '').split('').join('');
        let reversed = origin.split('').reverse().join('');
        if (origin === reversed) return true;
        return false;
    }
    // код для задачи №2 писать здесь
    // return averageMark
function getAverageMark(marks) {
    let sum = 0;
    let average = [];
    for (let i = 0; i < marks.length; i++) {
        if (marks.length === 0) {
            return 0;
        }
        sum += marks[i];
        average = sum / marks.length;
    }
    return Math.round(average);
}
// код для задачи №3 писать здесь
// return verdict
function checkBirthday(birthday) {
    let now = new Date();
    let diff = Number(new Date(now)) - Number(new Date(birthday));
    let isLeap = (now.getFullYear() - new Date(birthday).getFullYear()) / 4; // количество високосных годов за период
    let age = (diff / (1000 * (365 + (366 - 365) / isLeap) * 24 * 60 * 60));
    if (age < 18) {
        return false;
    }
    return true;
}