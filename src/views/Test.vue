<template>
  <div id="inicio" class="container">
    <div class="row mt-5">
      <div class="col text-success text-center">
        <h1>¿Tienes el síndrome del impostor? ¡Descúbrelo aquí!</h1>
      </div>
    </div>
    <div class="row mt-5">
      <div
        v-for="pregunta in test"
        :key="pregunta.id"
        class="col-12 col-md-6 mb-3 gap-2"
      >
        <div class="d-flex gap-2">
          <h2 class="text-success">{{ pregunta.id }}</h2>
          <h5>
            {{ pregunta.texto }}
          </h5>
        </div>
        <div>
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
      <div class="d-flex justify-content-end my-3">
        <button
          class="btn btn-success"
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
