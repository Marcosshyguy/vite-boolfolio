<script>
export default {
  data() {
    return { apiUrl: "http://127.0.0.1:8000" };
  },
  components: {},
  props: { element: Object },
  methods: {
    trunkString(string) {
      if (string.length > 40) {
        return string.substring(0, 20) + "...";
      } else {
        return string;
      }
    },
  },
  created() {},
};
</script>

<template>
  <div class="card">
    <img
      class="card-img-top sm-d-none"
      :src="`${apiUrl}/storage/${element.new_image}`"
      :alt="`${element.title}-image`"
    />
    <div class="card-body">
      <h5 class="card-title">{{ element.title }}</h5>
      <p class="card-text">
        Descrizione:
        {{ trunkString(element.description) }}
      </p>
      <p class="card-text">
        Realizzato il
        {{ element.production_date }}
      </p>
      <p v-if="element.technologies.length === 0">
        Linguaggi utilizzati: Non selezionati
      </p>
      <div v-else>
        <p>Linguaggi utilizzati:</p>
        <ul>
          <li v-for="tech in element.technologies">
            {{ tech.technology_name }}
          </li>
        </ul>
      </div>

      <p>
        <!-- used ternary in order to avoid error due to the null value that could occur in element.type-->
        Tipo di progetto:
        {{ element.type ? element.type.project_type : "Nessuna tipologia" }}
      </p>

      <a href="#" class="btn btn-primary">Mostra</a>
    </div>
  </div>
</template>

<style lang="scss"></style>
