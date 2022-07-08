<template>
  <nav>
    <div class="main-nav">
      <Logo @toggleNav="toggleNavCallback" />
      <div class="links-container">
        <ul class="links" ref="navBarLinks">
          <li v-for="route in routes" :key="route.path">
            <router-link :to="route.path">{{ route.name }}</router-link>
          </li>
        </ul>
      </div>
      <NavBarIcons />
    </div>
  </nav>
  <router-view />
  <NewsLetter />
  <Footer />
</template>
<script>
import NavBarIcons from "./components/NavBarIcons.vue";
import NewsLetter from "./components/NewsLetter.vue";
import Footer from "./components/Footer.vue";
import Logo from "./components/Logo.vue";

import { routes } from "./router";

export default {
  name: "App",
  components: { NavBarIcons, NewsLetter, Footer, Logo },

  data() {
    return {
      routes,
    };
  },
  methods: {
    toggleNavCallback() {
      const display = this.$refs.navBarLinks.style.display;
      this.$refs.navBarLinks.style.display =
        display === "block" ? "none" : "block";
    },
  },
};
</script>
<style>
.main-nav {
  background-color: rgba(11, 16, 21, 0.9);
}

.links a {
  font-size: 19px;
  text-transform: capitalize;
  letter-spacing: 0.1rem;
  display: block;
  padding: 0.5rem 1rem;
  transition: all 0.3s linear;
  color: white;
  font-weight: bold;
  text-decoration: none;
}
.links a:hover {
  color: white;
  padding-left: 1.5rem;
}
.links a:visited {
  list-style: none;
}
.links-container {
  height: 1;
  overflow: hidden;
  transition: all 0.3s linear;
}
.show-container {
  height: 10rem;
}
.cart-btn-wrapper {
  display: none;
}
@media screen and (min-width: 900px) {
  .main-nav {
    display: grid;
    grid-template-columns: auto 1fr auto;
    align-items: center;
    padding: 1rem;
  }

  .links-container {
    height: auto !important;
  }
  .links {
    display: flex;
    justify-content: center;
    text-align: center;
    list-style: none;
  }
  .links a {
    padding: 0.5rem;
    margin: 0 0.5rem;
    text-decoration: none;
    font-size: 25px;
  }
  .links a:hover {
    padding: 0;
    background: transparent;
  }
  .cart-btn-wrapper {
    display: flex;
    align-items: stretch;
    justify-items: start;
  }
}

@media screen and (max-width: 900px) {
  .links {
    display: none;
  }
}
</style>
