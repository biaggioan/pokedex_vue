<template>
  <div class="list">
    <article v-for="(pokemon, index) in pokemons" :key="'poke' + index">
      <a :href="'/#/pokemon/' + pokemon.id">
        <img
          :src="
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/' +
            pokemon.id +
            '.png'
          "
          width="100"
          height="100"
        />
        <h3>{{ pokemon.name }}</h3>
      </a>
    </article>
  </div>
</template>

<script>
import api from "../../services/api";

export default {
  name: "PokemonList",
  props: [],
  data: () => {
    return {
      pokemons: [],
    };
  },
  methods: {
    fetchData() {
      api
        .get("/pokemon/")
        .then((response) => {
          // handle success
          console.log(response);
          let data = response.data;

          data.results.forEach((pokemon) => {
            pokemon.id = pokemon.url
              .split("/")
              .filter(function (part) {
                return part;
              })
              .pop();

            this.pokemons.push(pokemon);
          });
        })
        .catch((error) => {
          // handle error
          console.log(error);
        })
        .then(() => {
          // always executed
        });
    },
  },
  created() {
    this.fetchData();
  },
};
</script>

<style>
.list {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  grid-gap: 10px;
  width: 100%;
  max-width: 80vw;
  margin: auto;
  padding-top: 1rem;
}

.list article {
  height: 160px;
  background-color: #efefef;
  text-align: center;
  text-transform: capitalize;
  border-radius: 5px;
  cursor: pointer;
  box-shadow: 0 15px 30px rgba(0, 0, 0, 0.2), 0 10px 10px rgba(0, 0, 0, 0.2);
  padding: 0.5rem;
}

.list article a {
  text-decoration: none !important;
  color: black;
}

.list article h3 {
  margin: 0;
  font-size: 1.5rem;
}
</style>
