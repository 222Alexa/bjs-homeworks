'use strict';

function parseCount(value) {
    const parsed = Number.parseInt(value);
    if (isNaN(parsed)) throw new Error("Невалидное значение");
    return parsed;
}

function validateCount(value) {
    try {
        return parseCount(value);
    }
    catch (e) {
        return Error('Невалидное значение');
    }
    
}
class Triangle {
    constructor(a, b, c) {
        this.a = a;
        this.b = b;
        this.c = c;
        if ((a + b) < c || (b + c) < a || (c + a) < b) throw new Error("Треугольник с такими сторонами не существует");
    }
    getPerimeter(a, b, c) {
        return (this.a + this.b + this.c);
    }
    getArea() {
        const p = this.getPerimeter() / 2;
        return Number(Math.sqrt(p * (p - this.a) * (p - this.b) * (p - this.c)).toFixed(3));
    }
}

function getTriangle(a, b, c) {
    try {
        return new Triangle(a, b, c);
    }
    catch (e) {
        return {
            getArea:() => 
                `Ошибка! Треугольник не существует`,
            getPerimeter:(a, b, c) => `Ошибка! Треугольник не существует`
            };
        }
    }
