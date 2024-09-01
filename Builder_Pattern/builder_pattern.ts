// Product: House
class House {
    public walls?: number;
    public doors?: number;
    public windows?: number;
    public roof?: boolean;
    public garage?: boolean;
    public swimmingPool?: boolean;

    public describe(): void {
        console.log(`House with: 
        Walls: ${this.walls}, 
        Doors: ${this.doors}, 
        Windows: ${this.windows}, 
        Roof: ${this.roof}, 
        Garage: ${this.garage}, 
        Swimming Pool: ${this.swimmingPool}`);
    }
}

// Builder Interface: HouseBuilder
interface HouseBuilder {
    reset(): void;
    setWalls(walls: number): this;
    setDoors(doors: number): this;
    setWindows(windows: number): this;
    setRoof(roof: boolean): this;
    setGarage(garage: boolean): this;
    setSwimmingPool(swimmingPool: boolean): this;
    getResult(): House;
}

// Concrete Builder: ConcreteHouseBuilder
class ConcreteHouseBuilder implements HouseBuilder {
    private house: House;

    constructor() {
        this.house = new House();
    }

    public reset(): void {
        this.house = new House();
    }

    public setWalls(walls: number): this {
        this.house.walls = walls;
        return this;
    }

    public setDoors(doors: number): this {
        this.house.doors = doors;
        return this;
    }

    public setWindows(windows: number): this {
        this.house.windows = windows;
        return this;
    }

    public setRoof(roof: boolean): this {
        this.house.roof = roof;
        return this;
    }

    public setGarage(garage: boolean): this {
        this.house.garage = garage;
        return this;
    }

    public setSwimmingPool(swimmingPool: boolean): this {
        this.house.swimmingPool = swimmingPool;
        return this;
    }

    public getResult(): House {
        return this.house;
    }
}

// Optional Director: Director
class Director {
    private builder: HouseBuilder;

    constructor(builder: HouseBuilder) {
        this.builder = builder;
    }

    public constructSimpleHouse(): void {
        this.builder.reset();
        this.builder.setWalls(4).setDoors(1).setWindows(4).setRoof(true);
    }

    public constructLuxuryHouse(): void {
        this.builder.reset();
        this.builder.setWalls(10).setDoors(5).setWindows(8).setRoof(true).setGarage(true).setSwimmingPool(true);
    }
}

// Client Code
const builder = new ConcreteHouseBuilder();
const director = new Director(builder);

// Build a simple house
director.constructSimpleHouse();
let house = builder.getResult();
house.describe(); 
// Output: House with: 
// Walls: 4, 
// Doors: 1, 
// Windows: 4, 
// Roof: true, 
// Garage: undefined, 
// Swimming Pool: undefined

// Build a luxury house
director.constructLuxuryHouse();
house = builder.getResult();
house.describe();
// Output: House with: 
// Walls: 10, 
// Doors: 5, 
// Windows: 8, 
// Roof: true, 
// Garage: true, 
// Swimming Pool: true

// You can also customize the house without the director
builder.reset();
house = builder.setWalls(6).setDoors(3).setWindows(6).setRoof(true).setGarage(true).getResult();
house.describe();
// Output: House with: 
// Walls: 6, 
// Doors: 3, 
// Windows: 6, 
// Roof: true, 
// Garage: true, 
// Swimming Pool: undefined







// House Class: Represents the product being built. It has several optional properties like walls, doors, windows, etc.,
//              and a method to describe the house.
// HouseBuilder Interface: Declares the methods required to build different parts of the house. It allows 
//             for method chaining by returning this from each method.
// ConcreteHouseBuilder Class: Implements the HouseBuilder interface and provides concrete implementations of 
//                     the methods. It maintains the current state of the House object being built.
// Director Class: (Optional) Directs the building process by calling the builder's methods in a specific 
//                 sequence. It is useful when you need to create predefined configurations of the product.
// Client Code: Demonstrates how to use the builder and director to create 
//              different configurations of the House object.
