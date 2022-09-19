<template>
  <video :src="publicidad" autoplay></video>
</template>

<script setup>
import publicidad from "../assets/publicidad.mp4";
</script>

<style scoped>
video {
  height: 100%;
  width: 100%;
  object-fit: cover;
}
</style>
