<template>
  <div class="container-fluid bg-success">
    <div
      class="row h-100 p-3 justify-content-between align-items-center footer"
    >
      <div class="col-12 col-md-6 text-center text-md-start">
        <img :src="logo" alt="logo" />
      </div>
      <div class="col text-white text-center text-md-end">
        <span>&copy;{{ anio }} - Todos los derechos reservados</span>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import logo from "../assets/logorolling.png";
const anio = ref(new Date().getFullYear());
</script>

<style scoped>
.footer {
  min-height: 150px;
}
img {
  width: 150px;
}
</style>
