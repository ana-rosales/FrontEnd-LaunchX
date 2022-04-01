<template>
  <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/pedidos" v-if="$store.state.usuario == 1">Pedidos</router-link> |
    <router-link to="/inventario" v-if="$store.state.usuario == 1">Inventario</router-link> |
    <router-link to="/clientes" v-if="$store.state.usuario == 1">Clientes</router-link>

    <button @click="$store.dispatch('cambiarUsuario',$store.state.usuario)">{{ $store.state.nomUsuario }}</button>
  </nav>
  <router-view/>
</template>

<script>
export default {
  name: 'App'
}
</script>

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

button{
  font-size: 40px;
  width: fit-content;
  margin: 0 10px;
}
</style>
