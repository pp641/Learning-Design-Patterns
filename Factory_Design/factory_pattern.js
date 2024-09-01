// Concrete Notification Classes
var EmailNotification = /** @class */ (function () {
    function EmailNotification() {
    }
    EmailNotification.prototype.notify = function (message) {
        console.log("Email Notification: ".concat(message));
    };
    return EmailNotification;
}());
var SMSNotification = /** @class */ (function () {
    function SMSNotification() {
    }
    SMSNotification.prototype.notify = function (message) {
        console.log("SMS Notification: ".concat(message));
    };
    return SMSNotification;
}());
// Notification Factory
var NotificationFactory = /** @class */ (function () {
    function NotificationFactory() {
    }
    NotificationFactory.createNotification = function (type) {
        if (type === "email") {
            return new EmailNotification();
        }
        else if (type === "sms") {
            return new SMSNotification();
        }
        else {
            throw new Error("Unknown notification type");
        }
    };
    return NotificationFactory;
}());
// Client code for Factory Pattern
var notificationType = "email"; // Change to "sms" for testing SMS notification
var notification = NotificationFactory.createNotification(notificationType);
notification.notify("This is a factory pattern example.");
// Output: Email Notification: This is a factory pattern example.
