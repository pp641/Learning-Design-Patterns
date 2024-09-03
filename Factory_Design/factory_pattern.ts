// Define the Notification type as a function type
type Notifications = {
    notify: (message: string) => void;
};

// Concrete Notification Classes
class EmailNotification implements Notifications {
    notify(message: string): void {
        console.log(`Email Notification: ${message}`);
    }
}

class SMSNotification implements Notifications {
    notify(message: string): void {
        console.log(`SMS Notification: ${message}`);
    }
}

// Notification Factory
class NotificationFactory {
    static createNotification(type: string): Notifications {
        if (type === "email") {
            return new EmailNotification();
        } else if (type === "sms") {
            return new SMSNotification();
        } else {
            throw new Error("Unknown notification type");
        }
    }
}

// Client code for Factory Pattern
const notificationTypes = "email"; // Change to "sms" for testing SMS notification
const notifications = NotificationFactory.createNotification(notificationType);
notifications.notify("This is a factory pattern example.");
// Output: Email Notification: This is a factory pattern example.
