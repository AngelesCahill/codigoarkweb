import Vue from 'vue';
import Vuex from 'vuex';
import firebase from 'firebase';
import Swal from 'sweetalert2';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    user: '',
    productos: [],
    clienteContactar: [],
  },
  getters: {
    enviandoUsuario(state) {
      return state.user;
    },
    enviandoProductos(state) {
      return state.productos;
    },
    enviandoDatosParaContactar(state) {
      return state.clienteContactar;
    },
  },
  mutations: {
    mutandoUsuario(state, datoUser) {
      state.user = datoUser;
    },
    mutandoTraerBaseDatos(state, datos) {
      state.productos = datos;
    },
    mutandoTraerBaseDatosMensajes(state, datos) {
      state.clienteContactar = datos;
    },
  },
  
  actions: {
    user({ commit }, datoUser) {
      commit('mutandoUsuario', datoUser);
    },
    traerBaseDatos({ commit }) {
      firebase.firestore().collection('3dFun').onSnapshot((respuesta) => {
        let datos = [];
        respuesta.forEach(element => {
          console.log(element.data(), element.id);
          datos.push({
            idDoc: element.id,
            app: element.data().app,
            brightness: element.data().brightness,
            format: element.data().format,
            life: element.data().life,
            model: element.data().model,
            material: element.data().material,
            software: element.data().software,
            resolution: element.data().resolution,
            viewangle: element.data().viewangle,
            voltage: element.data().voltage,
            watts: element.data().watts,
            img: element.data().img,
            imagesize: element.data().imagesize,
            name: element.data().name,
            ledquantity: element.data().ledquantity,
            valor: element.data().valor,
            arriendo: element.data().arriendo
          });
        });
        commit('mutandoTraerBaseDatos', datos);
      }, error => console.error(error));
    },
    agregandoProducto(context, datos) {
      firebase.firestore().collection('3dFun').add({
        app: datos.app,
        brightness: datos.brightness,
        format: datos.format,
        life: datos.life,
        model: datos.model,
        material: datos.material,
        software: datos.software,
        resolution: datos.resolution,
        viewangle: datos.viewangle,
        voltage: datos.voltage,
        watts: datos.watts,
        img: datos.img,
        imagesize: datos.imagesize,
        name: datos.name,
        ledquantity: datos.ledquantity,
        arriendo: datos.arriendo,
        valor: datos.valor
      })
        .then(respuesta => console.log(respuesta))
        .catch(error => console.error(error))
    },
    traerBaseDatosMensajes({ commit }) {
      firebase.firestore().collection('contactos').onSnapshot((respuesta) => {
        let datos = [];
        respuesta.forEach(element => {
          console.log(element.data(), element.id);
          datos.push({
            idDoc: element.id,
            app: element.data().app,
            nombre: element.data().nombre,
            telefono: element.data().telefono,
            mail: element.data().mail,
            mensaje: element.data().mensaje
          });
        });
        commit('mutandoTraerBaseDatosMensajes', datos);
      }, error => console.error(error));
    },
    eliminandoProducto(context, id) {
      firebase.firestore().collection('3dFun').doc(id).delete()
        .then(() => {
          Swal.fire({
            title: 'Estas seguro que quieres borrar este producto?',
            text: "Esta acción no se puede revertir!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Si, deseo eliminar este item!'
          })
            .then((result) => {
              if (result.isConfirmed) {
                Swal.fire(
                  'Producto eliminado con éxito!',
                  'success'
                )
              }
            })
        }).catch(error => console.error(error));
    },
    editandoProducto(context, datos) {
      firebase.firestore().collection('3dFun').doc(datos.idDoc).update({
        img: datos.img,
        valor: datos.valor,
        arriendo: datos.arriendo,
        name: datos.name
      })
        .then(() => {
          Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Los cambios han sido guardados',
            showConfirmButton: false,
            timer: 1500
          })
        })
        .catch(error => console.error(error));
    },
    agregarContactar(context, datos) {
      firebase.firestore().collection('contactos').add({
        nombre: datos.nombre,
        telefono: datos.telefono,
        mail: datos.mail,
        mensaje: datos.mensaje
      })
        .then(respuesta => console.log(respuesta))
        .catch(error => console.error(error))
    },
  }
  

})
