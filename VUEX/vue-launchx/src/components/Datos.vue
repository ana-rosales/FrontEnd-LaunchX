<template>
    <div>
      <div id="imagen"></div>
      <div class="contactForm">

        <h2>Datos de contacto</h2>
        <p>Por favor, ingrese los siguientes datos.</p>
      
        <label for="nombre">Nombre:</label>
        <input type="text" v-model="nomIni" name="nombre"><br>

        <label for="telefono">Teléfono:</label>
        <input type="telephone" v-model="telIni" name="telefono"><br>

        <label for="correo">Correo:</label>
        <input type="e-mail" v-model="corIni" name="correo"><br>
        
        <input type="button" value="Guardar Datos" @click="$store.dispatch('guardarCliente')">

      </div>
    </div>

</template>

<script>
export default {
    name: 'Datos',
    computed: {
      nomIni: {
        get(){
          return this.$store.state.formulario.nombre;
        },
        set(nombre){
          this.$store.dispatch("nomIni",nombre);
        }
      },
      telIni: {
        get(){
          return this.$store.state.formulario.telefono;
        },
        set(telefono){
          this.$store.dispatch("telIni",telefono);
        }
      },
      corIni: {
        get(){
          return this.$store.state.formulario.correo;
        },
        set(correo){
          this.$store.dispatch("corIni",correo);
        }
      }
    },
}
</script>