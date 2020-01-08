// class Animal {
//   name: string;
//   constructor(theName: string) {
//     this.name = theName;
//   }
//   move(distanceInMeters: number = 0) {
//     console.log(`${this.name} moved ${distanceInMeters}`);
//   }
// }

// class Snake extends Animal {
//   constructor(name: string){
//     super(name);
//   }
//   move(distanceInMeters = 5) {
//     console.log('slithering...');
//     super.move(distanceInMeters);
//   }
// }

// class Hores extends Animal {
//   constructor(name: string) {
//     super(name);
//   }
//   move(distanceInMeters = 45) {
//     console.log('xxx');
//     super.move(distanceInMeters);
//   }
// }

// let sam = new Snake('Sammy');
// let tom : Animal = new Hores('Tommy');

// sam.move();
// tom.move(34);

// class Animal {
//   private name: string;
//   constructor(theName: string) {
//     this.name = theName;
//   }
// }

// class Rhino extends Animal {
//   constructor() {
//     super('Rhino');
//   }
// }

// class Employee {
//   private name: string;
//   constructor(theName: string) {
//     this.name = theName;
//   }
// }

// let animal = new Animal('Goat');
// let rhino = new Rhino();
// let employee = new Employee('boob');

// animal = rhino;
// animal = employee;

// class Person {
//   protected name: string;
//   constructor(name: string) {
//     this.name = name;
//   }
// }

// class Employee extends Person {
//   private department: string;
//   constructor(name: string, department: string) {
//     super(name);
//     this.department = department;
//   }
//   public getElevatorPitch() {
//     return `Hello, my name is ${this.name} and I work in ${this.department}`;
//   }
// }

// let howard = new Employee('H', 'S');
// console.log(howard.getElevatorPitch());
// console.log(howard.name);

// class Person {
//   protected name: string;
//   protected constructor(theName: string) {
//     this.name = name;
//   }
// }

// class Employee extends Person {
//   private department: string;
//   constructor(name: string, department: string) {
//     super(name);
//     this.department = department;
//   }
//   public getElevatorPlitch() {
//     return `Hi, my name is ${this.name} and I work in ${this.department}`;
//   }
// }

// let howard = new Employee('H', 'S');
// let john = new Person('john');

// class Octopus {
//   readonly name: string;
//   readonly numberOfLegs: number = 8;
//   constructor(name: string) {
//     this.name = name;
//   }
// }
// let dad = new Octopus('Man with the 8 strong legs');
// dad.name = 'Man with the 3-pice suit';
// class Animal {
//   constructor(private name: string) {}
//   move(distanceInMeters: number) {
//     console.log(`${this.name} moved ${distanceInMeters}`);
//   }
// }

// let animal = new Animal('a');
// animal.move(5);

// class Employee {
//   fullName: string;
// }

// let employee = new Employee();
// employee.fullName = 'bob';

// if (employee.fullName) {
//   console.log(employee.fullName);
// }

// let passcode = 'secret passcode';
// class Employee {
//   private _fullName: string;
//   get fullName(): string {
//     return this._fullName;
//   }
//   set fullName(newName: string) {
//     if (passcode && passcode == 'secret passcode') {
//       this._fullName = newName;
//     } else {
//       console.log('Error');
//     }
//   }
// }

// let employee = new Employee();
// employee.fullName = 'bob';
// if (employee.fullName) {
//   console.log(employee.fullName);
// }
// class Grid {
//   static origin = {
//     x: 0,
//     y: 0
//   };
//   calculateDistanceFromOrigin(point: {x: number, y: number}) {
//     let xDist = (point.x - Grid.origin.x);
//     let yDist = (point.y - Grid.origin.y);
//     return Math.sqrt(xDist * xDist + yDist * yDist) / this.scale;
//   }
//   constructor(public scale: number) {}
// }

// let grid1 = new Grid(1.0);
// let grid2 = new Grid(5.0);

// console.log(grid1.calculateDistanceFromOrigin({x: 10, y: 10}));
// console.log(grid2.calculateDistanceFromOrigin({x: 10, y: 10}));

// abstract class Animal {
//   abstract makeSound(): void;
//   move(): void {
//     console.log('move');
//   }
// }
// abstract class Department {
//   constructor(public name: string) {}
//   printName(): void{
//     console.log('Department name:' + this.name);
//   }
//   abstract printMeeting(): void;
// }

// class AccountingDepartment extends Department {
//   constructor() {
//     super('派生类的构造函数中必须调用super');
//   }
//   printMeeting(): void {
//     console.log('printMeeting');
//   }
//   generateReports(): void{
//     console.log('generateReports');
//   }
// }
// abstract class Department {
//   constructor(public name: string) {}
//   printName(): void {
//     console.log(`Department name: ${this.name}`);
//   }
//   abstract printMeeting(): void; // 必须在派生类中实现
// }

// class AccountingDepartment extends Department {
//   constructor() {
//     super('super');
//   }
//   printMeeting() :void {
//     console.log('printMeeting');
//   }
//   generateReports(): void{
//     console.log('generating');
//   }
// }

// let department: Department;
// // department = new Department(); // Cannot create an instance of an abstract class
// department.printName();
// department.printMeeting();
// department.generateReports(); // Property 'generateReports' does not exist on type 'Department'

class Greeter {
  static standardGreeting = 'H';
  greeting: string;
  greet() {
    if (this.greeting) {
      return `Hello, ${this.greeting}`;
    } else {
      return Greeter.standardGreeting;
    }
  }
}

let greeter1: Greeter;
greeter1 = new Greeter();

console.log(greeter1.greet());

let greeterMaker: typeof Greeter = Greeter;
greeterMaker.standardGreeting = "Hey, there";

let greeter2: Greeter = new greeterMaker();
console.log(greeter2.greet());