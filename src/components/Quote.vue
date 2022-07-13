<template>
  <section class="wrapper-quote">
    <blockquote>
      I had a dream, to bring back the flavours, sensations and smells of
      southern of Italy to Munich
    </blockquote>
    <hr />
  </section>
</template>

<script>
export default {};
</script>

<style scoped>
/* quote content start */
.wrapper-quote {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
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

  height: 50px;
  margin-top: 0;
  box-shadow: 0 20px 20px -20px #333;
  margin: -50px auto 10px;
  width: 40%;
}
/* quote content ends */
</style>