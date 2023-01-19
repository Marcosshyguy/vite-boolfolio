<script>
import axios from "axios";
import AppProjectCard from "./AppProjectCard.vue";
export default {
  // name: AppProjectGrid,
  data() {
    return { apiUrl: "http://127.0.0.1:8000", projects: [] };
  },
  components: {
    AppProjectCard,
  },
  props: {},
  created() {
    this.getProjects();
  },
  methods: {
    getProjects() {
      axios.get(`${this.apiUrl}/api/call`).then((response) => {
        this.projects = response.data.results;
      });
    },
  },
};
</script>

<template>
  <div class="container">
    <div class="row row-cols-2 row-cols-md-4 row-cols-lg-4">
      <div class="col" v-for="project in projects" :key="project.id">
        <AppProjectCard :element="project" />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
