<template>
  <!--<div class="container">-->
    <!--<form class="search-holder">-->
      <!--<div class="caption">What roadmap are you looking for?</div>-->
      <!--<search-field v-model="searchValue"/>-->
      <!--<button v-show="searchValue" class="btn color-1" @click="onSearch" type="submit">search</button>-->
    <!--</form>-->
  <!--</div>-->
  <Login></Login>
</template>

<script>
import Login from "../views/auth/Login.vue";

export default {
  name: "HomePage",
  components: {
    Login
  }
};
</script>

<style scoped>
.search-holder {
  position: absolute;
  left: 50%;
  top: 400px;
  transform: translate(-50%, -80%);
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 60%;
  height: 300px;
}

.caption {
  font-size: 30px;
  margin-bottom: 2rem;
  text-transform: uppercase;
}

.btn {
  width: 140px;
  margin-top: 1.5rem;
  height: 40px;
  border: none;
  color: white;
  overflow: hidden;
  padding: 0;
  text-transform: uppercase;
}

.color-1 {
  border-radius: 5px;
  background-color: transparent;
  border: 1px solid #374759;
  color: #374759;
}

input:-webkit-autofill,
input:-webkit-autofill:hover,
input:-webkit-autofill:focus,
input:-webkit-autofill:active  {
    -webkit-box-shadow: 0 0 0 30px white inset !important;
}
</style>
