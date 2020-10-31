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
        if (book._state > 30) {
            this.books.push(book);
            console.log(`Книга ${book.name} добавлена`);
        }
        else console.log(`Книга ${book.name} не может быть добавлена`);
    }
    findBookBy(type, value) {
        for (let i = 0; i < this.books.length; i++) {
            if (this.books[i][type] === value) {
                return this.books[i];
            }
            else return null;
        }
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
    }
    getName() {
        return this.name
    }
    addGrade(grade, subject) {
        if (!this[subject]) {
            this[subject] = [];
        }
        if (grade > 0 && grade < 6) {
            this[subject].push(grade);
        }
        else {
            console.log(`Вы пытались поставить оценку "${grade}" по предмету "${subject}". Допускаются только числа от 1 до 5.\n${this [subject].length}`);
        }
        return this[subject].length;
    }
    getAverageBySubject(subject) {
        if (!(subject in this)) return 0;
        if (!subject) return 0;
        if (this[subject].length === 0) return 0;
        let medianeGrade = this[subject].reduce((a, b) => {
            return a + b;
        }, 0) / this[subject].length;
        return medianeGrade;
    }
    getTotalAverage() {
        let sumGrade = 0;
        let countGrade = 0;
        for (let key in this) {
            this[key] = this.getAverageBySubject(this[key]);
            sumGrade += this[key];
            countGrade++;
            if (typeof key == 'number') {
                return sumGrade / countGrade
            }
        }
        return 0;
    }
}