<template>
  <div class="container">
    <div class="col s12">
      <div class="col s12">
        <h3 class="bold center"><strong>USUARIOS</strong></h3>
      </div>
      <div class="row">
        <ol class="list-group list-group-flush">
          <div v-for="(usuario, index) in getUsers" :key="index">
            <li class="list-group-item d-flex list-group-item-light">
              <User :user="usuario" />
            </li>
          </div>
        </ol>
      </div>
    </div>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
import User from "../components/UserP.vue";

export default {
  components: { User },
  data() {
    return {};
  },
  created() {
    this.$store.dispatch("fetchUsers");
  },

  computed: {
    //return this.$store.getters.getUsers;
    ...mapGetters(["getUsers"]),
  },

  methods: {},
};
</script>
