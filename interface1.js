var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var mySearch;
// mySearch = function(source: string, subString: string) {
//   let result = source.search(SubString);
//   return result > -1;
// }
// 函数的参数名不需要与接口里定义的名字相匹配
// mySearch = function(src: string, sub: string): boolean {
//   let result = src.search(sub);
//   return result > -1;
// }
// 函数的参数会逐个进行检查，要求对应位置上的参数类型是兼容的。如果不想指定类型。系统会推断出参数类型，因为函数直接赋值给了 SearchFunc 类型变量。函数的返回值类型是通过其返回值推断出来的。如果让这个函数返回数字或字符串，类型检查器会警告返回值类型不匹配
mySearch = function (src, sub) {
    var result = src.search(sub);
    return result > -1;
};
var myArray;
myArray = ['bob', 'fred'];
var myStr = myArray[0];
function createClock(ctor, hour, minute) {
    return new ctor(hour, minute);
}
var DigitalClock = /** @class */ (function () {
    function DigitalClock(h, m) {
    }
    DigitalClock.prototype.tick = function () {
        console.log('beep beep');
    };
    return DigitalClock;
}());
var AnalogClock = /** @class */ (function () {
    function AnalogClock(h, m) {
    }
    AnalogClock.prototype.tick = function () {
        console.log('tick tock');
    };
    return AnalogClock;
}());
var digital = createClock(DigitalClock, 12, 17);
var analog = createClock(AnalogClock, 7, 32);
var Clock = /** @class */ (function () {
    function Clock(h, m) {
    }
    Clock.prototype.tick = function () { };
    return Clock;
}());
// 继承接口
// 和类一样，接口也可以相互继承。
// interface Shape{
//   color: string;
// }
// interface Square extends Shape {
//   sideLength: number;
// }
// let square = <Square>{};
// square.color = 'blue';
// square.sideLength = 10;
// 一个接口可以继承多个接口，创建出多个接口的合成接口
// interface Shape {
//   color: string;
// }
// interface PenStroke {
//   penWidth: number;
// }
// interface Square extends Shape, PenStroke {
//   sideLength: number;
// }
// let square = <Square>{};
// square.color = 'blue';
// square.penWidth = 5.0;
// square.sideLength = 10;
// 混合类型，一个对象可以同时作为函数和对象使用，并带有额外的属性
// interface Counter {
//   (start: number): string;
//   interval: number;
//   reset(): void;
// }
// function getCounter(): Counter {
//   let counter = <Counter>function(start: number): string {
//     return '';
//   }
//   counter.interval = 123;
//   conter.reset = function() {};
//   return counter;
// }
// let c = getCounter();
// c(10);
// 接口继承类
// 当接口继承了一个类类型时，它会继承类的成员但不包括其实现。就好像接口声明了所以类中存在的成员，但并没用提供具体实现一样。接口同样会继承到类的 private 和 protected 成员。这意味着当你创建一个接口继承了一个拥有私有或受保护的成员的类时，这个接口类型只能被这个类或其子类所实现（implement）。
var Control = /** @class */ (function () {
    function Control() {
    }
    return Control;
}());
var Button = /** @class */ (function (_super) {
    __extends(Button, _super);
    function Button() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Button.prototype.select = function () { };
    return Button;
}(Control));
var Textbox = /** @class */ (function (_super) {
    __extends(Textbox, _super);
    function Textbox() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Textbox.prototype.select = function () { };
    return Textbox;
}(Control));
var Image = /** @class */ (function (_super) {
    __extends(Image, _super);
    function Image() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Image.prototype.select = function () { };
    return Image;
}(Control));
