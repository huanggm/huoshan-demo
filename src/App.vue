<template>
  <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/about">同时测试两个按钮</router-link> |
    <router-link to="/about1">同层实验按钮</router-link> |
    <router-link to="/about2">不同层实验按钮</router-link> |
    <router-link to="/pay">测试支付页面</router-link> |
    <router-link to="/testVisiual">可视化测试</router-link>
  </div>
  <router-view />
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
