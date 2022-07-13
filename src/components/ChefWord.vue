<template>
  <div class="main-section-center">
    <article>
      <img :src="chef" className="main-img" />
    </article>
    <article>
      <div className="chef-title">
        <h3>Chef's word</h3>
        <hr />
      </div>
      <h2>What we believe in</h2>
      <blockquote>
        You don't have to cook fancy or complicated masterpieces, just good food
        from fresh ingredients.
      </blockquote>
      <h4>Antonio Carluccio</h4>
      <h5>Chef and founder</h5>
      <p>Antonio Carluccio</p>
    </article>
  </div>
</template>

<script>
export default {
  name: "ChefWord",
  data() {
    return {
      chef: "https://images.pexels.com/photos/3814446/pexels-photo-3814446.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    };
  },
};
</script>

<style scoped>
/* .main-section-center {
  width: 90vw;
  margin: 0 auto;
  max-width: 1170px;
  display: grid;
  /* gap: 1rem 2rem; 
  justify-items: center;
} */
.main-section-center {
  width: 90vw;
  max-width: 1170px;
  display: flex;
  flex-direction: column;
  justify-items: center;
  margin: 0 auto;
  padding: 0 0.8rem;
  margin-bottom: 2rem;
}
.main-img {
  width: 100%;
  height: 400px;
  position: relative;
  display: block;
  object-fit: cover;
  margin: 2rem 0rem;
}
.chef-title {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
}
h3 {
  margin-bottom: 0.3rem;
  text-transform: capitalize;
}
hr {
  width: 8rem;
  height: 0.2rem;
  background: #ffc500;
  border-style: none;
  margin-left: 0;
  margin-bottom: 1.5rem;
}
h2 {
  text-transform: capitalize;
}
blockquote::before {
  content: open-quote;
  font-size: 2rem;
}
blockquote::after {
  content: close-quote;
  font-size: 2rem;
}
blockquote {
  quotes: "“" "”" "“" "”";
  font-size: 30px;
  padding-bottom: 20px;
  text-align: start;
}
h4 {
  text-transform: capitalize;
}
h5 {
  margin-bottom: 2rem;
  text-transform: capitalize;
}
p {
  font-family: "Allura", cursive;
  font-size: 1.8rem;
}
@media (min-width: 450px) {
  .main-img {
    min-height: 500px;
  }
  @media (min-width: 800px) {
    .main-section-center {
      align-items: center;
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 3rem;
    }

    hr {
      width: 10rem;
    }
    h2 {
      margin-bottom: 2rem;
      font-size: 2.5em;
    }
    h3 {
      font-size: 2rem;
    }
    h4 {
      font-size: 1.5rem;
    }
    h5 {
      font-size: 1.2rem;
    }
    .main-img {
      min-height: 400px;
    }
  }
}
</style>