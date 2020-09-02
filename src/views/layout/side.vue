<template>
  <div id="nav">
    <van-icon color="#42b983" name="wap-nav" @click="showNav = !showNav;" />
    <transition name="nav-fade">
      <ul v-if="showNav">
        <li>
          <router-link to="/">Home</router-link>
        </li>
        <li>
          <router-link to="/about">About</router-link>
        </li>
        <li>
          <router-link to="/intersection">Intersection</router-link>
        </li>
        <li>
          <router-link to="/pullRefresh">pullRefresh</router-link>
        </li>
      </ul>
    </transition>
  </div>
</template>
<script lang='ts'>
import { Vue, Component } from 'vue-property-decorator';
@Component
export default class SideBAr extends Vue {
  name = 'SideBAr';
  showNav = false;
}
</script>
<style lang="less" scoped>

#nav {
  padding: 10px;
  width: 100px;
  position: fixed;
  top: 0;
  left: 0;
  text-align: left;
  cursor: pointer;
}

li {
  list-style: none;
  font-size: 14px;
  line-height: 20px;
  text-align: left;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
.nav-fade-enter-active {
  transition: all .3s ease;
}

.nav-fade-leave-active {
  transition: all .3s linear;
}

.nav-fade-enter, .nav-fade-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}
</style>
