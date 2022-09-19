<template>
  <div class="container">
    <div class="row mt-4">
      <div class="col text-success text-center">
        <h1>Resultado de tu último test</h1>
      </div>
    </div>
    <div class="row mt-5">
      <div class="col">
        <div v-if="resultados.length > 0" class="card mb-3">
          <div class="row g-0">
            <div class="col-md-4">
              <img
                :src="datos.imagen"
                class="img-fluid imagen-card"
                alt="Imagen de test"
              />
            </div>
            <div class="col-md-8">
              <div class="card-body">
                <h5 class="card-title text-success">{{ datos.resultado }}</h5>
                <p class="card-text fw-bold">
                  {{ datos.mensaje }}
                </p>
                <p>{{ datos.detalle }}</p>
                <div class="d-flex justify-content-end">
                  <router-link to="/test" class="btn btn-success"
                    >Intentar de nuevo</router-link
                  >
                </div>
              </div>
            </div>
          </div>
        </div>
        <div v-else>
          <h3>No se encontraron datos</h3>
          <router-link to="/" class="btn btn-success">Volver</router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref } from "@vue/runtime-core";
import resultado from "../resultado.json";

const resultados = JSON.parse(localStorage.getItem("resultados")) || [];
let opcionA = 0;
let opcionB = 0;
let opcionC = 0;
let opcionD = 0;
let arrayResultado = [];
const datos = ref({});

const obtenerResultado = () => {
  resultados.forEach((opcion) => {
    switch (opcion.valor) {
      case "A":
        opcionA += 1;
        break;
      case "B":
        opcionB += 1;
        break;
      case "C":
        opcionC += 1;
        break;
      case "D":
        opcionD += 1;
        break;
    }
  });
  arrayResultado.push(
    { opcion: "A", cantidad: opcionA },
    { opcion: "B", cantidad: opcionB },
    { opcion: "C", cantidad: opcionC },
    { opcion: "D", cantidad: opcionD }
  );
  let mostrar = arrayResultado.sort((a, b) => a.cantidad - b.cantidad);
  console.log(mostrar[3]);

  if (mostrar[3].opcion === "A") {
    datos.value = resultado.find((item) => {
      return item.id === 1;
    });
  }
  if (mostrar[3].opcion === "B" || mostrar[3].opcion === "C") {
    datos.value = resultado.find((item) => {
      return item.id === 2;
    });
  }
  if (mostrar[3].opcion === "D") {
    datos.value = resultado.find((item) => {
      return item.id === 3;
    });
  }
};

onMounted(() => {
  obtenerResultado();
});
</script>

<style scoped>
.imagen-card {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>
