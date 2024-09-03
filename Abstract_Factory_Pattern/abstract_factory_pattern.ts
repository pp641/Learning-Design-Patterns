// Define the CustomNotification type as a function type
interface CustomNotification {
    notify: (message: string) => void;
}

// Abstract Product Interfaces
interface NotificationFactory {
    createNotification(type: string): CustomNotification;
}

// Concrete Notification Classes for Mobile
class MobileEmailNotification implements CustomNotification {
    notify(message: string): void {
        console.log(`Mobile Email Notification: ${message}`);
    }
}

class MobileSMSNotification implements CustomNotification {
    notify(message: string): void {
        console.log(`Mobile SMS Notification: ${message}`);
    }
}

// Concrete Notification Classes for Web
class WebEmailNotification implements CustomNotification {
    notify(message: string): void {
        console.log(`Web Email Notification: ${message}`);
    }
}

class WebSMSNotification implements CustomNotification {
    notify(message: string): void {
        console.log(`Web SMS Notification: ${message}`);
    }
}

// Concrete Factories for Mobile and Web
class MobileNotificationFactory implements NotificationFactory {
    createNotification(type: string): CustomNotification {
        if (type === "email") {
            return new MobileEmailNotification();
        } else if (type === "sms") {
            return new MobileSMSNotification();
        } else {
            throw new Error("Unknown notification type for Mobile");
        }
    }
}

class WebNotificationFactory implements NotificationFactory {
    createNotification(type: string): CustomNotification {
        if (type === "email") {
            return new WebEmailNotification();
        } else if (type === "sms") {
            return new WebSMSNotification();
        } else {
            throw new Error("Unknown notification type for Web");
        }
    }
}

// Client code for Abstract Factory Pattern
function getNotificationFactory(environment: string): NotificationFactory {
    if (environment === "mobile") {
        return new MobileNotificationFactory();
    } else if (environment === "web") {
        return new WebNotificationFactory();
    } else {
        throw new Error("Unknown environment");
    }
}

// Usage example
const environment = "web"; // Change to "mobile" for testing mobile notifications
const factory = getNotificationFactory(environment);

const notificationType = "email"; // Change to "sms" for testing SMS notification
const notification = factory.createNotification(notificationType);
notification.notify("This is an abstract factory pattern example.");
// Output: Web Email Notification: This is an abstract factory pattern example.
