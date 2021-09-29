<template>
  <Loading
    v-model:active="isLoading"
    :is-full-page="fullPage"
    :transition="'fade'"
    :z-index="9999"
    :width="'200px'"
    :height="'200px'"
    :lock-scroll="true"
  />

  <div class="container-info">
    <a href="/#/" class="link-home">
      <img src="../assets/voltar.svg" />
    </a>

    <h1>
      {{ pokemonInfo.name }} <span>Nº{{ $route.params.id }}</span>
    </h1>
    <div class="row">
      <div class="col-12 col-md-6 img-container">
        <div class="pokemon-img">
          <img
            :src="
              'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/' +
              $route.params.id +
              '.png'
            "
          />
        </div>
      </div>
      <div class="col-12 col-md-6 details-container">
        <div class="row pokemon-details">
          <div class="col-6">
            <div class="detail">
              <p class="detail-name">Height:</p>
              <p class="detail-info">{{ pokemonInfo.height / 10 }} m</p>
            </div>
            <div class="detail">
              <p class="detail-name">Weight:</p>
              <p class="detail-info">{{ pokemonInfo.weight / 10 }} kg</p>
            </div>
          </div>
          <div class="col-6"></div>
        </div>
        <p class="title">Type:</p>
        <div class="types-list">
          <article
            v-for="(type, index) in pokemonInfo.types"
            :key="'type' + index"
          >
            <Type :name="type.type.name" />
          </article>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import api from "../services/api";
import Loading from "vue-loading-overlay";

import Type from "../components/Type";

export default {
  name: "Pokemon Info",
  propos: ["id"],
  components: { Type, Loading },
  data: () => {
    return {
      pokemonInfo: {},
      isLoading: true,
      fullPage: true,
    };
  },
  methods: {
    fetchData(id) {
      api
        .get("/pokemon/" + id)
        .then((response) => {
          // handle success
          let data = response.data;
          this.pokemonInfo = data;

          console.log(data);
        })
        .catch((error) => {
          // handle error
          console.log(error);
        })
        .then(() => {
          this.isLoading = false;
        });
    },
  },
  created() {
    this.fetchData(this.$route.params.id);
  },
};
</script>

<style>
/* general */
p {
  margin: 0;
}

.container-info {
  width: 90%;
  max-width: 800px;
  margin: auto;
  padding-top: 0.5rem;
}

h1 {
  margin: 0;
  font-size: 2.5rem;
  text-transform: capitalize;
  text-align: center;
  font-weight: 400;
}

h1 span {
  color: #828282;
}

.link-home {
  text-decoration: none !important;
  color: black;
}

.link-home img {
  width: 40px;
}

/* image */
.img-container img {
  max-width: 100%;
}

.img-container {
  background: #e6e6e6;
  border-radius: 12px;
}

/* details */
.details-container {
  padding: 0 1rem;
}

.pokemon-details {
  margin-top: 0.5rem;
  padding: 1rem;
  background: #30a7d7;
  border-radius: 10px;
}

.detail-name {
  color: white;
  font-size: 0.9rem;
}

.detail-info {
  font-size: 1rem;
  margin-top: 0.3rem;
}

/* types  */
.types-list {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 10px;
  width: 100%;
}

.title {
  font-size: 1.2rem;
  margin: 0.7rem 0;
}
</style>
