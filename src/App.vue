<template>
  <div id="app">
    <nav class="navbar-expand-lg navbar-dark bg-dark justify-content-center">
      <div class="container-fluid">
        <router-link class="navbar-brand" to="/">Home</router-link> |
        <router-link
          class="navbar-brand"
          :to="{
            name: 'posts',
            params: {
              id: this.$route.params.id,
            },
          }"
          >Post</router-link
        >
        |
        <router-link class="navbar-brand" to="/usuarios">Usuarios</router-link>
      </div>
    </nav>
    <router-view />
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
