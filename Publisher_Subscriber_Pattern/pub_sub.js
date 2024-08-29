var Publisher = /** @class */ (function () {
    function Publisher() {
        this.subscribers = [];
    }
    Publisher.prototype.addSubscriber = function (subscriber) {
        this.subscribers.push(subscriber);
    };
    Publisher.prototype.removeSubscriber = function (subscriber) {
        this.subscribers = this.subscribers.filter(function (currentSubscriber) { return currentSubscriber !== subscriber; });
    };
    Publisher.prototype.notifySubscriber = function (message) {
        this.subscribers.forEach(function (subscriber) { return subscriber(message); });
    };
    return Publisher;
}());
;
var publisher = new Publisher();
var SubscriberA = function (message) {
    console.log("Subscriber A has subscribed to message ".concat(message));
};
var SubscriberB = function (message) {
    console.log("Subscriber B has subscribed to message ".concat(message));
};
var SubscriberC = function (message) {
    console.log("Subscriber C has subscribed to message ".concat(message));
};
publisher.addSubscriber(SubscriberA);
publisher.addSubscriber(SubscriberB);
publisher.addSubscriber(SubscriberC);
publisher.notifySubscriber("Hello you're notified  :: ");
publisher.removeSubscriber(SubscriberA);
publisher.notifySubscriber("Hello you're notified again :: ");
