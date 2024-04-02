<template>
  <div id="app">
    <header-component class="header-comp"></header-component>

    <router-view />
  </div>
</template>

<script>
import HeaderComponent from "./components/HeaderComponent.vue";
// import BoardsComponent from "./components/BoardsComponent.vue";
export default {
  components: { HeaderComponent },
  // BoardsComponent },
  setup() {},
};
</script>

<style>
* {
  margin: 0;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.header-comp {
  box-shadow: 0 0px 30px rgba(0, 0, 0, 0.1);
}
</style>
