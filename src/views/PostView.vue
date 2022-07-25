<template>
  <div class="container">
    <div class="col s12">
      <div class="col s12">
        <h3 class="bold center"><strong>Posts</strong></h3>
      </div>

      <form class="row g-3" @submit.prevent="obtenerPosts(idUsuario)">
        <div class="col-auto">
          <label for="inputUser" class="visually-hidden">ID de usuario</label>
          <input
            type="number"
            min="1"
            max="10"
            placeholder="id de usuario"
            v-model="idUsuario"
            required
          />
        </div>
        <div class="col-auto">
          <input class="form-submit" type="submit" value="Confimar" />
        </div>
      </form>

      <div class="row row-cols-1 row-cols-md-2 g-4">
        <div v-for="(post, index) in posts" :key="index">
          <PostU :post="post" />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import {} from "vuex";
import PostU from "../components/PostU.vue";

export default {
  components: { PostU },
  data() {
    return {
      idUsuario: "",
    };
  },
  created() {
    this.obtenerPosts(this.$route.params.id);
  },

  computed: {
    posts() {
      return this.$store.getters.getPosts;
    },
  },

  methods: {
    obtenerPosts(idUsuario) {
      this.$store.dispatch("fetchPost", { id: idUsuario });
    },
  },
};
</script>
