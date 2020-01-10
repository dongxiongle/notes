// function extend<First, Second>(first: First, second: Second): First & Second {
//   const result: Partial<First & Second> = {};
//   for (const prop in first) {
//     if (first.hasOwnProperty(prop)) {
//       (<First>result)[prop] = first[prop];
//     }
//   }
//   for (const prop in second) {
//     if (second.hasOwnProperty(prop)) {
//       (<Second>result)[prop] = second[prop];
//     }
//   }
//   return <First & Second>result;
// }

// class Person {
//   constructor(public name: string) {}
// }

// interface Loggable {
//   log(name: string) : void;
// }

// class ConsoleLogger implements Loggable {
//   log(name) {
//     console.log(`Hello, I'm ${name}`);
//   }
// }

// let jim = extend(new Person('Jim'), ConsoleLogger.prototype);
// jim.log(jim.name);
function padLeft(value: string, padding: any) {

  if (typeof padding === 'number') {
    return Array(padding + 1).join(' ') + value;
  }
  if (typeof padding === 'string') {
    return padding + value;
  }
  throw new Error(`Expected string or number, got '${padding}'`);
}

padLeft('Hello, world', 4);