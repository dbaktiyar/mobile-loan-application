<template>
  <div class="divider">
    <hr>
    <div>{{text}}</div>
  </div>
</template>
<script>
export default {
  props: {
    text: {
      type: String,
      default: "or"
    }
  },
  name: "Divider"
};
</script>
<style lang="scss" scoped>
.divider {
  hr {
    height: 1px;
    background-color: #dce2e6;
    width: 90%;
    border: 0 none;
    margin-left: auto;
    margin-right: auto;
    margin-top: 25px;
  }
  div {
    background: #ffffff;
    text-transform: lowercase;
    position: relative;
    font-size: 12px;
    z-index: 10;
    top: -16px;
    margin: auto;
    width: 3em;
    color: #6d7a85;
  }
}
</style>

