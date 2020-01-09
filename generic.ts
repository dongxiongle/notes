// function logging<T>(arg: T) : T {
//   console.log(arg.length);
//   return arg;
// }
// function identity<T>(arg: T): T {
//   return arg;
// }

// let myIdentity: <T>(arg: T) => T = identity;

// function identity<T>(arg: T): T {
//   return arg;
// }

// let myIdentity: {<T>(arg: T): T} = identity;

// interface GenericIdentity<T> {
//   (arg: T): T;
// }

// function identity<T>(arg: T): T {
//   return arg;
// }

// let myIdentity: GenericIdentity<number> = identity;

// console.log(myIdentity(1));

// class GenericNumber<T> {
//   zeroValue: T;
//   add: (x: T, y: T) => T;
// }

// let myGenericNumber = new GenericNumber<number>();

// myGenericNumber.zeroValue = 9;
// myGenericNumber.add = function(x, y) {
//   return x + y;
// }

// interface Lengthwis{
//   length: number;
// }

// function loggongIdentity<T extends Lengthwis>(arg: T): T {
//   console.log(arg.length);
//   console.log(arg);
//   return arg;
// }
// loggongIdentity({length: 10, value: 3, b: 2});

// function getProperty<T, K extends keyof T>(obj: T, key: K) {
//   return obj[key];
// }

// let x = {a: 1, b: 2, c: 3, d: 4};

// getProperty(x, 'a');
// getProperty(x, 'm'); // Argument of type '"m"' is not assignable to parameter of type '"a" | "b" | "c" | "d"'