<template>
  <div>
    <p>上拉加载，下拉刷新</p>
  </div>
</template>
<script lang='ts'>
import { Vue, Component } from 'vue-property-decorator';
import axios from '@/api';
@Component
export default class PullRefresh extends Vue {
  name = 'PullRefresh';

  mounted() {
    axios.get('/pullRefresh').then((res: any) => {
      console.log(res);
    });
  }
}
</script>
