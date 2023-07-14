<template>
  <div
    id="carousel"
    class="carousel slide carousel-fade"
    data-bs-ride="carousel"
    data-bs-pause="off"
  >
    <div class="carousel-inner">
      <div class="carousel-item active">
        <img :src="imagen1" class="d-block w-100" alt="..." />
      </div>
      <div class="carousel-item">
        <img :src="imagen2" class="d-block w-100" alt="..." />
      </div>
      <div class="carousel-item">
        <img :src="imagen3" class="d-block w-100" alt="..." />
      </div>
    </div>
  </div>
  <section class="mt-4">
    <div class="container">
      <div class="row">
        <div class="col text-center">
          <h1>¿Tienes el síndrome del impostor?🤔</h1>
        </div>
      </div>
      <div class="row">
        <div class="col-12 col-md-8 offset-md-2 col-lg-6 offset-lg-3 mt-3">
          <p>
            ¿Sabías que<span class="text-success">
              7 de cada 10 personas sufren el síndrome del impostor?</span
            >
            Lo cierto es que se trata de un trastorno psicológico que es mucho
            más común de lo que parece.
          </p>
          <p>
            De hecho,
            <span class="fw-bold"
              >si tiendes a no reconocer tus propios logros, o bien a desmerecer
              el empeño y el esfuerzo</span
            >
            que has puesto en ellos bajo la creencia de que no los mereces y los
            atribuyes a golpes de suerte, es muy probable que lo estés
            padeciendo.
          </p>
          <p>
            ¿Quieres saber qué es exactamente el síndrome del impostor, cuáles
            son sus posibles causas y los tipos de comportamientos que existen y
            cómo puedes aprender a manejarlos? Te lo contamos.
          </p>

          <h3>¿Qué es el síndrome del impostor?</h3>
          <p>
            <span class="fw-bold">El síndrome del impostor</span> es un fenómeno
            psicológico que hace que aquellas personas que lo padecen sientan
            que nunca se encuentran a la altura de las circunstancias o que sean
            incapaces de aceptar que merecen lo que han obtenido como fruto de
            su trabajo.
          </p>
          <h3>Descubre con este test si padeces el síndrome del impostor</h3>
          <p>
            Si crees que tienes síntomas relacionados con este trastorno,
            <span class="fw-bold">te invitamos a realizar este test</span> para
            saber si sufres el síndrome del impostor y en qué grado.
          </p>
          <div class="d-grid my-3">
            <router-link class="btn btn-success" to="/test">
              ¿Tienes el síndrome del impostor? <br /><b
                >Descúbrelo aquí</b
              ></router-link
            >
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import imagen1 from "../assets/01.jpg";
import imagen2 from "../assets/02.jpg";

import imagen3 from "../assets/03.jpg";
</script>

<style scoped>
#carousel .carousel-inner img {
  height: 400px;
  object-fit: cover;
  object-position: top;
}
</style>
