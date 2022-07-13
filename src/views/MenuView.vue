<template>
  <MenuCategoryFilter />
  <MenuCards />
</template>
<script>
import MenuCategoryFilter from "../components/MenuCategoryFilter.vue";
import MenuCards from "../components/MenuCards.vue";

export default {
  name: "MenuView",
  components: {
    MenuCategoryFilter,
    MenuCards,
  },
};
</script>
<style scoped>
</style>