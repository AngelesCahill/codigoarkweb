<template>
    <div class="container">
        <div class="row mt-5 mb-5">
            <div class="col-sm-12 col-md-6 col-lg-3 box">
                <img src="../assets/hora3D.jpg" alt="img 3D">
            </div>
            <div class="col-sm-12 col-md-6 col-lg-3 box">
                <img src="../assets/tiburon3D.jpg" alt="img 3D">
            </div>
            <div class="col-sm-12 col-md-6 col-lg-3 box">
                <img src="../assets/adidas3D.jpg" alt="img 3D">
            </div>
            <div class="col-sm-12 col-md-6 col-lg-3 box">
                <img src="../assets/holograma.jpg" alt="img 3D">
            </div>
        </div>
        <div class="row mt-5 mb-5 mx-auto">
            <div class="col-sm-12 col-md-6 col-lg-4 my-2" v-for="(item, index) in enviandoProductos" :key="index">
                <div class="card text-white bg-dark" style="width: 18rem;">
                    <img :src="item.img" class="card-img-top mx-auto mt-1" :alt="item.name">
                    <div class="card-body mx-auto">
                        <h5 class="card-title">{{item.name}}</h5>
                    </div>
                    <ul class="list-group list-group-flush text-dark">
                        <li class="list-group-item">Modelo: {{item.model}}</li>
                        <li class="list-group-item">Resolución: {{item.resolution}}</li>
                        <li class="list-group-item">Cantidad de Leds: {{item.ledquantity}}</li>
                        <li class="list-group-item">Tamaño Imagen: {{item.imagesize}}</li>
                        <li class="list-group-item">Ángulo de Visión: {{item.viewangle}}</li>
                    </ul>
                </div>
            </div>
            <div class="col-sm-12 col-md-6 col-lg-4 my-auto">
                <video class="my-5 videoParis1" width="320" height="240" controls>
                    <source src="../assets/videoFun3dParis001.mp4" type="video/mp4">
                </video>
            </div>
        </div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex';
export default {
    name: "MarketingDigital3D",

    computed: {
    ...mapGetters(['enviandoProductos'])
    },
}

</script>
<style scoped>
img {
    height: 90%;
    width: 90%;
    box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.2), 0 2px 2px 0 rgba(0, 0, 0, 0.19);
}
video.videoParis1 {
    border: 1px solid black;
}
</style>