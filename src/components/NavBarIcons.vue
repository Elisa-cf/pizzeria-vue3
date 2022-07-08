<template>
  <div class="cart-btn-wrapper">
    <div class="cart-btn">
      <!-- router -->
      <span class="cart-container">
        <font-awesome-icon icon="fa-solid fa-cart-shopping" />

        <span class="cart-value">0</span>
      </span>
    </div>
    <!-- router -->
    <button class="auth-btn">
      <font-awesome-icon icon="fa-solid fa-user" />
    </button>
  </div>
</template>

<script>
export default {};
</script>

<style >
.cart-btn-wrapper {
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  gap: 1.5rem;
}
.cart-btn {
  color: white;
  font-size: 1.5rem;
  letter-spacing: 0.1rem;
  display: flex;

  align-items: center;
}

.cart-container {
  display: flex;
  align-items: center;
  position: relative;
}
.cart-value {
  position: absolute;
  top: -14px;
  right: -16px;
  background: #03c03c;
  width: 4px;
  height: 6px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  font-size: 1.2rem;
  color: white;
  padding: 12px;
}
.auth-btn {
  display: flex;
  align-items: center;
  background: transparent;
  border-color: transparent;
  font-size: 1.5rem;
  cursor: pointer;
  color: white;
  letter-spacing: 0.1rem;
}
@media screen and (min-width: 850px) {
  .cart-container {
    font-size: 1.7rem;
  }
  .auth-btn {
    font-size: 1.7rem;
  }
}
</style>