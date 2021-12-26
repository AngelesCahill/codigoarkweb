<template>
    <div class="container">
        <div class="row">
            <div class="col-sm-12 my-3">
                <h2>
                    Contactanos al 9 9745 5361
                </h2>
            </div>
        </div>
        <div class="row mt-5">
            <div class="col-sm-12 col-md-6 boxR">
                <img src="../assets/holograma.jpg" alt="Ventilador 3D">
                <h1>Proyector 3D</h1>
                <button type="button" class="btn btn-dark btn-lg mt-3" @click="$router.push({name:'MarketingDigital3D'})">Ver Mas</button>
            </div>
            <div class="col-sm-12 col-md-6 boxR">
                <img src="../assets/arquitectura&construccion.jpg" alt="Arq. y construcción">
                <h1>Arquitectura y construcción</h1>
                <button type="button" class="btn btn-dark btn-lg mt-3 mb-5" @click="$router.push({name:'Arquitectura'})">Ver Mas</button>
            </div>
        </div>
    </div>
</template>


<script>
export default {
  name: 'Homepage',
}
</script>
<style scoped>
div.boxL {
    justify-content: center;
    text-align: center;
    
}
div.boxR {
    justify-content: center;
    text-align: center;
}
img {
  display: block;
  margin-left: auto;
  margin-right: auto;
  height: 80%;
  width: 90%;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}
h1 {
    font-size: 1.5rem;
    margin-top: 1rem;
    margin-bottom: 1rem;
}
</style>