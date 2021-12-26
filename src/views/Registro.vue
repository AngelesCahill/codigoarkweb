<template>
    <div class="container">
        <div class="row">
            <div class="col-sm-12 col-md-8 col-lg-6 col-xl-6 mx-auto my-5">
                <form @submit.prevent="registrarUsuario">
                    <div class="mb-3">
                        <label for="exampleInputAvatar1" class="form-label">Avatar</label>
                        <input type="text" class="form-control" id="exampleInputAvatar1" v-model="photoURL">
                    </div>
                    <div class="mb-3">
                        <label for="exampleInputName1" class="form-label">Nombre</label>
                        <input type="text" class="form-control" id="exampleInputName1" v-model="displayName">
                    </div>
                    <div class="mb-3">
                        <label for="exampleInputEmail1" class="form-label">Email</label>
                        <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" v-model="email">
                        <div id="emailHelp" class="form-text">Tus datos nunca serán compartidos.</div>
                    </div>
                    <div class="mb-3">
                        <label for="exampleInputPassword1" class="form-label">Password</label>
                        <input type="password" class="form-control" id="exampleInputPassword1" v-model="password">
                    </div>
                    <button type="submit" class="btn btn-primary">Registrarme</button>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
import Swal from 'sweetalert2';
import firebase from 'firebase';
export default {
    name: 'Registro',
    data(){
        return {
            displayName: '',
            photoURL: '',
            email: '',
            password: '', 
        }
    },
    methods: {
        registrarUsuario(){
            if(this.displayName.length >= 2 && this.photoURL && this.email && this.password.length >= 6){
                firebase.auth().createUserWithEmailAndPassword(this.email, this.password)
                .then((respuesta) => {
                    return respuesta.user.updateProfile({
                        displayName: this.displayName,
                        photoURL: this.photoURL,
                    }).then(() => {
                        this.displayName = '',
                        this.photoURL = '',
                        this.email = '',
                        this.password = '', 
                        Swal.fire({
                            position: 'top-end',
                            icon: 'success',
                            title: 'Registrado con éxito',
                            showConfirmButton: false,
                            timer: 1500
                        })
                        this.$router.push({name: 'Home'})
                    }).catch((error) => {
                        console.error(error);
                    });
                   
                })
                .catch((error) => {
                    console.error(error.code );
                   console.error(error.message);
                   
                });
            }else{
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'Inténtalo nuevamente!',
                    footer: 'Debes llenar todos los datos'
                })
            }
        }
    },
}
</script>

<style>

</style>