<template>
    <div>
        <b-navbar toggleable="lg" type="dark" variant="dark" class="px-2">
            <b-navbar-brand class="m-0 p-0 col-sm-10 col-lg-4">
                <h1 class="logonombre ms-5">CodigoArk</h1>
            </b-navbar-brand>

            <b-navbar-toggle target="nav-collapse" class="col-4 col-sm-2 col-lg-8 mx-auto"></b-navbar-toggle>

            <b-collapse id="nav-collapse" is-nav>
            <b-navbar-nav class="ms-auto">
                <b-nav-item href="#">
                    <router-link class="nav-link ml-3" aria-current="page" to="/"><span class="paginas">Home</span></router-link>
                </b-nav-item>
                <b-nav-item href="#">
                    <router-link class="nav-link ml-3" aria-current="page" to="/marketingdigital3D"><span class="paginas"> Proyector 3D</span></router-link>
                </b-nav-item>
                <b-nav-item href="#">
                    <router-link class="nav-link ml-3" aria-current="page" to="/arquitectura"><span class="paginas"> Arquitectura y Construcción</span></router-link>
                </b-nav-item>
                <b-nav-item href="#">
                    <router-link class="nav-link ml-3" aria-current="page" to="/administracion"><span class="paginas"></span></router-link>
                </b-nav-item>
                <b-nav-item href="#">
                    <span>
                        <template>
                            <div class="py-2 px-2">
                                <b-button v-b-toggle.sidebar-right variant="danger">Contactanos</b-button>
                                <b-sidebar id="sidebar-right" title="CodigoArk" right shadow>
                                    <div class="px-3 py-2">
                                        <p class="msg-contactanos">
                                                Envianos un mensaje y te contactaremos lo antes posible!!
                                        </p>

                                    <form @submit.prevent="contactar">
                                        <div class="form-group">
                                            <label for="exampleInputNombre1">Nombre</label>
                                            <input type="text" class="form-control" id="exampleInputNombre1" v-model="nombre" required>
                                        </div>

                                        <div class="form-group">
                                            <label for="exampleInputEmail1">Email</label>
                                            <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" v-model="mail" required>
                                        </div>
                                                                    
                                        <div class="form-group">
                                            <label for="exampleCheck1">Celular</label>
                                            <input type="text" class="form-control" id="exampleCheck1" v-model="telefono" required>
                                        </div>

                                        <div class="form-group">
                                            <label for="exampleFormControlTextarea1">Mensaje</label>
                                            <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" v-model="mensaje"></textarea>
                                        </div>

                                        <button type="submit" class="btn btn-success mt-3 ml-5">Enviar</button>
                                    </form>
                                    </div>
                                </b-sidebar>
                            </div>
                        </template>
                    </span>
                </b-nav-item>
            </b-navbar-nav>
            </b-collapse>
        </b-navbar>
    </div>
</template>

<script>
import firebase from 'firebase';
import { mapGetters } from 'vuex';
import Swal from 'sweetalert2';
export default {
    name: 'Navbar',
    data() {
        return {
            id: '', 
            nombre: '', 
            telefono: '', 
            mail: '', 
            mensaje: ''
        } 
    },
    methods: {
        SignOut(){
            firebase.auth().signOut().then(() => {
                Swal.fire({
                    position: 'center',
                    icon: 'success',
                    title: 'Tu Sesión se ha cerrado exitosamente',
                    showConfirmButton: false,
                    timer: 2500
                })
                this.$router.push({name:'Login'});
                console.log('Sesion cerrada');
            }).catch((error) => {
                console.error(error)
            });
        },

            contactar(){
      if (this.nombre.length > 2 && this.telefono && this.mail && this.mensaje) {
        let datos = {
          telefono: this.telefono,
          nombre: this.nombre,
          mail: this.mail,
          mensaje: this.mensaje
        }  
        this.$store.dispatch('agregarContactar', datos); 

        }else{
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Revisa los datos ingresados',
            footer: 'Debes llenar todos los datos para contactarte'
          });
        }   
    },


        
    },
    computed: {
        ...mapGetters(['enviandoUsuario', 'enviandoDatosParaContactar']),
        exiteUser(){
            return !this.enviandoUsuario;
        },
        activandoLogOut(){
           return this.exiteUser ? 'disabled' : '';
        },
    },
}
</script>

<style scoped>
li {
    font-size: 1.5rem;
}
img {
    width: 10rem;
    height:9rem;
    padding-left: 1rem;
}
p.msg-contactanos {
    font-size: 0.9rem;
}
label {
    font-size: 1rem;
}
span.paginas {
    font-size: 1.1rem !important;
}
h1.logonombre {
    font-size: 3.5rem !important;
    font-family: 'Fredericka the Great', cursive;
}

</style>