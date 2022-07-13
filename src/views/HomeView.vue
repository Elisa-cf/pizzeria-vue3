<template>
  <HeroHeader />
  <Quote name="Elisa" age="15" />
  <IntroResto />
</template>

<script>
import IntroResto from "../components/IntroResto.vue";
import Quote from "../components/Quote.vue";
import HeroHeader from "../components/HeroHeader.vue";

export default {
  name: "HomeView",
  components: {
    IntroResto,
    Quote,
    HeroHeader,
  },
};
</script>

<style>
/* you can scoped or do the selector more specific like .modal h1 instead of h1 */
</style>