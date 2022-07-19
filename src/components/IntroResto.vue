<template>
  <div class="article-wrapper">
    <article>
      <Button></Button>
      <h1>Original dishes, with the most authentic Italian flavour.</h1>
      <p>
        An extensive menu with authentic dishes but with our own touch of
        fantasy and originality is what allows us to surprise our guests on
        every visit. It doesn't matter if you fancy pizza, one of our many
        starters or a delicious pasta. We are always ready to give our best in
        every dish.
      </p>
      <router-link :to="{ name: 'menu' }">
        <Button>our menu</Button>
        <!-- <Button text="our menu" /> -->
      </router-link>
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
        <Button style="background-color: red"
          >our story
          <font-awesome-icon icon="fa-solid fa-heart" />
        </Button>
        <!-- <Button text="our story" /> -->
      </router-link>
    </article>
    <div class="img-container">
      <img :src="pizzeriaImage2" class="main-img" />
    </div>
  </div>
</template>

<script>
import Button from "./ReusableButton.vue";

export default {
  name: "IntroResto",
  components: {
    Button,
  },
  data() {
    return {
      pizzeriaImage1:
        "https://cdn.pixabay.com/photo/2017/10/24/16/16/pizza-2885089_1280.jpg",
      pizzeriaImage2:
        "https://cdn.pixabay.com/photo/2017/12/10/14/47/pizza-3010062_1280.jpg",
    };
  },
};
</script>

<style>
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
</style>