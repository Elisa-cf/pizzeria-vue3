<template>
  <div class="nav-header">
    <router-link :to="{ name: 'home' }">
      <h1 class="logo">Pizzeria grande</h1>
    </router-link>
    <button class="nav-toggle" @click="toggleNav">
      <font-awesome-icon icon="fa-solid fa-bars" />
    </button>
  </div>
</template>

<script>
export default {
  methods: {
    toggleNav(event) {
      this.$emit("toggleNav");
    },
  },
};
</script>

<style>
.nav-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem;
}
.nav-toggle {
  font-size: 2rem;
  color: white;
  background: transparent;
  border-color: transparent;
  transition: all 0.3s linear;
  cursor: pointer;
}
.nav-toggle:hover {
  color: white;
  transform: rotate(90deg);
}
@media screen and (min-width: 900px) {
  .nav-header {
    padding: 0;
  }
  .nav-toggle {
    display: none;
  }
}
.logo {
  display: flex;
  align-items: center;
  text-decoration: none;
  text-transform: capitalize;

  font-family: "Playball", cursive;
  font-size: 1.8rem;
  color: white;
}

a:link {
  text-decoration: none;
}

a:visited {
  text-decoration: none;
}

@media screen and (min-width: 450px) {
  .logo {
    font-size: 2.3rem;
  }
}
@media screen and (min-width: 1000px) {
  .logo {
    font-size: 2.8rem;
  }
}
</style>