<template>
  <div class="app">
    <Navbar/>
    <router-view/>
    <div class="row py-2 mt-5">
      <div class="col-sm-12 contenedor-pie">
        <h3 class="pie-pagina">Angeles Cahill</h3>
        <h2 class="pie-pagina">9 77316001 - angeles.cahill@gmail.com</h2>
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue';
import firebase from 'firebase';
export default {
  name: 'App',
  components: {
    Navbar,
  },
  mounted(){
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.$store.dispatch('user', user);
      } else {
        this.$store.dispatch('user', '');
      }
    });
    this.$store.dispatch('traerBaseDatos');
    this.$store.dispatch('traerBaseDatosMensajes');
  },
  methods: {

  },
}
</script>
<style>
div.app {
  font-family: 'Titillium Web', sans-serif;
}
div.contenedor-pie {
  background-color: black;
  align-items: center;
  height: 5rem;
  padding: 1rem;
}
h3.pie-pagina {
 font-family: 'Titillium Web', sans-serif;
 color: whitesmoke;
 font-size: 0.9rem !important;
 text-align: center;
}
h2.pie-pagina {
 font-family: 'Titillium Web', sans-serif;
 color: whitesmoke;
 font-size: 0.8rem !important;
 text-align: center;
 margin-bottom: 1rem;
}
</style>
