<template>
  <div id="app">
    <side />
    <router-view/>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import Side from '@/views/layout/side.vue';

@Component({
  components: {
    Side
  }
})
export default class App extends Vue {}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
