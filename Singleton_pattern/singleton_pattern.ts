class Singleton {
    private static instance: Singleton;
    private static lock = new Object();

    // Private constructor to prevent direct instantiation.
    private constructor() {}

    // Public static method to provide access to the single instance.
    public static getInstance(): Singleton {
        // First check (no locking) - to avoid unnecessary locking overhead
        if (!Singleton.instance) {
            // Locking mechanism to prevent multiple threads from entering the block simultaneously
            synchronized(Singleton.lock, () => {
                // Second check (after acquiring lock)
                if (!Singleton.instance) {
                    Singleton.instance = new Singleton();
                }
            });
        }
        return Singleton.instance;
    }

    // Example method
    public someMethod(): void {
        console.log("Singleton method called");
    }
}

// Simple synchronized function for TypeScript
function synchronized(lock: any, fn: () => void) {
    lock["_lock"] = lock["_lock"] || Promise.resolve();
    lock["_lock"] = lock["_lock"].then(() => new Promise(resolve => {
        fn();
        resolve();
    }));
}


const class1  = Singleton.getInstance();
const class2 = Singleton.getInstance();

console.log("ok check", class1 === class2)


// When to Use the Singleton Pattern:
// Configuration Management: When you need a central point to manage configuration settings across your application.

// Logging: When a single instance of a logging class is required to write logs consistently across different parts of the application.

// Connection Pools: When managing a pool of database connections, ensuring only one pool exists at any given time.

// Resource Sharing: When certain resources (like a file handle or network connection) should be shared across the application.





// 1. Global State
// Challenge: Singletons maintain global state, which can make it 
//             difficult to track down where and how state changes are happening across an application.
// Impact: Bugs can arise from unintended side effects when the global state is modified 
//         in one part of the application and unexpectedly impacts another part.
// Example: If a Singleton class maintains configuration settings, changing a setting in 
//         one test might affect other tests that are not expecting that configuration.



// Considerations:
// Global State: Singleton pattern introduces global state into your application, which can sometimes lead to 
//                challenges in testing and debugging.
// Thread Safety: In multi-threaded environments, you need to ensure that the Singleton 
//                 implementation is thread-safe, which may require additional mechanisms like locks or 
//                 using async methods for instance creation.