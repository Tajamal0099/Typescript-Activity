var Car = /** @class */ (function () {
    function Car(make, model, year) {
        this.make = make;
        this.model = model;
        this.year = year;
    }
    Car.prototype.displayDetails = function () {
        console.log("Car Details: ".concat(this.make, " ").concat(this.model, ", Year: ").concat(this.year));
    };
    return Car;
}());
var myCar = new Car("Toyota", "Corolla", 2022);
myCar.displayDetails();
