// Concrete Product Implementations for Windows
var WindowsButton = /** @class */ (function () {
    function WindowsButton() {
    }
    WindowsButton.prototype.paint = function () {
        console.log("Rendering a button in a Windows style.");
    };
    return WindowsButton;
}());
var WindowsCheckbox = /** @class */ (function () {
    function WindowsCheckbox() {
    }
    WindowsCheckbox.prototype.paint = function () {
        console.log("Rendering a checkbox in a Windows style.");
    };
    return WindowsCheckbox;
}());
// Concrete Product Implementations for Mac
var MacButton = /** @class */ (function () {
    function MacButton() {
    }
    MacButton.prototype.paint = function () {
        console.log("Rendering a button in a Mac style.");
    };
    return MacButton;
}());
var MacCheckbox = /** @class */ (function () {
    function MacCheckbox() {
    }
    MacCheckbox.prototype.paint = function () {
        console.log("Rendering a checkbox in a Mac style.");
    };
    return MacCheckbox;
}());
// Concrete Factory Implementations
var WindowsFactory = /** @class */ (function () {
    function WindowsFactory() {
    }
    WindowsFactory.prototype.createButton = function () {
        return new WindowsButton();
    };
    WindowsFactory.prototype.createCheckbox = function () {
        return new WindowsCheckbox();
    };
    return WindowsFactory;
}());
var MacFactory = /** @class */ (function () {
    function MacFactory() {
    }
    MacFactory.prototype.createButton = function () {
        return new MacButton();
    };
    MacFactory.prototype.createCheckbox = function () {
        return new MacCheckbox();
    };
    return MacFactory;
}());
// Client code for Abstract Factory Pattern
function getFactory(osType) {
    if (osType === "Windows") {
        return new WindowsFactory();
    }
    else if (osType === "Mac") {
        return new MacFactory();
    }
    else {
        throw new Error("Unknown OS type");
    }
}
var osType = "Mac"; // Change to "Windows" for testing Windows factory
var factory = getFactory(osType);
var button = factory.createButton();
var checkbox = factory.createCheckbox();
button.paint(); // Output: Rendering a button in a Mac style.
checkbox.paint(); // Output: Rendering a checkbox in a Mac style.
