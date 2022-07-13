<template>
  <ChefWord />
  <AboutResto />
</template>

<script>
import ChefWord from "../components/ChefWord.vue";
import AboutResto from "../components/AboutResto.vue";
export default {
  name: "AboutView",
  components: {
    ChefWord,
    AboutResto,
  },
};
</script>