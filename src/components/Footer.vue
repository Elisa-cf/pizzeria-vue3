<template>
  <div class="footer-wrapper">
    <h5>
      &copy; 2022
      <span> Pizzeria GRANDE </span>
    </h5>

    <h5>All rights reserved</h5>
  </div>
</template>

<script>
export default {
  methods: {
    yearUpdate() {
      new Date().getFullYear();
    },
  },
};
</script>

<style scoped>
.footer-wrapper {
  height: 5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #0b1015;
  text-align: center;
}
span {
  color: #e9ba23;
}
h5 {
  color: white;
  margin: 0.1rem;
  font-weight: bold;
  text-transform: none;
  line-height: 1.25;
}
@media (min-width: 900px) {
  .footer-wrapper {
    flex-direction: row;
  }
  h5 {
    font-size: 1.5rem;
  }
}
</style>