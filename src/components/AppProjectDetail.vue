<script>
import axios from "axios";
export default {
  name: "AppProjectDetail",
  data() {
    return {
      apiUrl: "http://127.0.0.1:8000",
      project: [],
    };
  },
  components: {},
  props: {},
  methods: {},
  created() {
    const slug = this.$route.params.slug;
    axios.get(`${this.apiUrl}/api/call/${slug}`).then((resp) => {
      if (resp.data.succes) {
        this.project = resp.data.result;
      } else {
        this.$router.push({ name: "project" });
      }
    });
  },
};
</script>

<template>
  <p>{{ project.title }}</p>
</template>

<style lang="scss"></style>
