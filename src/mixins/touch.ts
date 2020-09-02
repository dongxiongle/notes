import { on } from '../utils/dom/events';

const MIN_DISTANCE = 10;

function getDirection(x: number, y: number) {
  if ( x > y && x > MIN_DISTANCE) {
    return 'horizontal';
  }
  if (y > x && y > MIN_DISTANCE) {
    return 'vertical';
  }
  return '';
}

export const TouchMixin = {
  data() {
    return { direction: '' }
  },
  methods: {
    touchStart(event: TouchEvent) {
      this.resetTouchStatus();
      this.startX = event.touches[0].clientX;
      this.startY = event.touches[0].clientY;
    },
    touchMove(event: TouchEvent) {
      const touch = event.touches[0];
      this.deltaX = touch.clientX - this.startX;
      this.deltaY = touch.clientY - this.startY;
      this.offsetX = Math.abs(this.deltaX);
      this.offsetY = Math.abs(this.deltaY);
      this.direction = this.direction || getDirection(this.offsetX, this.offsetY);
    }
  },
  resetTouchStatus() {
    this.direction = '';
    this.deltaX = 0;
    this.deltaY = 0;
    this.offsetX = 0;
    this.offsetY = 0;
  },
  bindTouchEvent(el) {
    const { onTouchStart, onTouchMove, onTouchEnd } = this;
    on(el, 'touchstart', onTouchStart);
    on(el, 'touchMove', onTouchMove);
    if(onTouchEnd) {
      on(el, 'touchend', onTouchEnd);
      on(el, 'touchcancel', onTouchEnd);
    }
  }
};