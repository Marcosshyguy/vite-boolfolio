<script>
import axios from "axios";
export default {
  data() {
    return { apiUrl: "http://127.0.0.1:8000", projects: [] };
  },
  components() {},
  props: {},
  created() {
    this.getProjects();
  },
  methods: {
    getProjects() {
      axios.get(`${this.apiUrl}/api/call`).then((resp) => {
        this.projects = resp.data.results;
      });
    },
  },
};
</script>

<template>
  <div class="container">
    <div class="row row-cols-4">
      <div class="col" v-for="project in projects" :key="project.id">
        <p>sfsdf</p>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
