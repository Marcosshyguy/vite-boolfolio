<script>
import AppCurriculum from "../components/AppCurriculum.vue";

export default {
  name: "AppHeader",
  data() {
    return {};
  },
  components: {},
  props: {},
  methods: {
    goToCurriculum() {
      this.$router.push({ name: "curriculum" });
    },
  },
  created() {},
};
</script>

<template>
  <header class="p-3 bg-dark text-white">
    <div class="container">
      <div
        class="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start"
      >
        <ul
          class="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0"
        >
          <li>
            <router-link
              :to="{ name: 'project' }"
              class="nav-link px-2"
              aria-current="page"
              :class="$route.name === 'project' ? 'text-white' : 'text-success'"
            >
              Progetti</router-link
            >
          </li>
          <li>
            <router-link
              :to="{ name: 'curriculum' }"
              class="nav-link px-2"
              aria-current="page"
              :class="
                $route.name === 'curriculum' ? 'text-white' : 'text-success'
              "
            >
              <!-- @click="goToCurriculum" -->
              Curriculum</router-link
            >
          </li>
        </ul>

        <form class="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3">
          <input
            type="search"
            class="form-control form-control-dark"
            placeholder="Search..."
            aria-label="Search"
          />
        </form>
      </div>
    </div>
  </header>
</template>

<style lang="scss" scoped></style>
