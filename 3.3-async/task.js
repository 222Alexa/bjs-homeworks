'use strict';
class AlarmClock {
    constructor() {
        this.alarmCollection = [];
        this.timerId = null;
    }
    addClock(time, callback, id) {
        if (!id) {
            throw new Error('error text');// id не передан, выброс ошибки
        }
        if (this.alarmCollection.some((item) => item.id === id)) {
            return console.error('Будильник уже существует'); //id совпадает с существующим в коллекции
        }
        this.alarmCollection.push({
            id,
            time,
            callback
        });// добавление уникального будильника в коллекцию
    }
    removeClock(id) {
        let findId = this.alarmCollection.filter((item) => item.id == id); // поиск в коллекции совпадений с id
        if (findId) {
            this.alarmCollection.splice(findId, 1);
            return true; //нашел - удали
        }
        return false;
    }
    getCurrentFormattedTime() {
        return new Date().toTimeString().slice(0, 5);
    }
    start() {
        const checkTime = this.getCurrentFormattedTime();

        function checkClock(clock) {
            const newTime = checkTime();
            if (newTime === clock.time) {
                clock.callback(); // вызов коллбека при совпадении текущего времени с временем звонка
            }
        }
        if (this.timerId === null) {
            this.timerId = setInterval(() => {
                this.alarmCollection.forEach(item => this.checkClock(item)) // перебирает коллекцию и для каждого будильника вызывает checkClock, который вызывает callback, и сохраняет результат в текущем таймере id
            }, 60000)
        }
    }
    stop() {
        if (this.timerId) {
            clearInterval(this.timerId);
            this.timerId = null; // нашел существующий id - останови и удали
        }
    }
    printAlarms() {
        this.alarmCollection.forEach(item => console.log(`Будильник ${item.id} сработает в ${item.time}`));
    }
    clearAlarms() {
        clearInterval(this.timerId);
        this.alarmCollection.splice(0, this.alarmCollection.length);// очистить все, массив оставить тот же
    }
}
const ticTac = new AlarmClock();

function testCase() {
    ticTac.addClock("09:00", () => console.log('Подьем!'), 1);
    ticTac.addClock("09:01", () => {
        console.log('Второй подъем!');
        ticTac.removeClock(2)
    }, 2);
    ticTac.addClock("09:02", () => console.log('Пора умываться!'));
    ticTac.addClock("09:03", () => {
        console.log('Вставай, а то проспишь!');
        ticTac.clearAlarms();
        ticTac.printAlarms();
    }, 3);
    ticTac.addClock("09:04", () => console.log('Вставай, а то проспишь!'), 1);
    ticTac.printAlarms();
    ticTac.start();
}
