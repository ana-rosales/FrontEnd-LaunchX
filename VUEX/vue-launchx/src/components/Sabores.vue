<template>
    <h2>Sabores</h2>
        <table>
            <tr>
                <th>Sabor</th>
                <th>Cantidad</th>
            </tr>
            <tr v-for="sabor in $store.state.sabores">
                <td>{{ sabor.nombre }}</td>
                <td v-if="$store.state.usuario == 1">{{ sabor.cantidad }}</td>
                <td v-if="$store.state.usuario == 0">{{ sabor.precio }}</td>
            </tr>
        </table>
</template>

<script>

export default {
  name: 'Sabores'
}
</script>