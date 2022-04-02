<template>
  <div class="home">
    
    <Datos v-if="$store.state.usuario == 0"/>

    <PedidoCliente v-if="$store.state.usuario == 0"/>
    
    <Productos v-if="$store.state.usuario == 0"/>

    <div v-if="$store.state.usuario == 1">
      <h1>¡Bienvenido Pastelero!</h1>
    </div>

  </div>
</template>

<script>
import Datos from "../components/Datos.vue"
import PedidoCliente from "../components/PedidoCliente.vue";
import Productos from "../components/Productos.vue";

export default {
  name: 'Inicio',
  components:{
    Datos,
    PedidoCliente,
    Productos
  }
}
</script>

<style>
div{
  margin-bottom: 10px;
}

.contador{
  font-size: 80px;
}

.botones button{
  font-size: 40px;
  width: 100px;
  margin: 0 10px;
}
.cuadrado{
  font-size:25px;
}
</style>