<template>
  <div class="col-sm-12">
    <div class="ms-2 me-auto">
      <div class="fw-bold">Nombre: {{ user.name }}</div>
      Email: {{ user.email }} <br />
      Sitio web: {{ user.website }} <br />
      Telefono: {{ user.phone }} <br />

      <router-link
        :to="{
          name: 'posts',
          params: {
            id: user.id,
          },
        }"
      >
        <a type="button" class="btn btn-outline-dark btn-sm">
          Post del usuario
        </a>
      </router-link>
    </div>
  </div>
</template>

<script>
import {} from "vuex";

export default {
  props: ["user"],
  methods: {},
};
</script>
