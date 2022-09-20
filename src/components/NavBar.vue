<template>
  <nav class="navbar bg-success sticky-top">
    <div class="container-fluid">
      <router-link
        class="navbar-brand d-flex gap-2 align-items-center text-white"
        to="/"
      >
        <img :src="logo" alt="Logo" class="d-inline-block align-text-top" />
        <span>Sindrome del impostor</span>
      </router-link>
    </div>
  </nav>
</template>

<script setup>
import logo from "../assets/favicom.png";
</script>

<style scoped>
img {
  width: 30px;
}
</style>
