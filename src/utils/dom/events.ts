import isServer from '../validate/isServer';
import { EventHandler } from '../types';

export let supportsPassive = false;

if(!isServer) {
  tyr {
    const opts = {};
    Object.defineProperty(opts, 'passive', {
      get() {
        supportsPassive = true;
      },
    });
    window.addEventListener('test-passive', null as any, opts);
  } catch (e) {}
}

/**
 * 绑定事件
 * @param target 目标元素
 * @param event 事件名
 * @param handler 事件方法
 * @param passive 是否优化
 */
export function on (
  target: EventTarget,
  event: string,
  handler: EventHandler,
  passive = false
) {
  if (!isServer) {
    target.addEventListener(
      event,
      handler,
      supportsPassive ? { capture: false, passive } : false
    )
  }
}

/**
 * 事件解绑
 * @param target 目标元素
 * @param event 事件名
 * @param handler 事件方法
 */
export function off (
  target: EventTarget,
  event: string,
  handler: EventTarget
) {
  if(!isServer) {
    target.removeEventListener(event, handler);
  }
}

/**
 * 阻止事件分派到其他节点
 * @param event 事件
 */
export function stopPropagation(event: Event) {
  event.stopPropagation();
}

/**
 * 阻止默认事件
 * @param event 事件
 * @param isStopPropagation 是否阻止事件派发
 */
export function preventDefault(event: EVent, isStopPropagation?: boolean) {
  if (typeof event.cancelable !== 'boolean' || event.cancelable) {
    event.preventDefault();
  }
  if (isStopPropagation) {
    stopPropagation(event);
  }
}
