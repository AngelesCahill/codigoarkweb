<template>
    <div class="container">
        <div class="row">
            <div class="col-sm-12 col-md-8 col-lg-6 col-xl-6 mx-auto my-5">
                <form class="my-5" @submit.prevent="LoginUser">
                    <div class="mb-3">
                        <label for="exampleInputEmail1" class="form-label">Correo Electrónico</label>
                        <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" v-model="email">
                    </div>
                    <div class="mb-3">
                        <label for="exampleInputPassword1" class="form-label">Contraseña</label>
                        <input type="password" class="form-control" id="exampleInputPassword1" v-model="password">
                    </div>
                    <button type="submit" class="btn btn-primary" @click="LoginUser">Entrar</button>
                    
                </form>
                <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div class="modal-dialog">
                        <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title">Recupera tu Contraseña</h5>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            <div class="mb-3">
                                <label for="exampleInputEmail1" class="form-label">Correo Electrónico</label>
                                <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" v-model="email">
                            </div>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button type="button" class="btn btn-primary" @click="recuperarPassword">Enviar e-mail de recuperación</button>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import firebase from 'firebase';
import Swal from 'sweetalert2';

export default {
    name: 'LogIn',
    data(){
        return {
            email: null,
            password: null
        }
    },
    methods: {
        LoginUser(){
            if(this.email && this.password.length > 5){
                firebase.auth().signInWithEmailAndPassword(this.email, this.password)
                    .then((response) => {
                        console.log(response.user.emailVerified)
                        this.email= null;
                        this.password= null;
                        this.$router.push({name: 'Administracion'});
                    })
                    .catch((error) => {
                        console.error(error.code);
                        console.error(error.message);
                        Swal.fire({
                            icon: 'error',
                            title: 'Oops...',
                            text: 'Acceso Denegado',
                            footer: ''
                        })
                    });
            }else{
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'Algo salió mal, revisa tus datos!',
                    footer: 'El mail y/o contraseña incorrecta.'
                    })
            }
        },
        recuperarPassword(){
            firebase.auth().sendPasswordResetEmail(this.email).then(() => {
                console.log('Correo enviado');
            }).catch((error) => {
                console.error(error);
            });
        }
    },
    }
</script>

<style>

</style>