<template>
  <div>
    <p>{{name}}</p>
    <div class="context">
      <template v-for="(item, index) in list">
        <p :key="index">{{pageNum}} - {{item}}</p>
      </template>
    </div>
    <div class="bottom"></div>
  </div>
</template>
<script lang='ts'>
import { Vue, Component } from 'vue-property-decorator';

@Component
export default class Intersection extends Vue {
  name = 'Intersection';
  list: Array<number> = [];
  pageNum = 0;
  pageSize = 10;

  getList() {
    const arr = [];
    for (let i = 0; i < 10; i++) {
      arr.push(i);
    }
    this.pageNum++;
    this.list = this.list.concat(arr);
  }

  mounted() {
    this.getList();
    const io = new IntersectionObserver((entries: Array<IntersectionObserverEntry>) => {
      const { isIntersecting } = entries[0];
      if (isIntersecting) {
        this.getList();
      }
    }, {
      rootMargin: '10px'
    });
    io.observe(document.querySelector('.bottom') as Element);
  }
}
</script>
<style lang="less" scoped>
.context {
  padding: 20px;
  p {
    padding: 20px;
  }
  p:nth-child(2n) {
    background: fuchsia;
  }
}
.bottom {
  height: 10px;
}
</style>
