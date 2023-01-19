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
      axios.get(`${this.apiUrl}/api/call`).then((response) => {
        this.projects = response.data.results;
      });
    },
  },
};
</script>

<template>
  <div class="container">
    <div class="row row-cols-4">
      <div class="col" v-for="project in projects" :key="project.id">
        <div class="card">
          <img class="card-img-top" src="..." alt="Card image cap" />
          <div class="card-body">
            <h5 class="card-title">{{ project.title }}</h5>
            <p class="card-text">
              Descrizione:
              {{ project.description }}
            </p>
            <p class="card-text">
              Realizzato il
              {{ project.production_date }}
            </p>
            <p>
              Linguaggi utilizzati:
              <ul>

                  <li v-for="tech in project.technologies"
                    >{{ tech.technology_name }}
                  </li>
              </ul>
            </p>
            <p>
                <p>
                    Tipo di progetto: {{ project.type ? project.type.project_type : 'Nessuna tipologia' }}
                </p>
            </p>
            <a href="#" class="btn btn-primary">Mostra</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
