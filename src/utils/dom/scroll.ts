type ScrollElement = HTMLElement | Window;

function isWindow(val: unknown): val is Window {
  return val === window;
}

const overflowScrollReg = /scroll|auto/i;

export function getScroller(el: HTMLElement, root: ScrollElement = window) {
  let node = el;
  while(node && node.tagName !== 'HTML' && node.nodeType === 1 && node !== root) {
    const { overflowY } = window.getComputedStyle(node);
    if (overflowScrollReg.test(overflowY)) {
      if (node.tagName !== 'BODY') {
        return node;
      }
      const { overflowY: htmlOverflowY } = window.getComputedStyle(node.parentNode as Element);
      if (overflowScrollReg.test(htmlOverflowY)){
        return node;
      }
    }
    node = node.parentNode as HTMLElement;
  }
  return root;
}

/**
 * 获取scrollTop
 * @param el 滚动组件
 */
export function getScrollTop(el: ScrollElement): number {
  const top = 'scrollTop' in el ? el.scrollTop : el.pageYOffset;
  // ios scroll bounce cause minus scrollTop
  return Math.max(top, 0);
}

/**
 * 设置滚动距离
 * @param el 滚动组件
 * @param value 滚动距离
 */
export function setScrollTop(el: ScrollElement, value: number) {
  if('scrollTop' in el) {
    el.scrollTop = value;
  } else {
    el.scrollTo(el.scrollX, value);
  }
}

/**
 * 获取根元素的滚动间距
 */
export function getRootScrollTop(): number {
  return (window.pageXOffset || document.documentElement.scrollTop || document.body.scrollTop || 0);
}

/**
 * 设置根元素的滚动间距
 * @param value 滚动间距
 */
export function setRootScrollTop(value: number) {
  setScrollTop(window, value);
  setScrollTop(document.body, value);
}

/**
 * 获取元素距页面顶部或滚动组件顶部的距离
 * @param el 目标元素
 * @param scroller 滚动组件
 */
export function getElementTop(el: ScrollElement, scroller?: HTMLElement): number {
  if(isWindow(el)) {
    return 0;
  }
  const scrollTop = scroller? getScrollTop(scroller) : getRootScrollTop();
  return el.getBoundingClientRect().top + scrollTop;
}

/**
 * 获取高度
 * @param el 滚动组件
 */
export function getVisibleHeight(el: ScrollElement): number {
  if(isWindow(el)) {
    return el.innerHeight;
  }
  return el.getBoundingClientRect().height;
}

/**
 * 获取组件距离可视区域顶部的距离
 * @param el 滚动组件
 */
export function getVisibleTop(el: ScrollElement): number {
  if(isWindow(el)) {
    return 0;
  }
  return el.getBoundingClientRect().top;
}