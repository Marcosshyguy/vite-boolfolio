<script>
import AppProjectGrid from "./components/AppProjectGrid.vue";
import AppHeader from "./partials/AppHeader.vue";
export default {
  data() {
    return {};
  },
  components: {
    AppProjectGrid,
    AppHeader,
  },
  props: {},
  methods: {},
  created() {},
};
</script>

<template>
  <AppHeader />
  <main>
    <AppProjectGrid />
  </main>
</template>

<style lang="scss">
@use "./style/general.scss" as *;
</style>
