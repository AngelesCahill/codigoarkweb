<template>
    <div class="container">
        <div class="row">
            <div class="col-12 my-2"></div>
                <button type="button" class="btn btn-danger" @click="signout">Cerrar Sesiòn</button>
            </div>
        <div class="row">
            <div class="col-sm-12 col-md-12">
                <div class="mt-5">
                    <b-table-simple hover small caption-top responsive>
                        <b-thead head-variant="dark">
                        <b-tr>
                            <b-th class="mx-3">#</b-th>
                            <b-th class="mx-3">Nombre</b-th>
                            <b-th class="mx-3">Modelo</b-th>
                            <b-th class="mx-3">Resolución</b-th>
                            <b-th class="mx-3">$ Venta</b-th>
                            <b-th class="mx-3">$ Arriendo Mensual</b-th>
                        </b-tr>
                        </b-thead>
                        <b-tbody>
                        <b-tr v-for="(item, index) in enviandoProductos" :key="index">
                            <b-td>{{index+1}}</b-td>
                            <b-td>{{item.name}}</b-td>
                            <b-td>{{item.model}}</b-td>
                            <b-td>{{item.resolution}}</b-td>
                            <b-td>{{item.valor}}</b-td>
                            <b-td>{{item.arriendo}}</b-td>
                            <b-td><b-button variant="warning" @click="editarProducto(item.idDoc)">Editar</b-button></b-td>
                        </b-tr>
                        </b-tbody>
                        <b-tfoot>
                        </b-tfoot>
                    </b-table-simple>
                </div>
            </div>
        </div>
        <div>
            <b-button id="show-btn" @click="$bvModal.show('bv-modal-example1')">Agregar Proyector 3D</b-button>
            <b-modal id="bv-modal-example1" hide-footer>
                <template #modal-title>
                Agregar Proyector 3D
                </template>
                <div class="d-block text-center">
                    <div class="d-block text-left">
                        <b-form>
                            <b-form-group id="input-group-1" label="Nombre">
                                <b-form-input type="text" id="input-1" v-model="name" required>
                                </b-form-input>
                            </b-form-group>

                            <b-form-group id="input-group-2" label="Modelo">
                                <b-form-input type="text" id="input-2" v-model="model" required>
                                </b-form-input>
                            </b-form-group>

                            <b-form-group id="input-group-3" label="Resolución">
                                <b-form-input type="text" id="input-3" v-model="resolution" required>
                                </b-form-input>
                            </b-form-group>

                            <b-form-group id="input-group-4" label="Vida útil">
                                <b-form-input type="text" id="input-4" v-model="life" required>
                                </b-form-input>
                            </b-form-group>

                            <b-form-group id="input-group-5" label="Cantidad de Leds">
                                <b-form-input type="text" id="input-5" v-model="ledquantity" required>
                                </b-form-input>
                            </b-form-group>

                            <b-form-group id="input-group-6" label="Material">
                                <b-form-input type="text" id="input-6" v-model="material" required>
                                </b-form-input>
                            </b-form-group>

                            <b-form-group id="input-group-7" label="Brillo">
                                <b-form-input type="text" id="input-7" v-model="brightness" required>
                                </b-form-input>
                            </b-form-group>

                            <b-form-group id="input-group-8" label="Tamaño de la Imagen">
                                <b-form-input type="text" id="input-8" v-model="imagesize" required>
                                </b-form-input>
                            </b-form-group>

                            <b-form-group id="input-group-9" label="Url imagen">
                                <b-form-input type="text" id="input-9" v-model="img" required>
                                </b-form-input>
                            </b-form-group>

                            <b-form-group id="input-group-10" label="Sistemas operativos Móviles">
                                <b-form-input type="text" id="input-10" v-model="app" required>
                                </b-form-input>
                            </b-form-group>

                            <b-form-group id="input-group-11" label="Windows - Software">
                                <b-form-input type="text" id="input-11" v-model="software" required>
                                </b-form-input>
                            </b-form-group>

                            <b-form-group id="input-group-12" label="Formatos">
                                <b-form-input type="text" id="input-12" v-model="format" required>
                                </b-form-input>
                            </b-form-group>

                            <b-form-group id="input-group-13" label="Ángulo de visión">
                                <b-form-input type="text" id="input-13" v-model="viewangle" required>
                                </b-form-input>
                            </b-form-group>

                            <b-form-group id="input-group-14" label="Watts">
                                <b-form-input type="text" id="input-14" v-model="watts" required>
                                </b-form-input>
                            </b-form-group>

                            <b-form-group id="input-group-15" label="Voltage">
                                <b-form-input type="text" id="input-15" v-model="voltage" required>
                                </b-form-input>
                            </b-form-group>

                            <b-form-group id="input-group-16" label="Valor venta">
                                <b-form-input type="text" id="input-16" v-model="valor" required>
                                </b-form-input>
                            </b-form-group>

                            <b-form-group id="input-group-17" label="Valor arriendo mensual">
                                <b-form-input type="text" id="input-17" v-model="arriendo" required>
                                </b-form-input>
                            </b-form-group>


                            <div class="d-block text-center">
                                <b-button type="submit" variant="success mx-4 mt-3" @click.prevent="agregarProducto">Agregar</b-button>
                                <b-button class="mt-3" block @click="$bvModal.hide('bv-modal-example1')">Cerrar</b-button>
                            </div>
                        </b-form>
                    </div>
                </div>
            </b-modal>
        </div>

        <div class="row mt-5 mb-5">
            <div class="col-sm-12 mt-5 mb-5">
                <table class="table table-hover table-dark">
                    <thead>
                        <tr>
                        <th>Num</th>
                        <th>Nombre</th>
                        <th>Telefono</th>
                        <th>Mail</th>
                        <th>Mensaje</th>
                        </tr>
                    </thead>
                    <tbody class="info">
                        <tr v-for="(item, index) in enviandoDatosParaContactar" :key="index">
                        <th>{{index+1}}</th>
                        <td>{{item.nombre}}</td>
                        <td>{{item.telefono}}</td>
                        <td>{{item.mail}}</td>
                        <td>{{item.mensaje}}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex';
