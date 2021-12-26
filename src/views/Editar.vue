<template>
    <div class="container">
        <div class="row">
            <div class="col-sm-12 col-md-8 col-lg-6 text-center mt-5 mx-auto">
                <h4 class="mb-5">Editar Proyector: {{name}}</h4>
                <div class="d-block text-left">

                    <b-form @submit.prevent="actualizarProducto">
                        <b-form-group id="input-group-1" label="Url Imagen" label-for="input-1">
                            <b-form-input type="text" id="input-1" v-model="name" required>
                            </b-form-input>
                        </b-form-group>

                        <b-form-group id="input-group-9" label="Url Imagen" label-for="input-9">
                            <b-form-input type="text" id="input-9" v-model="img" required>
                            </b-form-input>
                        </b-form-group>

                        <b-form-group id="input-group-16" label="Valor Venta" label-for="input-16">
                            <b-form-input type="text" id="input-16" v-model="valor" required>
                            </b-form-input>
                        </b-form-group>

                        <b-form-group id="input-group-17" label="Valor arriendo" label-for="input-17">
                            <b-form-input type="text" id="input-17" v-model="arriendo" required>
                            </b-form-input>
                        </b-form-group>

                        <div class="d-block text-center my-5">
                            <b-button type="submit" variant="success mx-4 mt-3">Guardar Cambios</b-button>
                            <b-button type="reset" variant="primary mx-4 mt-3" @click="$router.go(-1)">Volver</b-button>
                        </div>
                    </b-form>
                </div>          
            </div>
        </div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex';
import Swal from 'sweetalert2';

export default {
    name: 'Editar',
    props: ['id'],
    data() {
        return {
            img: '',
            valor: '',
            arriendo: '',
            name: ''
        }
    },
    methods: {
        actualizarProducto(){
            if(this.valor.length >= 6 && this.arriendo && this.img && this.name){
                let datos = {
                    img: this.img,
                    valor: this.valor,
                    arriendo: this.arriendo,
                    name: this.name,
                    idDoc: this.id
                };
                this.$store.dispatch('editandoProducto', datos);
                setTimeout(() => {
                    this.$router.push({name: 'Administracion'})
                }, 1500);
            }else{
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'No se ha podido editar el producto',
                    footer: 'Revisa los datos que ingresaste'
                });
            }
        }
    },
    computed: {
        ...mapGetters(['enviandoProductos']),
    },
    mounted(){
        let datos = this.enviandoProductos.find(producto => producto.idDoc === this.id);
        if (datos !== undefined){
            this.name = datos.name,
            this.model = datos.model,
            this.resolution = datos.resolution,
            this.life = datos.life,
            this.ledquantity = datos.ledquantity,
            this.brightness = datos.brightness,
            this.imagesize = datos.imagesize,
            this.material = datos.material,
            this.watts = datos.watts,
            this.voltage = datos.voltage,
            this.app = datos.app,
            this.software = datos.software,
            this.format = datos.format,
            this.viewangle = datos.viewangle,
            this.img = datos.img,
            this.valor = datos.valor,
            this.arriendo = datos.arriendo,
            this.idDoc = datos.id
        } else {
            Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'El producto no existe',
            });
            setTimeout(() => {
                this.$router.push({name: 'Administracion'})
            }, 1500)
        }
    } 
}
</script>

<style>
.box1 {
    display: inline-block;
}
</style>