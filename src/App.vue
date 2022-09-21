<template lang="pug">
nav.navbar.navbar-expand-lg.navbar-light.bg-light.fixed-top
  .container-fluid
    a.navbar-brand(href='#') Shayne Chang
    button.navbar-toggler(type='button' data-bs-toggle='collapse' data-bs-target='#navbarNavAltMarkup' aria-controls='navbarNavAltMarkup' aria-expanded='false' aria-label='Toggle navigation')
      span.navbar-toggler-icon
    #navbarNavAltMarkup.collapse.navbar-collapse
      .navbar-nav
        router-link.nav-link(to='/') Home
        router-link.nav-link(to='/users') Users
router-view.vh-75.view
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
