<template>
  <div class="title">
    <h2>our menu</h2>
    <div class="underline"></div>
  </div>
  <div class="btn-container">
    <button class="filter-btn">button</button>
  </div>
</template>

<script>
export default {
  name: "MenuCategoryFilter",
};
</script>

<style scoped>
/* title our menu */
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
h2 {
  text-transform: capitalize;
}

@media screen and (min-width: 800px) {
  h2 {
    font-size: 2.5rem;
  }
}
/* categories filter */
.btn-container {
  margin-bottom: 4rem;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
}

.filter-btn {
  background: transparent;
  border-color: transparent;
  font-size: 1.2rem;
  text-transform: capitalize;
  margin: 0 0.5rem;
  letter-spacing: 1px;
  padding: 0.375rem 0.75rem;
  color: #0b1015;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.3s linear;
  border-radius: 0.25rem;
}

.filter-btn:hover {
  background: #03c03c;
  color: white;
}
</style>