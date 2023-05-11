<script>
  export default {}
</script>


<template>
  <div class="cartContainer">
    <h1>Cart page</h1>
    <p>Number of houses in cart: {{ $store.state.cart.length }}</p>

    <p class="cartMessage">
      Thank you for choosing Villora house plans! Your selected houses have been added to the cart. Review the details below and proceed to checkout when you are ready to finalize your purchase.
    </p>

    <ul class="cartList">
      <li :key="houseItems.id" v-for="houseItems in $store.state.cart">
        <div class="cartItem">
          <div class="imageContainer">
            <img :src="houseItems.houseImage" alt="" class="houseImage" />
          </div>
          <div class="houseDetails">
            <h3>{{ houseItems.houseName }}</h3>
            <p>Price: $ {{ houseItems.housePrice }}</p>
          </div>
          <input
            type="button"
            value="Remove from cart"
            @click="$store.commit('removeFromCart', houseItems)"
            class="removeButton"
          />
        </div>
      </li>
    </ul>
  </div>
</template>

<style scoped>
  .cartContainer {
    margin: 40px;
  }

  .cartList {
    list-style: none;
   
  }
  .cartItem {
    display: flex;
    align-items: center;
    margin-bottom: 20px;
    border: 1px solid #ccc;
    border-radius: 10px;
    padding: 10px;
  }

  .imageContainer {
    flex: 120px;
    display: flex;
    justify-content: center;
    align-items: center;
   
    overflow: hidden;
    margin-right: 89px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  }

  .houseImage {
    width: 100%;
    height: auto;
  }

  .imageContainer:hover {
    transform: scale(1.5);
  }

  .houseDetails {
    flex-grow: 5;
    margin-right: 10px; 
  }

  .cartMessage {
    margin-bottom: 20px;
    font-size: 18px;
    color: #555;
  }

  .removeButton{
  width: 120px;
  height: 40px;

  }

</style>