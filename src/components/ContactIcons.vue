<template>
  <section class="contact-icons-container">
    <ul>
      <div class="parent">
        <li class="li1">
          <font-awesome-icon
            icon="fa-solid fa-location-dot"
            class="contact-icon"
          />
          <h3>Location</h3>
          <p>Prielmayerstraße 5, 80335 Munich, Germany</p>
        </li>
        <li class="li2">
          <font-awesome-icon
            icon="fa-brands fa-whatsapp"
            class="contact-icon"
          />
          <h3>Phone Number</h3>
          <p>+49 895 529 5867</p>
        </li>
        <li class="li3">
          <font-awesome-icon icon="fa-solid fa-at" class="contact-icon" />
          <h3>email address</h3>
          <p>pizzeriagrande@gmail.com</p>
        </li>
      </div>
    </ul>
  </section>
</template>

<script>
export default {};
</script>

<style scoped>
.contact-icons-container {
  background-color: #dcdcdc;
  margin-top: 2rem;
}
.parent {
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr;
  grid-column-gap: 10px;
  grid-row-gap: 10px;
  list-style: none;
  padding: 40px 40px 40px 5px;
  text-align: center;
  justify-items: center;
}
.services_title {
  text-align: center;
  padding-top: 30px;
  font-size: 18px;
}
.contact-icon {
  font-size: 1.8rem;
  color: #03c03c;
}
@media screen and (min-width: 800px) {
  .contact-icons-container {
    padding: 5rem 0;
  }

  .parent {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: 1fr;
    grid-column-gap: 10px;
    grid-row-gap: 10px;
  }
  .li1 {
    grid-area: 1 / 1 / 2 / 2;
  }
  .li2 {
    grid-area: 1 / 2 / 2 / 3;
  }
  .li3 {
    grid-area: 1 / 3 / 2 / 4;
  }
}
</style>