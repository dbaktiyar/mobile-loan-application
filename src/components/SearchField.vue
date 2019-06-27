<template>
  <label class="search" :class="{'active': active}" for="inpt_search">
    <input
      @focus="onFocus"
      @mouseover="showPlaceholder = true"
      @mouseleave="mouseLeave"
      :placeholder="showPlaceholder ? 'Type something ...' : ''"
      @blur="onBlur"
      id="inpt_search"
      @input="handleInput"
      type="text"
      v-model="content"
    >
  </label>
</template>
<script>
export default {
  name: "SearchField",
  props: ["value"],
  data() {
    return {
      active: false,
      showPlaceholder: false,
      content: ""
    };
  },
  methods: {
    onFocus() {
      this.active = true;
    },
    onBlur(element) {
      if (!element.target.value) {
        this.active = false;
        this.showPlaceholder = false;
      }
    },
    handleInput() {
      this.$emit("input", this.content);
    },
    mouseLeave() {
      if (!this.active) {
        this.showPlaceholder = false;
      }
    }
  }
};
</script>
<style scoped>
.search {
  display: flex;
  position: relative;
  height: 40px;
  width: 40px;
  box-sizing: border-box;
  justify-content: center;
  align-items: center;
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.05);
  padding: 0 15px 0 15px;
  border: 1px solid #5a6674;
  border-radius: 25px;
  transition: all 200ms ease;
  cursor: text;
  background: white;
  min-height: 40px;
}

.search:after {
  content: "";
  position: absolute;
  width: 3px;
  height: 22px;
  right: -5px;
  top: 28px;
  background: #5a6674;
  border-radius: 1px;
  transform: rotate(-45deg);
  transition: all 200ms ease;
}

.search.active,
.search:hover {
  width: 100%;
  margin-right: 0;
}

.search.active:after,
.search:hover:after {
  height: 0;
}

.search input {
  width: 100%;
  border: none;
  box-sizing: border-box;
  font-family: Helvetica;
  font-size: 17px;
  color: inherit;
  background: transparent;
  outline-width: 0;
}

input:-webkit-autofill,
input:-webkit-autofill:hover,
input:-webkit-autofill:focus,
input:-webkit-autofill:active {
  -webkit-box-shadow: 0 0 0 30px white inset !important;
}
</style>
