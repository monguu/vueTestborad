<template>
  <div id="app">
    <Header />
    <router-view />
  </div>
</template>
<script>
import Header from "@/components/Header.vue";

export default {
  components: {
    Header,
  },
};
</script>

<style lang="scss">
#app {
  font-family: 'Do Hyeon', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}

@import url('https://fonts.googleapis.com/css2?family=Do+Hyeon&display=swap');
</style>
