<template>
  <div class="container">
    <PokemonList />
  </div>
</template>

<script>
import PokemonList from "../components/PokemonList";

export default {
  name: "PageIndex",
  components: {
    PokemonList,
  },
};
</script>
