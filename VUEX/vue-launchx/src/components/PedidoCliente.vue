<template>
    <div>
      <div id="imagen"></div>
      <div class="contactForm">
        <h2>¡Realizar pedido!</h2>

        <label for="telefono">Primero, indicanos tu teléfono: </label>
        <input type="telephone" v-model="telIni" name="telefono"><br>

        <p>A continuación, elija el sabor y el o los adornos que quiera incluir en su pastel.</p>
      
        <div id="sabores">
          <label for="sabores">Sabores:</label>
          <input type="checkbox" id="chocolate" value="Chocolate" v-model="sabores"><br>
          <label for="chocolate">Chocolate</label>
          <input type="checkbox" id="fresa" value="Fresa" v-model="sabores"><br>
          <label for="fresa">Fresa</label>
          <input type="checkbox" id="limon" value="Limón" v-model="sabores"><br>
          <label for="limon">Limón</label><br>
        </div>

        <div id="adornos">
          <label for="sabores">Adornos:</label>
          <input type="checkbox" id="chispasChocolate" value="Chispas de chocolate" v-model="adornos"><br>
          <label for="chispasChocolate">Chispas de chocolate</label>
          <input type="checkbox" id="cremaGlaceada" value="Crema Glaceada" v-model="adornos"><br>
          <label for="cremaGlaceada">Crema Glaceada</label>
          <input type="checkbox" id="fondant" value="Fondant" v-model="adornos"><br>
          <label for="fondant">Fondant</label><br>
        </div>

        <label for="especificaciones">Especificaciones del pastel:</label>
        <input type="text-area" v-model="especificaciones" name="especificaciones"><br>
        
        <div>
          <p>{{ $store.state.mensaje }}</p>
        </div>

        <input type="button" value="Guardar Pedido" @click="$store.dispatch('guardarPedido')">
        
      </div>
    </div>
</template>

<script>
export default {
    name: 'PedidoCliente',
    computed: {
      telIni: {
        get(){
          return this.$store.state.formPedido.telefono;
        },
        set(telefono){
          this.$store.dispatch("telefono",telefono);
        }
      },
      sabores:{
        get(){
          return this.$store.state.formPedido.sabores;
        },
        set(sabores){
          this.$store.dispatch("arrSabores",sabores);
        }
      },
      adornos:{
        get(){
          return this.$store.state.formPedido.adornos;
        },
        set(adornos){
          this.$store.dispatch("arrAdornos",adornos);
        }
      },
      especificaciones:{
        get(){
          return this.$store.state.formPedido.especificaciones;
        },
        set(especificaciones){
          this.$store.dispatch("especificaciones",especificaciones);
        }
      }
    },
}
</script>