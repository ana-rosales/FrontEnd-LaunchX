<template>
  <div class="about">
    <h1>Inventario</h1>

    <Sabores />

    <Adornos />

  </div>
</template>

<script>
import Sabores from "../components/Sabores.vue";
import Adornos from "../components/Adornos.vue";

export default {
  name: 'Inventario',
  components:{
    Sabores,
    Adornos
  }
}
</script>
