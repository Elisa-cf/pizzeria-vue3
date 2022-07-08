<template>
  <div class="hero-container">
    <!-- add navigation menu -->
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
  <section class="wrapper-quote">
    <blockquote>
      I had a dream, to bring back the flavours, sensations and smells of
      southernof Italy to Munich
    </blockquote>
    <hr />
  </section>
  <!-- <div class="article-wrapper">
    <article>
      <h1>Original dishes, with the most authentic Italian flavour.</h1>
      <p>
        An extensive menu with authentic dishes but with our own touch of
        fantasy and originality is what allows us to surprise our guests on
        every visit. It doesn't matter if you fancy pizza, one of our many
        starters or a delicious pasta. We are always ready to give our best in
        every dish.
      </p>
      <router-link :to="{ name: 'menu' }">
        <button class="btn">our menu</button></router-link
      >
    </article>
    <div class="img-container">
      <img :src="pizzeriaImage1" class="main-img" />
    </div>

    <article>
      <h1>We will simply make you fall in love with our pizzas.</h1>
      <p>
        If you already know us, we are sure that you won't let much time pass
        before your next visit and we are looking forward to making you fall in
        love with us a little more. If you have not yet come to try our dishes,
        we invite you to do so and let us make you travel through the senses.
      </p>
      <router-link :to="{ name: 'about' }">
        <button class="btn">our story</button>
      </router-link>
    </article>
    <div class="img-container">
      <img :src="pizzeriaImage2" class="main-img" />
    </div>
  </div> -->
  <IntroResto />
</template>

<script>
import IntroResto from "../components/IntroResto.vue";
import Button from "../components/Button.vue";

export default {
  name: "HomeView",
  components: {
    IntroResto,
    Button,
  },
};
</script>

<style scoped>
/* you can scoped or do the selector more specific like .modal h1 instead of h1 */
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

@media screen and (min-width: 450px) {
  /* hero content ends */

  /* quote content start */
  .wrapper-quote {
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    color: #0b1015;
    margin: 4rem auto;
    width: 90%;
  }

  @media screen and (min-width: 768px) {
    .wrapper-quote {
      width: 80%;
    }
  }
  @media screen and (min-width: 1024px) {
    .wrapper-quote {
      width: 55%;
    }
  }
  blockquote::before {
    content: open-quote;
  }
  blockquote::after {
    content: close-quote;
  }
  blockquote {
    quotes: "“" "”" "“" "”";
    font-size: 30px;
    font-weight: bold;
    padding-bottom: 20px;
    text-align: center;
  }
  @media screen and (min-width: 450px) {
    blockquote {
      font-size: 35px;
    }
  }
  @media screen and (min-width: 800px) {
    blockquote {
      font-size: 40px;
    }
  }
  @media screen and (min-width: 1024px) {
    blockquote {
      font-size: 45px;
    }
  }
  hr {
    border: none;
    height: 20px;
    max-width: 80%;
    height: 50px;
    margin-top: 0;
    box-shadow: 0 20px 20px -20px #333;
    margin: -50px auto 10px;
  }
  /* quote content ends */

  /* intro-resto start */
  .article-wrapper {
    display: flex;
    flex-direction: column;
    margin-bottom: 2rem;
    width: 90vw;
    margin: 0 auto;
    max-width: 1170px;
  }
  p {
    max-width: 45em;
    text-align: start;
  }
  .main-img {
    width: 100%;
    max-height: 350px;
    position: relative;
    display: block;
    object-fit: cover;
    margin: 2rem 0rem;
  }
  @media (min-width: 900px) {
    .article-wrapper {
      align-items: center;
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 5rem;
    }

    h1 {
      margin-bottom: 2rem;
      font-size: 3rem;
      text-transform: capitalize;
      letter-spacing: 0.1rem;
    }

    p {
      font-size: 1.4rem;
    }
    .main-img {
      min-height: 400px;
    }
  }

  /* intro-resto ends */
}
</style>