<template>
  <div>
    <nav>
      <router-link to="/yourwork">Your work</router-link> |
      <router-link to="/projects">Projects</router-link> |
      <router-link to="/filters">Filters</router-link> |
      <router-link to="/dashboards">Dashboards</router-link> |
      <router-link to="/people">People</router-link> |
      <router-link to="/apps">Apps</router-link>
    </nav>
  </div>
</template>

<script>
export default {
  name: "HeaderComponent",
  setup() {},
};
</script>

<style scoped>
nav {
  padding: 25px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
