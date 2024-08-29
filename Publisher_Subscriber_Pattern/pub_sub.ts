type Subscriber = (message : string) => void


class Publisher {
    private subscribers : Subscriber[] = []
    public addSubscriber(subscriber : Subscriber) : void {
        this.subscribers.push(subscriber);
    }

    public removeSubscriber(subscriber : Subscriber) : void {
       this.subscribers =  this.subscribers.filter((currentSubscriber) => currentSubscriber !== subscriber );
    }

    public notifySubscriber(message : string) : void {
        this.subscribers.forEach((subscriber) => subscriber(message));   
    }
};

const publisher = new Publisher();

const SubscriberA : Subscriber = (message : string) =>{
    console.log(`Subscriber A has subscribed to message ${message}`)
} 

const SubscriberB : Subscriber = (message : string) =>{
    console.log(`Subscriber B has subscribed to message ${message}`)
} 

const SubscriberC : Subscriber = (message : string) =>{
    console.log(`Subscriber C has subscribed to message ${message}`)
} 

publisher.addSubscriber(SubscriberA);
publisher.addSubscriber(SubscriberB);
publisher.addSubscriber(SubscriberC);
publisher.notifySubscriber("Hello you're notified  :: ");
publisher.removeSubscriber(SubscriberA);
publisher.notifySubscriber("Hello you're notified again :: ");
