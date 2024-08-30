interface Observer {
    update(message : string) : void
}

class Subject {
    private observers : Observer[] = [];

    public addObserver(observer : Observer){
        this.observers.push(observer);
    }
    
    public removeObserver(observer : Observer){
        this.observers = this.observers.filter((observe) => observe !== observer);
    }

    public notifyObserver(message : string ){
        this.observers.forEach((observer)=> { observer.update(message)});
    }
};

class ConcreteObserverA implements Observer {
    public update(message : string){
        console.log(`ConcreteObsever A : Handling message for A ${message} `)
    }
}

class ConcreteObserverB implements Observer {
    public update(message : string){
        console.log(`ConcreteObsever B : Handling message for B ${message} `)
    }
}

class ConcreteObserverC implements Observer {
    public update(message : string){
        console.log(`ConcreteObsever C : Handling message for C ${message} `)
    }
}


const subject = new Subject();

const observerA = new ConcreteObserverA();
const observerB = new ConcreteObserverB();
const observerC = new ConcreteObserverC();

subject.addObserver(observerA);
subject.addObserver(observerB);
subject.addObserver(observerC);
subject.notifyObserver("Message notifiy please");
subject.removeObserver(observerB);
subject.notifyObserver("Message notifiy please 2 ");
