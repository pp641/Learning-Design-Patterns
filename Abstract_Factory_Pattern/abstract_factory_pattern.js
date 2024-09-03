// Concrete Notification Classes for Mobile
var MobileEmailNotification = /** @class */ (function () {
    function MobileEmailNotification() {
    }
    MobileEmailNotification.prototype.notify = function (message) {
        console.log("Mobile Email Notification: ".concat(message));
    };
    return MobileEmailNotification;
}());
var MobileSMSNotification = /** @class */ (function () {
    function MobileSMSNotification() {
    }
    MobileSMSNotification.prototype.notify = function (message) {
        console.log("Mobile SMS Notification: ".concat(message));
    };
    return MobileSMSNotification;
}());
// Concrete Notification Classes for Web
var WebEmailNotification = /** @class */ (function () {
    function WebEmailNotification() {
    }
    WebEmailNotification.prototype.notify = function (message) {
        console.log("Web Email Notification: ".concat(message));
    };
    return WebEmailNotification;
}());
var WebSMSNotification = /** @class */ (function () {
    function WebSMSNotification() {
    }
    WebSMSNotification.prototype.notify = function (message) {
        console.log("Web SMS Notification: ".concat(message));
    };
    return WebSMSNotification;
}());
// Concrete Factories for Mobile and Web
var MobileNotificationFactory = /** @class */ (function () {
    function MobileNotificationFactory() {
    }
    MobileNotificationFactory.prototype.createNotification = function (type) {
        if (type === "email") {
            return new MobileEmailNotification();
        }
        else if (type === "sms") {
            return new MobileSMSNotification();
        }
        else {
            throw new Error("Unknown notification type for Mobile");
        }
    };
    return MobileNotificationFactory;
}());
var WebNotificationFactory = /** @class */ (function () {
    function WebNotificationFactory() {
    }
    WebNotificationFactory.prototype.createNotification = function (type) {
        if (type === "email") {
            return new WebEmailNotification();
        }
        else if (type === "sms") {
            return new WebSMSNotification();
        }
        else {
            throw new Error("Unknown notification type for Web");
        }
    };
    return WebNotificationFactory;
}());
// Client code for Abstract Factory Pattern
function getNotificationFactory(environment) {
    if (environment === "mobile") {
        return new MobileNotificationFactory();
    }
    else if (environment === "web") {
        return new WebNotificationFactory();
    }
    else {
        throw new Error("Unknown environment");
    }
}
// Usage example
var environment = "web"; // Change to "mobile" for testing mobile notifications
var factory = getNotificationFactory(environment);
var notificationType = "email"; // Change to "sms" for testing SMS notification
var notification = factory.createNotification(notificationType);
notification.notify("This is an abstract factory pattern example.");
// Output: Web Email Notification: This is an abstract factory pattern example.
