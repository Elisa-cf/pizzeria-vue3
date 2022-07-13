<template>
  <div class="section-center">
    <article>
      <div class="resto-title">
        <h2>Experience authentic Italy and taste wood-fired pizzas</h2>
        <p>
          At la Pizzeria Grande we prepare all our dishes with the best
          products, without losing the essence of tradition of our land.
          Throughout our menu you will find a wide variety of authentic dishes,
          original regional suggestions that will surprise and captivate you.
        </p>
      </div>
    </article>
    <article>
      <img :src="pizzeriaImage5" class="main-img" />
    </article>
  </div>
</template>

<script>
export default {
  name: "AboutResto",
  data() {
    return {
      pizzeriaImage5:
        "https://images.pexels.com/photos/1049626/pexels-photo-1049626.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    };
  },
};
</script>

<style scoped >
.section-center {
  width: 90vw;
  margin: 0 auto;
  max-width: 1170px;
  display: flex;
  flex-direction: column;
}

h2 {
  margin-bottom: 1.4rem;
}
p {
  max-width: 45em;
  text-align: start;
}
.main-img {
  width: 100%;
  height: 300px;
  position: relative;
  display: block;
  object-fit: cover;
  /* margin: 2rem 0rem; */
}
@media (min-width: 900px) {
  .section-center {
    align-items: center;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 3rem;
    margin: 0 auto;
  }

  h2 {
    margin-bottom: 2rem;
    font-size: 2.5rem;
  }
  p {
    font-size: 1.4rem;
  }
}
</style>