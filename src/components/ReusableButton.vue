<template>
  <!-- <button class="btn">{{ text }}</button> -->
  <button class="btn"><slot>I'm a default slot</slot></button>
</template>

<script>
export default {
  //props: ["text"],
};
</script>

<style scoped>
.btn {
  font-size: 1.2rem;
  text-transform: uppercase;
  font-family: "Cormorant Upright", serif;
  font-weight: bold;
  padding: 1rem 1.8rem;
  border: none;
  background: #03c03c;
  color: #fff;
  transition: 0.2s ease-out;
  margin-top: 0.5rem;
}
.btn:hover {
  background: #ffc500;
  transition: 0.2s ease-out;
  cursor: pointer;
  color: #000;
}

@media screen and (min-width: 450px) {
  .btn {
    padding: 1rem 3rem;
    font-size: 1.3rem;
  }
}

@media (min-width: 900px) {
  .btn {
    padding: 0.75rem 1.5rem;
    font-size: 1rem;
  }
}
</style>