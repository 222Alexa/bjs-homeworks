 'use strict';

 function getResult(a, b, c) {
     // код для задачи №1 писать здесь
     // return x;
     const discriminant = Math.pow(b, 2) - 4 * a * c;
     const result = [];
     if (a === 0 || b === 0 || c === 0) {
         return false;
     }
     if (discriminant === 0) {
         result.push(-b / (2 * a));
     }
     else if (discriminant > 0) {
         result.push(((-b + Math.sqrt(discriminant)) / (2 * a)));
         result.push(((-b - Math.sqrt(discriminant)) / (2 * a)));
     }
     return result;
 }

 function getAverageMark(marks) {
     // код для задачи №2 писать здесь
     // return averageMark;
     let total = [];
     if (marks.length === 0) {
         return 0;
     }
     else {
         let total = marks.splice(0, 5);
         let mediane = (total.reduce((a, b) => (a + b))) / total.length;
         return mediane;
     }
 }

 function askDrink(name, dateOfBirthday) {
     // код для задачи №3 писать здесь
     // return result;
     if (new Date().getFullYear() - dateOfBirthday.getFullYear() >= 18) {
         return (`Не желаете ли олд-фэшн, ${name}?`);
     }
     else {
         return (`Сожалею, ${name}, но я не могу вам продать алкоголь. Зато могу предложить вам замечательный клюквенный компот!`);
     }
 }