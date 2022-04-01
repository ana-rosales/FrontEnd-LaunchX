<template>
  <div class="about">
    <h1>Pedidos del día</h1>

    <table>
      <tr>
        <th>Nombre</th>
        <th>Teléfono</th>
        <th>Correo</th>
        <th>Sabores</th>
        <th>Adornos</th>
        <th>Especificaciones</th>
      </tr>
      <tr v-for="pedido in $store.state.pedido">
        <td>{{ pedido.nombre }}</td>
        <td>{{ pedido.telefono }}</td>
        <td>{{ pedido.correo }}</td>
        <td>
          <ul>
            <li v-for="sabor in pedido.sabores">{{ sabor }}</li>
          </ul>
        </td>
        <td>
          <ul>
            <li v-for="adorno in pedido.adornos">{{ adorno }}</li>
          </ul>
        </td>
        <td>{{ pedido.especificaciones }}</td>
      </tr>
    </table>
  
  </div>
</template>

<script>

export default {
  name: 'Pedidos'
}
</script>
