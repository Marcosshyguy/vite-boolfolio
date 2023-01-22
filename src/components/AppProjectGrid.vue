<script>
import axios from "axios";
import AppProjectCard from "./AppProjectCard.vue";
import AppGridButtons from "./AppGridButtons.vue";
export default {
  name: "AppProjectGrid",
  data() {
    return {
      apiUrl: "http://127.0.0.1:8000",
      projects: [],
      currentPage: 1,
      lastPage: null,
      totalPages: null,
    };
  },
  components: {
    AppProjectCard,
    AppGridButtons,
  },
  props: {},
  created() {
    this.getProjects(this.currentPage);
  },
  methods: {
    getProjects(page) {
      axios
        .get(`http://127.0.0.1:8000/api/call`, {
          params: {
            page,
          },
        })
        .then((response) => {
          this.projects = response.data.results.data;
          this.currentPage = response.data.results.current_page;
          this.lastPage = response.data.results.last_page;
          this.totalPages = response.data.results.total;
          console.log(this.currentPage, this.totalPage, this.lastPage);
        });
    },
  },
  computed: {},
};
</script>

<template>
  <div class="container">
    <div class="row row-cols-2 row-cols-md-4 row-cols-lg-4">
      <div class="col" v-for="project in projects" :key="project.id">
        <AppProjectCard :element="project" />
      </div>
    </div>
    <AppGridButtons
      :currentPage="currentPage"
      :lastPage="lastPage"
      :totalPages="totalPages"
      @moveProject="getProjects"
    />
  </div>
</template>

<style lang="scss" scoped></style>
