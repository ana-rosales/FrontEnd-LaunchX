
import { createStore } from 'vuex'

export default createStore({
  state: {
    //sesión
    usuario: 0,
    nomUsuario: "Pastelero",
    //clientes
    formulario: {
      nombre: "",
      telefono: "",
      correo: ""
    },
    cliente: [],
    //pedidos
    formPedido: {
      telefono: "",
      sabores: [],
      adornos: [],
      especificaciones : "",
      estado: "pendiente"
    },
    pedido: [],
    //inventario
    sabores: [{
      nombre: "Chocolate",
      cantidad: "15",
      precio: "$180.00"
    },
    {
      nombre: "Fresa",
      cantidad: "9",
      precio: "$200.00"
    },
    {
      nombre: "Limón",
      cantidad: "11",
      precio: "$195.00"
    }],
    adornos: [],
    mensaje: ""
  },
  getters: {
    /*cuadrado(state){
      return state.usuario * state.usuario;
    }*/
  },
  mutations: {
    cambiarUsuario(state){
      if(state.usuario == undefined){
        state.usuario = 0;
      }
      if(state.usuario == 0){
        state.usuario = 1;
        state.nomUsuario = "Cliente";
      }
      else{
        state.usuario = 0;
        state.nomUsuario = "Pastelero";
      }
    },
    nomIni(state, nombre) {
      state.formulario.nombre = nombre;
    },
    telIni(state, telefono) {
      state.formulario.telefono = telefono;
    },
    corIni(state, correo) {
      state.formulario.correo = correo;
    },
    guardarCliente(state){
      let telefono = (cliente) => cliente.telefono == state.formPedido.telefono;
      let indice = state.cliente.findIndex(telefono);
      if(indice == -1){
        let cliente = {
          nombre: state.formulario.nombre,
          telefono: state.formulario.telefono,
          correo: state.formulario.correo
        }
        state.cliente.push(cliente);
      }
      else{
        state.cliente[indice].nombre = state.formulario.nombre;
        state.cliente[indice].correo = state.formulario.correo;
      }
    },
    telefono(state,telefono){
      state.formPedido.telefono = telefono;
    },
    arrSabores(state, sabores){
      state.formPedido.sabores = sabores;
    },
    arrAdornos(state, adornos) {
      state.formPedido.adornos = adornos;
    },
    especificaciones(state,especificaciones){
      state.formPedido.especificaciones = especificaciones;
    },
    guardarPedido(state){
      let telefono = (cliente) => cliente.telefono == state.formPedido.telefono;
      let indice = state.cliente.findIndex(telefono);
      /* no guardar si ya existe */
      if(indice != -1){
        let pedido = {
          nombre: state.cliente[indice].nombre,
          telefono: state.formPedido.telefono,
          correo: state.cliente[indice].correo,
          sabores: state.formPedido.sabores,
          adornos: state.formPedido.adornos,
          especificaciones: state.formPedido.especificaciones
        }
        state.pedido.push(pedido);
        state.mensaje = "";
      }
      else{
        state.mensaje = "Por favor, registre sus datos primero.";
      }
    }
  },
  actions: {
    //usuario
    cambiarUsuario({commit},usuario){
      commit("cambiarUsuario",usuario);
    },
    //cliente
    nomIni({commit}, nombre) {
      commit("nomIni", nombre);
    },
    telIni({commit},telefono){
      commit("telIni",telefono);
    },
    corIni({commit},correo){
      commit("corIni",correo);
    },
    guardarCliente({commit}){
      commit("guardarCliente");
    },
    //pedido
    telefono({commit},telefono){
      commit("telefono",telefono);
    },
    arrSabores({commit},sabores){
      commit("arrSabores",sabores);
    },
    arrAdornos({commit},adornos){
      commit("arrAdornos",adornos);
    },
    especificaciones({commit},especificaciones){
      commit("especificaciones",especificaciones);
    },
    guardarPedido({commit}){
      commit("guardarPedido");
    },
    limpiarPedido({commit}){
      commit("limpiarPedido");
    },
    limpiarCliente({commit}){
      commit("limpiarClientes");
    },
  },
  modules: {
  }
})
