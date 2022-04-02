<template>
    <div class="cuadrado">
      <h2>Productos disponibles</h2>
      
      <Sabores/>

      <Adornos/>
    </div>
</template>

<script>
import Sabores from "./Sabores.vue";
import Adornos from "./Adornos.vue";

export default {
    name: 'Productos',
    components:{
      Sabores,
      Adornos
    }
}
</script>
