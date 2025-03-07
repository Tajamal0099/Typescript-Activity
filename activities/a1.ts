interface Person {
    name: string;
    age: number;
    sayHello(): string;
}

class Employee implements Person {
    name: string;
    age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }

    sayHello() {
        return `Hello, my name is ${this.name} and I am ${this.age} years old.`;
    }
}

hello = new Employee("Tajamal", 25);
console.log(hello.sayHello());
