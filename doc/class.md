# 类
## 继承
基于类的程序设计中一种最基本的模式是允许使用继承来扩展现有的类

```ts
class Animal {
  move(distanceInMeters: number = 0) {
    console.log(`Animal move ${distanceInMeters}`);
  }
}
class Dog extends Animal {
  bark() {
    console.log('woof');
  }
}

const dog = new Dog();

```
类从基类中继承了属性和方法。**Dog** 是一个派生类，派生自 **Animal** 基类，通过 **extends** 关键字

```ts
class Animal {
  name: string;
  constructor(theName: string) {
    this.name = theName;
  }
  move(distanceInMeters: number = 0) {
    console.log(`${this.name} moved ${distanceInMeters}`);
  }
}

class Snake extends Animal {
  constructor(name: string) {
    super(name);
  }
  move(distanceInMeters = 5) {
    console.log('xx');
    super.move(distanceInMeters);
  }
}

class Horse extends Animal {
  constructor(name: string) {
    super(name);
  }
  move(distanceInMeters = 45) {
    console.log('hehe');
    super(distanceInMeters);
  }
}

let sam = new Snake('snake');
let tom: Animal = new Horse('tom');
```
派生类包含了一个构造函数，它必须调用 **super** 它会执行基类的构造函数。而且在构造函数里访问 **this** 的属性之前，一定要调用 **super()**.

## 公共，私有与受保护得修饰符

### 默认为 public
在ts里，成员默认为 **public**

```ts
class Animal {
  public name: string;
  public constructor(theName: string) {
    this.name = theName;
  }
  public move(distanceInMeters: number) {
    console.log('xxx');
  }
}
```

### 理解 private

当成员被标记成 **private** 时，它就不能在声明它得类得外部访问

```ts
class Animal {
  private name: string;
  constructor(theName: string) {
    this.name = theName;
  }
}
new Animal('cat').name; // 错误: name 是私有的
```

当我们比较两种不同的类型时，并不在乎它们从何而来，如果所有成员的类型都是兼容的，我们就认为他们的类型时兼容的
当我们比较带有 **private** 或 **protected** 成员的类型的时候，情况就不同了。如果其中一个类型里包含一个 **private** 成员，那么只有当另外一个类型中也讯在这样一个 **private** 成员，并且他们都是来自同一处声明时，我们才认为这两个类型是兼容的。对于 **protected** 成员也使用这个规则。

```ts
class Animal {
  private name: string;
  constructor(theName: string){
    this.name = theName;
  }
}
class Rhino extends Animal {
  constructor() {
    super('Rhino');
  }
}
class Employee {
  private name: string;
  constructor(theName: string) {
    this.name = theName;
  }
}

let animal = new Animal('x');
let rhino = new Rhino();
let employee = new Employee('y');

animal = rhino;
animal = employee; // Type 'Employee' is not assignable to type 'Animal'
```

### 理解 protected
**protected** 修饰符与 **private** 修饰符的行为很相似，但有一点不同， **protected** 成员在派生类中仍然可以访问。

```ts
class Person {
  protected name: string;
  constructor(name: string) {
    this.name = name;
  }
}
class Employee extends Person {
  private department: string;
  constructor(name: string, departmane: stirng) {
    super(name);
    this.department = department;
  }
  public getElevatorPitch() {
    return `Hello, my name is ${this.name} and I work in ${this.department}`;
  }
}
let howard = new Employee('H', 's');
console.log(howard.getElevatorPitch());
console.log(howard.name); // Property 'name' is protected and only accessible within class 'Person' and its subclassed
```

构造函数也可以被标记成 **protected** 这意味着这个类不能在包含它的类外被实例化

```ts
class Person {
  protected name: string;
  protected constructor(theName: string) {
    this.name = name;
  }
}

class Employee extends Person {
  private department: string;
  constructor(name: string, department: string) {
    super(name);
    this.department = departmen;
  }
  public getElevatorPitch() {
    return 'hehe'
  }
}
let howard = new Employee('h', 's');
let john = new Person('j'); // Constructor of class 'Person' is protected and only accessible within the class declaration
```

### readonly 修饰符

可以使用 **readonly** 关键字将属性设置为只读的。只读属性必须在声明时或构造函数里被初始化

