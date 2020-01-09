# 泛型

我们需要一种方法使返回值的类型与传入参数的类型是相同的。
我们使用了类型变量，它是一种特殊的变量，只用于表示类型而不是值。

```ts
function identity<T>(arg: T): T {
  return arg;
}
```
我们给identity添加类型变量 **T** 。 **T** 帮助我们捕获用户传入的累心，之后我们就可以使用这个类型，之后我们再次使用了 **T** 当作返回值类型。这允许我们跟踪函数里使用的类型的信息。
我们把这个版本的 **identity** 函数叫做泛型。

## 使用方法

1. 传入所有的参数，包含类型参数

```ts
let output = identity<string>('myString'); // typeof output will be string
```

这里我们明确的指定了 **T** 是 **string** 类型，并做为一个参数传给函数，使用 **<>** 而不是 **()**.

2. 利用了类型推论，即编译器会根据传入的参数自动地帮助我们确定 **T** 的类型：

```ts
let output = identity('myString'); // typeof output will be string
```

注意我们没必要使用尖括号 **<>** 来明确地传入类型；编译器可以查看 **myString** 的值，然后把 **T** 设置为它的类型。
类型推论帮助我们保持代码简洁性和高可读性。
如果编译器不能自动地推断出类型的话，只能像上面那样明确的传入 **T** 的类型

## 使用泛型变量
使用泛型创建像 **identity** 这样的泛型函数时，编译器要求你在函数体必须正确的使用这个通用的类型。换句话说，必须把这些参数当做是任意或所有类型。

如果我们想同时打印出 **arg** 的长度，可能会这样做：

```ts
function logging<T>(arg: T): T {
  console.log(arg.length); // Property 'length' does not exist on type 'T'.
  return arg;
}
```

## 泛型类型
泛型函数的类型与非泛型函数的类型没什么不同，只是有一个类型参数在最前面，像函数声明一样

```ts
function identity<T>(arg: T): T {}

let myIdentity: <T>(art: T) => T = identity;
```

我们也可以使用不同的泛型参数名，只要在数量上和使用方式上能对应上就行。

```ts
function identity<T>(arg: T): T {
  return arg;
}
let myIndentity: <U>(arg: U) => U = identity;
```

我们还可以使用带有调用签名的对象字面量来定义泛型函数：

```ts
function identity<T>(arg: T): T {
  return arg;
}

let myIdentity: {<T>(arg: T): T} = identity;
```

### 泛型接口

```ts
interface GenericIdentity<T> {
  (arg: T): T；
}

function identity<T>(arg: T): T {
  return arg;
}

let myIdentity: GenericIdentity<number> = identity;

console.log(myIdentity(1)); // 1
```
### 泛型类

泛型类使用 **<>** 括起泛型类型，跟在类名后面

```ts
class GenericNumber<T> {
  zeroValue: T;
  add: (x: T, y: T) => T;
}

let myGenericNumber = new GenericNumber<number>();
myGenericNumber.zeroValue = 0;
myGenericNumber.add = function(x, y) {
  return x + y;
}
```

## 泛型约束

相比于操作any所有类型，我们想要限制函数去处理任意带有 **.length** 属性的所有类型，只要传入的类型有这恶属性，我们就允许，就是说至少包含这一属性。为此，我们需要列出对于T的约束要求。
为此，我们定义一个接口来描述约束条件.
创建一个包含 **length** 属性的接口，使用这个接口和 **extends** 关键字来实现约束：

```ts
interface Lengthwise {
  length: number;
}

function loggingIdentity<T extends Lengthwise>(arg: T): T {
  console.log(arg);
  return arg;
}

loggingIdentity(3); // Error Argument of type '3' is not assignable to parameter of type 'Lengthwis'
loggingIdentity({length: 10, a: 1, b: 4});
```

我们需要传入符合约束类型的值，必须包含必须的属性

### 在泛型约束中使用类型参数

可以声明一个类型参数，且它被另一个类型参数所约束，比如，现在我们想要用属性名从对象里获取这个属性。并且我们想要确保这个属性存在于对象 **obj** 上，因此我们需要在这两个类型之间使用约束

```ts
function getProperty<T, K extends keyof T>(obj: T, key: K) {
  return obj[key];
}
let x = {a: 1, b: 2, c: 3, d: 4};
getProperty(x, 'a');
getProperty(x, 'm');// Argument of type '"m"' is not assignable to parameter of type '"a" | "b" | "c" | "d"'
```

### 在泛型里使用类类型
在ts使用泛型创建工厂函数时，需要引用构造函数的类类型：

```ts
function create<T>(c: {new(): T}): T {}
```