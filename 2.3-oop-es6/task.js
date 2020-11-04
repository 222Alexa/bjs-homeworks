'use strict'
class PrintEditionItem {
    constructor(name, releaseDate, pagesCount) {
        this.name = name;
        this.releaseDate = releaseDate;
        this.pagesCount = pagesCount;
        this.state = 100;
        this.type = null;
    }
    fix() {
        this.state *= 1.5;
    }
    set state(state) {
        this._newState = state;
        if (this._newState < 0) {
            this._newState == 0;
        }
        else if (this._newState > 100) {
            this._newState = 100;
        }
    }
    get state() {
        return this._newState;
    }
}
class Magazine extends PrintEditionItem {
    constructor(name, releaseDate, pagesCount) {
        super(name, releaseDate, pagesCount)
        this.type = 'magazine';
    }
}
class Book extends PrintEditionItem {
    constructor(author, name, releaseDate, pagesCount) {
        super(name, releaseDate, pagesCount)
        this.author = author;
        this.type = 'book';
    }
}
class NovelBook extends Book {
    constructor(author, name, releaseDate, pagesCount) {
        super(author, name, releaseDate, pagesCount)
        this.type = 'novel';
    }
}
class FantasticBook extends Book {
    constructor(author, name, releaseDate, pagesCount) {
        super(author, name, releaseDate, pagesCount)
        this.type = 'fantastic';
    }
}
class DetectiveBook extends Book {
    constructor(author, name, releaseDate, pagesCount) {
        super(author, name, releaseDate, pagesCount)
        this.type = 'detective';
    }
}
class Library {
    constructor(name) {
        this.name = name;
        this.books = [];
    }
    addBook(book) {
        if (book.state > 30) {
            this.books.push(book);
            console.log(`Книга ${book.name} добавлена`);
        }
        else console.log(`Книга ${book.name} не может быть добавлена`);
    }
    findBookBy(type, value) {
        if (!type || !value) {
            return null;
        }
        for (let i = 0; i < this.books.length; i++) {
            if (this.books[i][type] === value) {
                return this.books[i];
            }
        }
        return null;
    }
    giveBookByName(bookName) {
        if (!bookName) return null;
        for (let i = 0; i < this.books.length; i++) {
            if (this.books[i].name == bookName) return this.books.splice(i, 1)[0];
        }
        return null;
    }
}
class StudentLog {
    constructor(name) {
        this.name = name;
        this.subjects = {}
    }
    getName() {
        return this.name
    }
    addGrade(grade, subject) {
        if (!this.subjects[subject]) {
            this.subjects[subject] = [];
        }
        if (grade > 0 && grade < 6) {
            this.subjects[subject].push(grade);
        }
        else {
            console.log(`Вы пытались поставить оценку "${grade}" по предмету "${subject}". Допускаются только числа от 1 до 5.\n${this [subject].length}`);
        }
        return this.subjects[subject].length;
    }
    getAverageBySubject(subject) {
        if (!(subject in this.subjects)) return 0;
        if (!subject) return 0;
        if (this.subjects[subject].length === 0) return 0;
        let medianeGrade = this.subjects[subject].reduce((a, b) => {
            return a + b;
        }, 0) / this.subjects[subject].length;
        return medianeGrade;
    }
    getTotalAverage() {
        let totalGrade = 0;
        if (Object.keys(this.subjects).length === 0) {
            return 0
        }
        for (let subject in this.subjects) {
            totalGrade += this.getAverageBySubject(subject);
        }
        return totalGrade / Object.keys(this.subjects).length;
    }
}