```ts
class Octopus {
  readonly name: string;
  readonly numberIfLegs: number = 8;
  constructor(name: string) {
    this.name = name;
  }
}
let dad = new Octopus('Main');
dad.name = 'hehe'; // Cannot assign to 'name' because it is a read-only property
```

## 参数属性

参数属性可以方便地让我们在一个地方定义并初始化一个成员

```ts
class Animal {
  constructor(private name: string) {}
  move(distanceInMeters: number) {
    console.log(`${this.name} moved ${distanceInMeters}`);
  }
}
let animal = new Animal('a');
animal.move(5); // a moved 5
```

参数属性通过给构造函数参数添加一个访问限定符来声明。使用 **private** 限定一个参数属性会声明并初始化一个私有成员，对于 **public** 和 **protected** 来说也是一样。

## 存取器

ts支持通过 **getters/setters** 来截取对对象成员的访问，它能帮助你有效的控制对对象成员的访问。

```ts
let passcode = 'secret passcode';

class Employee {
  private _fullName: string;
  get fullName() : string {
    return this._fullName;
  }
  set fullName(newName: string) {
    if (passcode && passcode == 'secret passcode') {
      this._fullName = newName;
    } else {
      console.log('Error');
    }
  }
}

let employee = new Employee();
employee.fullName = 'Bob';
if (employee.fullName) {
  console.log(employee.fullName);
}
```

存取器要求将编译器设置为输出 es5 或更高。不支持降级到 es3。其次只带有 **get** 不带有 **set** 的存取器自动被推断为 **readonly** 。

## 静态属性

类不仅有实例成员（那些仅当类被实例化的时候才会被初始化的属性）。我们也可以创建类的静态成员，这些属性存在于类本身上面而不是类的实例上

```ts
class Grid {
  static origin = {
    x: 0,
    y: 0
  };
  calculateDistanceFromOrigin(point: {x: number; y: number}) {
    let xDist = (point.x - Grid.origin.x);
    let yDist = (point.x - Gird.origin.y);
    return Math.sqart(xDist * xDist + yDist * yDist) / this.scale;
  }
  constructor(public scale: number){}
}

let grid1 = new Gird(1.0);
let grid2 = new Gird(5.0);

console.log(grid1.calculateDistnceFromOrigin({x: 10, y: 10}));
console.log(grid2.calculateDistnceFromOrigin({x: 10, y: 10}));
```

## 抽象类
抽象类作为其它派生类的基类使用，一般不会被直接实例化。不同于接口，抽象类可以包含成员的实现细节
**abstract** 关键字是用于定义抽象类和在抽象类内部定义抽象方法。

```ts
abstract class Animal {
  abstract makeSound(): void;
  move(): void {
    console.log('move');
  }
}
```
抽象类中的抽象方法不包含具体实现并且必须在派生类中实现。
抽象方法的语法于接口类似。两者都是定义方法签名但不包含方法体
抽象方法必须包含 **abstract** 关键字并且可以包含访问修饰符。

```ts
abstract class Department {
  constructor(public name: string){}
  printName(): void {
    console.log(`department name: ${this.name}`);
  }
  abstract printMeeting(): void;
}

class Account extends Department {
  constructor() {
    super('name');
  }
  printMeeting(): void{
    console.log('printMeeting');
  }
  generateReports(): void {
    console.log('generating');
  }
}
let department: Department; // 允许创建一个对象抽象类型的引用
department = new Department(); // Cannot create an instance of an abstract class
department = new Account(); // 允许一个抽象子类进行实例化和赋值
department.printMeeting();
department.printName();
department.generateReports(); // Property 'generateReports' does not exist on type 'Department'
```

## 构造函数

在ts中声明一个类的时候，实际上同时声明了很多东西。首先就是类的示例的类型

```ts
class Greeter {
  greeting: string;
  constructor(message: string) {
    this.greeting = message;
  }
  greet() {
    return `Hello ${this.greeting}`;
  }
}

let greeter: Greeter;
greeter = new Greeter('world');
console.log(greeter.greet());
```

```ts
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
```

创建一个叫做 **greeterMaker** 的变量，这个变量保存了这个类或者说保存了类构造函数，然后我们使用 **typeof Greeter**, 意思是取Greeter类的类型，而不是实例的类型。这个类型包含了类的所有静态成员和构造函数