// Abstract Product Interfaces
interface Button {
    paint(): void;
}

interface Checkbox {
    paint(): void;
}

// Concrete Product Implementations for Windows
class WindowsButton implements Button {
    paint(): void {
        console.log("Rendering a button in a Windows style.");
    }
}

class WindowsCheckbox implements Checkbox {
    paint(): void {
        console.log("Rendering a checkbox in a Windows style.");
    }
}

// Concrete Product Implementations for Mac
class MacButton implements Button {
    paint(): void {
        console.log("Rendering a button in a Mac style.");
    }
}

class MacCheckbox implements Checkbox {
    paint(): void {
        console.log("Rendering a checkbox in a Mac style.");
    }
}

// Abstract Factory Interface
interface GUIFactory {
    createButton(): Button;
    createCheckbox(): Checkbox;
}

// Concrete Factory Implementations
class WindowsFactory implements GUIFactory {
    createButton(): Button {
        return new WindowsButton();
    }

    createCheckbox(): Checkbox {
        return new WindowsCheckbox();
    }
}

class MacFactory implements GUIFactory {
    createButton(): Button {
        return new MacButton();
    }

    createCheckbox(): Checkbox {
        return new MacCheckbox();
    }
}

// Client code for Abstract Factory Pattern
function getFactory(osType: string): GUIFactory {
    if (osType === "Windows") {
        return new WindowsFactory();
    } else if (osType === "Mac") {
        return new MacFactory();
    } else {
        throw new Error("Unknown OS type");
    }
}

const osType = "Mac"; // Change to "Windows" for testing Windows factory
const factory = getFactory(osType);

const button = factory.createButton();
const checkbox = factory.createCheckbox();

button.paint(); // Output: Rendering a button in a Mac style.
checkbox.paint(); // Output: Rendering a checkbox in a Mac style.
