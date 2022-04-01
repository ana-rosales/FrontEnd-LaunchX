<template>
  <div class="about">
    <h1>Pedidos del día</h1>

    <table>
      <tr>
        <th>Nombre</th>
        <th>Teléfono</th>
        <th>Correo</th>
      </tr>
      <tr v-for="cliente in $store.state.cliente">
        <td>{{ cliente.nombre }}</td>
        <td>{{ cliente.telefono }}</td>
        <td>{{ cliente.correo }}</td>
      </tr>
    </table>
  
  </div>
</template>

<script>

export default {
  name: 'Pedidos'
}
</script>
