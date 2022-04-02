<template>
    <h2>Adornos</h2>
    <table>
      <tr>
        <th>Adorno</th>
        <th>Cantidad</th>
      </tr>
      <tr v-for="adorno in $store.state.adornos">
        <td>{{ adorno.nombre }}</td>
        <td v-if="$store.state.usuario == 1">{{ adorno.cantidad }}</td>
        <td v-if="$store.state.usuario == 0">{{ adorno.precio }}</td>
      </tr>
    </table>
</template>

<script>
export default {
    name: "Adornos"
}
</script>