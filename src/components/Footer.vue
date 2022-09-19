<template>
  <div class="container-fluid bg-success footer">
    <div class="row h-100 p-3 justify-content-between align-items-center">
      <div class="col-12 col-md-6 text-center text-md-start">
        <img :src="logo" alt="logo" />
      </div>
      <div class="col text-white text-end">
        <span>&copy;2022 - Todos los derechos reservados</span>
      </div>
    </div>
  </div>
</template>

<script setup>
import logo from "../assets/logorolling.png";
</script>

<style scoped>
.footer {
  min-height: 150px;
}
img {
  width: 150px;
}
</style>
