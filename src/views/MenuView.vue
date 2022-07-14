<template>
  <MenuCategoryFilter
    :filterCategories="filterCategories"
    :search="search"
    filteredCategories="filteredCategories"
  />
  <MenuCards :cardsMenu="cardsMenu" />
  <!-- <MenuCategoryFilter
    filteredCategories="filteredCategories" 
  /> -->
  <!-- <MenuCards :cardsMenu="filteredCategories" /> -->
</template>
<script>
import MenuCategoryFilter from "../components/MenuCategoryFilter.vue";
import MenuCards from "../components/MenuCards.vue";
import data from "../assets/data.js";

export default {
  name: "MenuView",
  components: {
    MenuCategoryFilter,
    MenuCards,
  },
  data() {
    return {
      cardsMenu: data,
    };
  },
  /*str: "",
      type: "",
    };
  },
  computed: {
    filteredCategories: {
      get() {
        return this.cardsMenu;
      },
      set() {
        this.cardsMenu = data;
        const results = this.cardsMenu.filter((cardMenu) => {
          if (this.type === "filter") {
            return cardMenu.category === this.str;
          } else {
            return cardMenu.title
              .toLowerCase()
              .includes(this.str.toLowerCase());
          }
        });
        this.cardsMenu = results;
      },
    },
  },*/
  methods: {
    filterCategories(catName) {
      this.resetCardsMenu();
      if (catName !== "All") {
        this.cardsMenu = this.cardsMenu.filter((cardMenu) => {
          return cardMenu.category === catName;
        });
      }
    },
    search(term) {
      this.resetCardsMenu();
      this.cardsMenu = this.cardsMenu.filter((cardMenu) => {
        return cardMenu.title.toLowerCase().includes(term.toLowerCase());
      });
    },
    resetCardsMenu() {
      this.cardsMenu = data;
    },
  },
};
</script>
<style scoped>
</style>