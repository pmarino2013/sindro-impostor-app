<template>
  <div class="container">
    <div class="row">
      <div class="col-12 my-4 text-center">
        <h1 class="text-success">¿Quien soy? 🤔</h1>
      </div>
      <div
        class="col-12 col-md d-flex justify-content-center align-items-center"
      >
        <div class="content-img">
          <img class="img-avatar" :src="avatar" alt="Pablo Marino" />
        </div>
      </div>
      <div class="col-12 col-md mt-3 pt-md-3 text-center text-md-start">
        <p>
          Me llamo <span class="text-success fw-bold">Pablo Marino</span>, soy
          un entusiasta del desarrollo web y me gusta todo lo relacionado con la
          tecnología. También soy mentor y academy manager en la academia de
          desarrollo
          <a
            href="https://rollingcodeschool.com"
            target="_blank"
            class="nav-link fw-bold"
            >RollingCode School</a
          >
        </p>
        <p>
          Si quieres conocer que más tengo para contar o cuales son mis
          proyectos de desarrollo te comparto mis redes y Github 😉
        </p>
        <div class="d-flex gap-3 justify-content-center mb-3">
          <a
            class="nav-link"
            href="https://twitter.com/pablomarino8"
            target="_blank"
            ><i class="fa fa-twitter-square fa-2x" aria-hidden="true"></i
          ></a>

          <a
            class="nav-link"
            href="https://www.linkedin.com/in/pablo-daniel-marino-259baba8/"
            target="_blank"
            ><i class="fa fa-linkedin-square fa-2x" aria-hidden="true"></i
          ></a>

          <a
            class="nav-link"
            href="https://github.com/pmarino2013"
            target="_blank"
            ><i class="fa fa-github-square fa-2x" aria-hidden="true"></i
          ></a>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import avatar from "../assets/avatar2023.jpeg";
</script>

<style scoped>
.img-avatar {
  width: 300px;
  border-radius: 50px;
}
p {
  font-size: 20px;
}
p a {
  display: inline-block;
}

@media (min-width: 1024px) {
  .img-avatar {
    width: 400px;
    border-radius: 50px;
  }
  p {
    font-size: 30px;
  }
}
</style>
