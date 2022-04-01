import { createRouter, createWebHashHistory } from 'vue-router'
import Inicio from '../views/Inicio.vue'
import Pedidos from '../views/Pedidos.vue'
import Inventario from '../views/Inventario.vue'
import Clientes from '../views/Clientes.vue'

const routes = [
  {
    path: '/',
    name: 'inicio',
    component: Inicio
  },
  {
    path: '/pedidos',
    name: 'pedidos',
    component: Pedidos
  },
  {
    path: '/inventario',
    name: 'inventario',
    component: Inventario
  },
  {
    path: '/clientes',
    name: 'clientes',
    component: Clientes
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
