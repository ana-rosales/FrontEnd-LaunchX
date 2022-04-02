<template>
  <nav>
    <router-link to="/">Inicio</router-link> 
    <router-link to="/pedidos" v-if="$store.state.usuario == 1">Pedidos</router-link> 
    <router-link to="/inventario" v-if="$store.state.usuario == 1">Inventario</router-link> 
    <router-link to="/clientes" v-if="$store.state.usuario == 1">Clientes</router-link>

    <button @click="$store.dispatch('cambiarUsuario',$store.state.usuario)">{{ $store.state.nomUsuario }}</button>
  </nav>
  <router-view/>
  <footer>
    <h3>Dirección:</h3>
    <p>Torres Adalid 1263, Narvarte.</p>
    <h3>Teléfono:</h3>
    <p>5511111111</p>
    <h3>Horarios de Atención:</h3>
    <p>Lunes a Viernes de 9:00 a 20:00 hrs.</p>
    <p>Sábados y Domingos de 10:00 a 18:00 hrs.</p>
  </footer>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
@font-face{
    font-family: 'Sansation-Light';
    src: url('/sansationLight') format('truetype');
    font-weight: normal;
}

#app {
  width: 100%;
  background: #FFEDED;
  margin:0%;
}

nav {
  margin: 30px;
  display: flex;
  justify-content: space-between;
  background: #FFDA8F;
}

nav a {
  font-family: 'Sansation-Light';
  text-decoration: none;
}

button{
  font-size: 40px;
  width: fit-content;
  margin: 0 10px;
}
</style>
