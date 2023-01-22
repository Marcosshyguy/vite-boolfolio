<script>
export default {
  data() {
    return {};
  },
  components: {},
  props: {
    currentPage: Number,
    totalPages: Number,
    lastPage: Number,
  },
  methods: {},
  created() {},
};
</script>

<template>
  <div class="d-flex justify-content-center mt-4">
    <!-- to get the previus or the next pages need to use the same get action in getProjects and modify the currentPage variable
    and then put a disabled attribute if there are no more pages to display   -->
    <div>
      <a
        @click.prevent="$emit('moveProject', currentPage === 1)"
        :disabled="currentPage === 1"
        class="btn btn-primary d-inline-block"
        :class="currentPage === 1 ? 'disabled' : ''"
      >
        <i class="fa-solid fa-angles-left"></i>
      </a>
      <a
        @click.prevent="$emit('moveProject', currentPage - 1)"
        :disabled="currentPage === 1"
        class="btn btn-primary d-inline-block mx-2"
        :class="currentPage === 1 ? 'disabled' : ''"
      >
        <i class="fa-solid fa-angle-left"></i>
      </a>
      <span>Pagina {{ currentPage }} di {{ lastPage }} </span>
      <a
        @click.prevent="$emit('moveProject', currentPage + 1)"
        :disabled="lastPage"
        class="btn btn-primary d-inline-block mx-2"
        :class="{ disabled: currentPage === lastPage }"
      >
        <i class="fa-solid fa-angle-right"></i>
      </a>
      <a
        @click.prevent="$emit('moveProject', lastPage)"
        :disabled="lastPage"
        class="btn btn-primary d-inline-block"
        :class="currentPage === lastPage ? 'disabled' : ''"
      >
        <i class="fa-solid fa-angles-right"></i>
      </a>
    </div>
  </div>
</template>

<style lang="scss"></style>
