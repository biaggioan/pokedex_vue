<template>
  <div :class="name + ' type'">
    <p>{{ name }}</p>
  </div>
</template>
<script>
export default {
  name: "pokemonType",
  props: ["name"],
};
</script>

<style>
.type {
  border-radius: 10px;
  padding: 0.6rem 0;
  font-size: 1rem;
  text-align: center;
  text-transform: capitalize;
  color: white;
}

.bug {
  background: #729f3f;
}

.flying {
  background: -webkit-linear-gradient(270deg, #3dc7ef 50%, #bdb9b8 50%);
}

.fire {
  background: #fd7d24;
}

.eletric {
  background: #eed535;
}

.rock {
  background: #a38c21;
}

.grass {
  background: #9bcc50;
}

.poison {
  background: #b97fc9;
}

.psychic {
  background: #f366b9;
}
</style>