import Swal from 'sweetalert2';
import firebase from 'firebase';

export default {
    name: 'Administracion',
    data(){
        return {
            name: '',
            model: '',
            resolution: '',
            life: '',
            brightness: '',
            ledquantity: '',
            imagesize: '',
            img: '',
            app: '',
            software: '',
            format: '',
            valor: '',
            arriendo: '',
            viewangle: '',
            watts: '',
            voltage: '',
            material:'',
        }
    },
    computed: {
        ...mapGetters(['enviandoProductos' , 'enviandoDatosParaContactar'])
    },
    methods: {
        agregarProducto(){
            if(this.name.length > 2 && this.model && this.resolution && this.brightness && this.life && this.material && this.watts && this.voltage && this.app && this.format && this.img && this.imagesize && this.ledquantity && this.viewangle && this.valor && this.arriendo && this.software){
                let datos = {
                    material: this.material,
                    app: this.app,
                    arriendo: this.arriendo,
                    brightness: this.brightness,
                    format: this.format,
                    img: this.img,
                    imagesize: this.imagesize,
                    ledquantity: this.ledquantity,
                    life: this.life,
                    model: this.model,
                    name: this.name,
                    resolution: this.resolution,
                    software: this.software,
                    valor: this.valor,
                    viewangle: this.viewangle,
                    voltage: this.voltage,
                    watts: this.watts
            }
                 this.$store.dispatch('agregandoProducto', datos)
                
            }else{
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'Revisa los datos ingresados',
                    footer: 'Debes llenar todos los datos'
                });
            }
            
        },
        eliminarProducto(id){
            this.$store.dispatch('eliminandoProducto',id);
        },
        editarProducto(idDoc){
            this.$router.push({name: 'Editar', params: {id: idDoc}}); 
        },
        signout(){
        firebase.auth().signOut().then(() => {
            this.$router.replace('/login');
        }).catch((error) => {
            console.error(error);
        });
      }
    }
}
</script>

<style>
</style>