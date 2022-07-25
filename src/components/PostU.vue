<template>
  <div class="col-sm-12">
    <div class="card">
      <div class="card-header"><strong>Titulo: </strong>{{ post.title }}</div>
      <div class="card-body">
        <h5 class="card-title"></h5>
        <p class="card-text">{{ post.body }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import {} from "vuex";

export default {
  props: ["post"],
  methods: {},
};
</script>
