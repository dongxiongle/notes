# 函数

## 剩余参数
必要参数、默认参数和可选参数有个共同点：他们表示一个参数。
如果同时操作多个参数，或者并不知道会有多少参数传递进来，在js里可以用 **arguments** 来访问所有传入的参数
在ts中，可以把所有参数收集到一个变量中

## this 参数
**this** 来自对象字面量里的函数表达式。修改方法是，提供一个显式的 **this** 参数。 **this** 参数是个假的参数，它出现在参数列表的最前面：

```ts
function f(this:void) {}
```

```ts
interface Card {
  suit: string;
  card: string;
}

interface Deck {
  suits: string[];
  cards: number[];
  createCardPicker(this: Deck): () => Card;
}

let deck: Deck = {
  suits: ['a', 'b', 'c', 'd'],
  cards: Array(52),
  createCardPicker: function(this: Deck) {
    return () => {
      let pickedCard = Math.floor(Math.random() * 52);
      let pickedSuit = Math.floor(pickedCard / 13);
      return {suit: this.suits[pickedSuit], card: pickedCard % 13};
    }
  }
}

let cardPicker = deck.createCardPicker();
let pickedCard = cardPicker();
```

### 回调函数里的 this 参数

当将一个函数传递到某个库函数里在稍后被调用时，回调函数里的 **this** 可能会报错。因为当回调函数被调用时，会被当成一个普通函数调用， **this** 将为 **undefined**
首先，库函数的作者要指定 **this** 的类型：

```ts
interface UIElement {
  addClickListener(onClick: (this: void, e: event) => void): void;
}
```

**this: void** 意味着 **addClickListener** 期望 **onClick** 是一个函数且它不需要一个 ** this** 类型。然后，为调用代码里的 **this** 添加类型注解。

```ts
class Handler {
  info: string;
  onClickBad(this: Handler, e: Event) {

  }
}
```

## 重载

