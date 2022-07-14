<template>
  <section
    v-for="cardMenu in cardsMenu"
    :key="cardMenu.id"
    class="section-center"
  >
    <article class="menu-item">
      <img :src="cardMenu.img" class="photo" />
      <div class="item-info">
        <header>
          <h4>{{ cardMenu.title }}</h4>
          <h4 class="price">{{ cardMenu.price }}€</h4>
        </header>
        <p class="item-text">
          {{ cardMenu.desc }}
        </p>
      </div>
      <button>Add To Cart</button>
    </article>
  </section>
</template>

<script>
export default {
  name: "MenuCards",
  props: ["cardsMenu"],
  data() {
    return {
      pizzeriaImage6:
        "https://cdn.pixabay.com/photo/2017/12/05/20/10/pizza-3000285__480.png",
    };
  },
};
</script>

<style>
.menu {
  padding: 2rem 0;
}

.title {
  text-align: center;
  margin-bottom: 2rem;
}

.underline {
  width: 5rem;
  height: 0.25rem;
  background: #ffc500;
  margin-left: auto;
  margin-right: auto;
}

.section-center {
  width: 90vw;
  margin: 0 auto;
  max-width: 1170px;
  display: grid;
  justify-items: center;
}

.menu-item {
  display: grid;
  gap: 1rem 2rem;
  max-width: 25rem;
}

.photo {
  object-fit: cover;
  height: 200px;
  width: 100%;
  border: 0.25rem solid #ffc500;
  border-radius: 0.25rem;
  display: block;
  background-color: #0b1015;
}

.item-info header {
  display: flex;
  justify-content: space-between;
  border-bottom: 0.5px dotted #0b1015;
}

.item-info h4 {
  margin-bottom: 0.5rem;
}

.price {
  color: 5;
}

.item-text {
  margin-bottom: 0;
  padding-top: 1rem;
}

@media screen and (min-width: 768px) {
  .menu-item {
    grid-template-columns: 225px 1fr;
    gap: 0 1.25rem;
    max-width: 40rem;
  }

  .photo {
    height: 175px;
  }
}

@media screen and (min-width: 1200px) {
  .section-center {
    width: 95vw;
    grid-template-columns: 2 1fr;
    gap: 3rem 2rem;
  }

  .menu-item {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: 1fr;
    grid-column-gap: 25px;
    grid-row-gap: px;
  }

  .photo {
    height: 150px;
  }
}
</style>