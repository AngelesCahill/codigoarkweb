<template>
  <div class="container">
    <div class="row mt-5 mb-5">
      <div class="col-sm-12 col-md-6 mt-auto mb-auto">
        <b-carousel
          id="carousel-1"
          v-model="slide"
          :interval="3500"
          style="text-shadow: 1px 1px 2px #333"
          @sliding-start="onSlideStart"
          @sliding-end="onSlideEnd"
        >
          <b-carousel-slide>
            <template #img>
              <img
                class="d-block img-fluid w-100"
                src="../assets/fotoArq/casa_espinoza.jpg"
                alt="image slot"
              />
            </template>
          </b-carousel-slide>

          <b-carousel-slide>
            <template #img>
              <img
                class="d-block img-fluid w-100"
                src="../assets/fotoArq/casa_rishmague.jpg"
                alt="image slot"
              />
            </template>
          </b-carousel-slide>
          <b-carousel-slide>
            <template #img>
              <img
                class="d-block img-fluid w-100"
                src="../assets/fotoArq/belsport_iquique.jpg"
                alt="image slot"
              />
            </template>
          </b-carousel-slide>
          <b-carousel-slide>
            <template #img>
              <img
                class="d-block img-fluid w-100"
                src="../assets/fotoArq/casa_brant.jpg"
                alt="image slot"
              />
            </template>
          </b-carousel-slide>
          <b-carousel-slide>
            <template #img>
              <img
                class="d-block img-fluid w-100"
                src="../assets/fotoArq/casa_zanzibar.jpg"
                alt="image slot"
              />
            </template>
          </b-carousel-slide>
        </b-carousel>
      </div>
      <div class="col-sm-12 col-md-6 mt-auto mb-auto">
        <h5>ARQUITECTURA Y DISEÑO</h5>
        <h5 class="texto mt-3">
          Nuestro enfoque está en el diseño y construcción de espacios
          habitables, amables y modernos. Espacios que cumplan con las
          necesidades de las personas que lo habitarán. En el área de retail
          diseñamos pensando en los requirimientos de la marca y la exhibición
          de sus productos.
        </h5>
      </div>
    </div>
    <hr />
    <div class="row mb-5">
      <div class="col-12 ml-auto mr-auto">
        <h3 class="lema">
          Generar espacios de vanguardia tanto en su estética y arquitectura
          como en su funcionalidad.
        </h3>
      </div>
    </div>
    <hr />
    <div class="row mt-5 mb-3">
      <h4>OBRAS REALIZADAS</h4>
    </div>
    <div class="row mt-5 mb-5">
      <div class="col-sm-12 col-md-4">
        <div class="card" style="width: 18rem">
          <img
            src="../assets/fotoArq/casa_garcia.jpg"
            class="card-img-top"
            alt="Casa Miro"
          />
          <div class="card" style="width: 18rem">
            <ul class="list-group list-group-flush">
              <li class="list-group-item">
                <strong>Casa Garcia</strong>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="col-sm-12 col-md-4">
        <div class="card" style="width: 18rem">
          <img
            src="../assets/fotoArq/belsport_iquique.jpg"
            class="card-img-top"
            alt="Casa Miro"
          />
          <div class="card" style="width: 18rem">
            <ul class="list-group list-group-flush">
              <li class="list-group-item">
                <strong>Imagen Retail</strong>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="col-sm-12 col-md-4">
        <div class="card" style="width: 18rem">
          <img
            src="../assets/fotoArq/quincho_perez.jpg"
            class="card-img-top"
            alt="Casa Miro"
          />
          <div class="card" style="width: 18rem">
            <ul class="list-group list-group-flush">
              <li class="list-group-item">
                <strong>Casa Miro</strong>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <div class="row mt-5 mb-5">
      <div class="col-sm-12 col-md-4">
        <div class="card" style="width: 18rem">
          <img
            src="../assets/fotoArq/casa_anida.jpg"
            class="card-img-top"
            alt="Casa Miro"
          />
          <div class="card" style="width: 18rem">
            <ul class="list-group list-group-flush">
              <li class="list-group-item">
                <strong>Oficina Anida</strong>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="col-sm-12 col-md-4">
        <div class="card" style="width: 18rem">
          <img
            src="../assets/fotoArq/casa_gomez.jpg"
            class="card-img-top"
            alt="Casa Miro"
          />
          <div class="card" style="width: 18rem">
            <ul class="list-group list-group-flush">
              <li class="list-group-item">
                <strong>Casa Gomez</strong>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="col-sm-12 col-md-4 col-lg-4">
        <div class="card" style="width: 18rem">
          <img
            src="../assets/fotoArq/casa_perez.jpg"
            class="card-img-top"
            alt="Casa Perez"
          />
          <div class="card" style="width: 18rem">
            <ul class="list-group list-group-flush">
              <li class="list-group-item">
                <strong>Casa Perez-Lecaros</strong>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <div class="row mt-5 mb">
      <div class="col-sm-12 col-md-4">
        <div class="card" style="width: 18rem">
          <img
            src="../assets/fotoArq/donna_point.jpg"
            class="card-img-top"
            alt="Casa Miro"
          />
          <div class="card" style="width: 18rem">
            <ul class="list-group list-group-flush">
              <li class="list-group-item">
                <strong>Imagen Retail</strong>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="col-sm-12 col-md-4">
        <div class="card" style="width: 18rem">
          <img
            src="../assets/fotoArq/casa_rishmague.jpg"
            class="card-img-top"
            alt="Casa Miro"
          />
          <div class="card" style="width: 18rem">
            <ul class="list-group list-group-flush">
              <li class="list-group-item">
                <strong>Casa Rishmague</strong>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="col-sm-12 col-md-4">
        <div class="card" style="width: 18rem">
          <img
            src="../assets/fotoArq/casa_lopez.jpg"
            class="card-img-top"
            alt="Casa Perez"
          />
          <div class="card" style="width: 18rem">
            <ul class="list-group list-group-flush">
              <li class="list-group-item">
                <strong>Casa Lopez</strong>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Arquitectura",
  data() {
    return {
      slide: 0,
      sliding: null,
    };
  },
  methods: {
    onSlideStart(slide) {
      this.sliding = true;
      console.log(slide);
    },
    onSlideEnd(slide) {
      this.sliding = false;
      console.log(slide);
    },
  },
};
</script>
<style>
h3.lema {
  text-align: center;
  font-size: 2.2rem;
  font-weight: 600;
}
h5.texto {
  font-size: 0.85rem;
  font-weight: 400;
}
img.card-img-top {
  width: 100%;
}
</style>