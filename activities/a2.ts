class Car {
    make: string;
    model: string;
    year: number;

    constructor(make: string, model: string, year: number) {
        this.make = make;
        this.model = model;
        this.year = year;
    }
    displayDetails(): void {
        console.log(`Car Details: ${this.make} ${this.model}, Year: ${this.year}`);
    }
}
const myCar = new Car("Toyota", "Corolla", 2022);
myCar.displayDetails();
