var Subject = /** @class */ (function () {
    function Subject() {
        this.observers = [];
    }
    Subject.prototype.addObserver = function (observer) {
        this.observers.push(observer);
    };
    Subject.prototype.removeObserver = function (observer) {
        this.observers = this.observers.filter(function (observe) { return observe !== observer; });
    };
    Subject.prototype.notifyObserver = function (message) {
        this.observers.forEach(function (observer) { observer.update(message); });
    };
    return Subject;
}());
;
var ConcreteObserverA = /** @class */ (function () {
    function ConcreteObserverA() {
    }
    ConcreteObserverA.prototype.update = function (message) {
        console.log("ConcreteObsever A : Handling message for A ".concat(message, " "));
    };
    return ConcreteObserverA;
}());
var ConcreteObserverB = /** @class */ (function () {
    function ConcreteObserverB() {
    }
    ConcreteObserverB.prototype.update = function (message) {
        console.log("ConcreteObsever B : Handling message for B ".concat(message, " "));
    };
    return ConcreteObserverB;
}());
var ConcreteObserverC = /** @class */ (function () {
    function ConcreteObserverC() {
    }
    ConcreteObserverC.prototype.update = function (message) {
        console.log("ConcreteObsever C : Handling message for C ".concat(message, " "));
    };
    return ConcreteObserverC;
}());
var subject = new Subject();
var observerA = new ConcreteObserverA();
var observerB = new ConcreteObserverB();
var observerC = new ConcreteObserverC();
subject.addObserver(observerA);
subject.addObserver(observerB);
subject.addObserver(observerC);
subject.notifyObserver("Message notifiy please");
subject.removeObserver(observerB);
subject.notifyObserver("Message notifiy please 2 ");
