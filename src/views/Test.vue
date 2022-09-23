<template>
  <div id="inicio" class="container">
    <div class="row mt-5">
      <div class="col text-success text-center">
        <h1>¿Tienes el síndrome del impostor? ¡Descúbrelo aquí!</h1>
      </div>
    </div>
    <div class="row row-cols-1 row-cols-md-2 mt-2 mt-md-3 g-4">
      <div class="col" v-for="pregunta in test" :key="pregunta.id">
        <div class="card h-100 p-0">
          <div class="card-header bg-success text-white h-100">
            <div class="d-flex gap-2">
              <h2 class="fs-1">{{ pregunta.id }}</h2>
              <h5 class="m-0">
                {{ pregunta.texto }}
              </h5>
            </div>
          </div>
          <div class="card-body">
            <div
              v-for="option in pregunta.opciones"
              :key="option.opcion"
              class="form-check"
            >
              <input
                class="form-check-input"
                type="radio"
                :name="pregunta.id"
                :value="option.opcion"
                @change="guardarRespuesta"
              />
              <label class="form-check-label d-flex gap-2">
                <h5>{{ option.opcion }}</h5>
                <span>{{ option.valor }}</span>
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="d-flex justify-content-end my-3">
        <button
          class="btn btn-success btn-lg"
          @click="verResultado"
          :disabled="resultados.length < 8"
        >
          Ver resultado
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import router from "../router";
import test from "../test.json";
console.log(test);
const resultados = ref([]);

const guardarRespuesta = (event) => {
  // console.log({ [event.target.name]: event.target.value });
  const coincidencia = resultados.value.findIndex((item) => {
    return item.opcion === event.target.name;
  });

  if (coincidencia > -1) {
    const nuevoValor = {
      opcion: event.target.name,
      valor: event.target.value,
    };
    resultados.value.splice(coincidencia, 1, nuevoValor);
  } else {
    // console.log(coincidencia);
    resultados.value.push({
      opcion: event.target.name,
      valor: event.target.value,
    });
  }
  console.log(resultados.value);
};

const verResultado = () => {
  localStorage.setItem("resultados", JSON.stringify(resultados.value));
  router.push("/resultado");
};
</script>

<style></style>
