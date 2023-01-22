<script>
import AppProjectGrid from "./components/AppProjectGrid.vue";
import AppHeader from "./partials/AppHeader.vue";
export default {
  data() {
    return {};
  },
  components: {
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
    <router-view></router-view>
  </main>
</template>

<style lang="scss">
@use "./style/general.scss" as *;
</style>
