# TypeScript

## 基础类型
1. 任意类型 any
2. 数字类型 number
3. 字符串类型 string
4. 布尔类型 boolean
5. 数组类型 

```
// 在元素类型后加上[]
let arr: number[] = [1, 2];

// 或者使用数组泛型
let arr: Array<number> = [1, 2];
```

6. 元组

```
// 元组类型用来表示已知元素数量和类型的数组，各元素的类型不必相同，对应位置的类型需要相同
let x: [string, number];
x = ['x', 1];
```

7. 枚举 enum

```
// 枚举类型用于定义数值集合
enum Color {red, green, blue};
let c: Color = Color.blue;
console.log(c); // 2
```

8. void void

```
// 用于标识方法返回值的类型，表示该方法没用返回值
function hello(): void {alert('xx);}
```

9. null null 对象缺失
10. undefined undefined 用于初始化变量未一个未定义的值
11. never never 是其它类型的子类型，代表从不会出现的值