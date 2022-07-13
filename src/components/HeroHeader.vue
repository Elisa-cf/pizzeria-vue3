<template>
  <div class="hero-container">
    <section class="hero-content">
      <div class="hero-items">
        <h1>Authentic Italian Pizza</h1>
        <h3>In the heart of Munich</h3>
        <router-link :to="{ name: 'menu' }">
          <Button text="order now" />
        </router-link>
      </div>
    </section>
  </div>
</template>

<script>
import Button from "./ReusableButton.vue";
export default {
  components: {
    Button,
  },
};
</script>

<style scoped>
/* hero content start */
.hero-content {
  background: linear-gradient(to right, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.1));
  background-position: center;
  background-size: cover;
  background-image: url("../assets/hero-image.jpg");
  height: 100vh;
}
img {
  object-fit: cover;
  height: 100%;
  width: 100%;
}

.hero-items {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  text-align: center;
  height: 80vh;
  max-height: 100%;
  padding: 0 2rem;
  width: 650px;
  color: #fff;
  text-transform: uppercase;
  line-height: 1;
  font-weight: bold;
}

@media screen and (max-width: 650px) {
  .hero-items {
    width: 100%;
  }
}

.hero-items h1 {
  font-size: clamp(2.5rem, 7vw, 5rem);
  margin-bottom: 1rem;
  box-shadow: 3px 5px #e9ba23;
  letter-spacing: 3px;
  color: white;
  text-transform: capitalize;
}

h3 {
  font-size: clamp(2rem, 2.5vw, 3rem);
  margin-bottom: 2rem;
  text-transform: capitalize;
  color: white;
}
</style>